// app/routes/dashboard.jsx
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { requireUserSession } from "../utils/session.server.js";
import { connectDb } from "../utils/db.server.js";
import Image from "../utils/image.model.js";

// Loader → fetch user images
export async function loader({ request }) {
  const userId = await requireUserSession(request);
  await connectDb();

  const images = await Image.find({ createdBy: userId })
    .sort({ createdAt: -1 })
    .lean();

  // Convert ObjectId to string
  const sanitizedImages = images.map((img) => ({
    _id: img._id.toString(),
    url: img.url,
    caption: img.caption,
  }));

  return json({ images: sanitizedImages });
}

// Action → handle CRUD
export async function action({ request }) {
  const userId = await requireUserSession(request);
  await connectDb();

  const formData = await request.formData();
  const _action = formData.get("_action");

  if (_action === "create") {
    const url = formData.get("url");
    const caption = formData.get("caption");
    if (!url) return json({ error: "Image URL is required." }, { status: 400 });
    await Image.create({ url, caption, createdBy: userId });
    return redirect("/dashboard");
  }

  if (_action === "update") {
    const id = formData.get("id");
    const url = formData.get("url");
    const caption = formData.get("caption");
    await Image.findOneAndUpdate({ _id: id, createdBy: userId }, { url, caption });
    return redirect("/dashboard");
  }

  if (_action === "delete") {
    const id = formData.get("id");
    await Image.deleteOne({ _id: id, createdBy: userId });
    return redirect("/dashboard");
  }

  return null;
}

// Dashboard component
export default function Dashboard() {
  const { images } = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Image Dashboard</h1>
          <Form action="/logout" method="post">
            <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
              Logout
            </button>
          </Form>
        </div>

        {/* Add new image */}
        <Form method="post" className="bg-gray-800 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-3">Add New Image</h2>
          <input
            type="url"
            name="url"
            placeholder="Image URL"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            name="caption"
            placeholder="Caption (optional)"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          />
          <button
            name="_action"
            value="create"
            className="bg-blue-600 w-full py-2 rounded hover:bg-blue-500"
          >
            Add Image
          </button>
        </Form>

        {/* List of images */}
        <div className="space-y-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="bg-gray-800 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="flex-1">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="h-32 w-48 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
                />
                <p className="font-semibold">{img.caption || "No caption"}</p>
              </div>

              {/* Edit/Delete form */}
              <Form method="post" className="flex flex-col sm:flex-row gap-2">
                <input type="hidden" name="id" value={img._id} />
                <input
                  type="url"
                  name="url"
                  defaultValue={img.url}
                  className="p-2 rounded bg-gray-700 text-white"
                  required
                />
                <input
                  type="text"
                  name="caption"
                  defaultValue={img.caption}
                  className="p-2 rounded bg-gray-700 text-white"
                />
                <button
                  name="_action"
                  value="update"
                  className="bg-green-600 px-3 py-2 rounded hover:bg-green-500"
                >
                  Update
                </button>
                <button
                  name="_action"
                  value="delete"
                  className="bg-red-600 px-3 py-2 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </Form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
