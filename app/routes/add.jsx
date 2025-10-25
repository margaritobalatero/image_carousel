import { Form, redirect } from "@remix-run/react";
import { connectDB, Item } from "../utils/db.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const caption = formData.get("caption");
  const mediaUrl = formData.get("mediaUrl");
  const type = formData.get("type");
  await connectDB();
  await Item.create({ caption, mediaUrl, type });
  return redirect("/dashboard");
}

export default function AddItem() {
  return (
    <div className="add-page">
      <h1>Add Media</h1>
      <Form method="post">
        <input name="caption" placeholder="Caption" required />
        <input name="mediaUrl" placeholder="Image or Video URL" required />
        <select name="type">
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <button type="submit">Add</button>
      </Form>
      <a href="/dashboard">⬅ Back</a>
    </div>
  );
}
