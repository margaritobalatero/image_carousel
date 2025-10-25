import { useLoaderData, Form } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { connectDB, Item } from "../utils/db.server.js";
import { useState } from "react";
import "../styles/carousel.css";

// Loader: fetch items with optional search, newest first
export async function loader({ request }) {
  await connectDB();
  const url = new URL(request.url);
  const search = url.searchParams.get("q") || "";

  const items = await Item.find(
    search ? { caption: new RegExp(search, "i") } : {}
  ).sort({ _id: -1 });

  return json({ items, search });
}

// Action: handle delete and update requests
export async function action({ request }) {
  await connectDB();
  const formData = await request.formData();
  const _id = formData.get("_id");
  const actionType = formData.get("action");

  if (actionType === "delete" && _id) {
    await Item.findByIdAndDelete(_id);
  }

  if (actionType === "update" && _id) {
    const caption = formData.get("caption");
    const mediaUrl = formData.get("mediaUrl");
    await Item.findByIdAndUpdate(_id, { caption, mediaUrl });
  }

  return redirect("/dashboard");
}

// Utility: convert YouTube URL to embed
function getYouTubeEmbedUrl(url) {
  try {
    const ytMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w\-]{11})/
    );
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
  } catch (err) {
    console.error("YouTube parse error:", err);
  }
  return null;
}

export default function Dashboard() {
  const { items, search } = useLoaderData();
  const [editingId, setEditingId] = useState(null);
  const [detailItem, setDetailItem] = useState(null); // for modal

  return (
    <div className="carousel-container">
      <h1>🎠 Media Carousel</h1>

      {/* Search Form */}
      <Form method="get" className="search-form">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Search caption..."
        />
        <button type="submit">🔍 Search</button>
      </Form>

      {/* Carousel */}
      <div className="carousel">
        {items.map((item) => {
          const youtubeEmbed = getYouTubeEmbedUrl(item.mediaUrl);
          const isEditing = editingId === item._id;

          return (
            <div className="carousel-item" key={item._id}>
              {item.type === "image" ? (
                <img src={item.mediaUrl} alt={item.caption} />
              ) : youtubeEmbed ? (
                <iframe
                  width="250"
                  height="180"
                  src={youtubeEmbed}
                  title={item.caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: "12px" }}
                ></iframe>
              ) : (
                <video
                  src={item.mediaUrl}
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    borderRadius: "12px",
                    width: "250px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              )}

              <p>{item.caption}</p>

              {/* Delete Button */}
              <Form method="post" className="d-inline mb-1">
                <input type="hidden" name="_id" value={item._id} />
                <input type="hidden" name="action" value="delete" />
                <button className="btn btn-danger btn-sm w-100">Delete</button>
              </Form>

              {/* Update Section */}
              {isEditing ? (
                <Form method="post" className="mt-1">
                  <input type="hidden" name="_id" value={item._id} />
                  <input type="hidden" name="action" value="update" />
                  <input
                    type="text"
                    name="caption"
                    defaultValue={item.caption}
                    placeholder="Caption"
                    className="form-control mb-1"
                    required
                  />
                  <input
                    type="text"
                    name="mediaUrl"
                    defaultValue={item.mediaUrl}
                    placeholder="Media URL"
                    className="form-control mb-1"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-success btn-sm w-100 mb-1"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm w-100"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </Form>
              ) : (
                <button
                  className="btn btn-primary btn-sm w-100 mt-1"
                  onClick={() => setEditingId(item._id)}
                >
                  Update
                </button>
              )}

              {/* Detail Button */}
              <button
                className="btn btn-info btn-sm w-100 mt-1"
                onClick={() => setDetailItem(item)}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal for Detail */}
      {detailItem && (
        <div className="modal-overlay" onClick={() => setDetailItem(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{detailItem.caption}</h3>
            {detailItem.type === "image" ? (
              <img
                src={detailItem.mediaUrl}
                alt={detailItem.caption}
                style={{ maxWidth: "100%", borderRadius: "12px" }}
              />
            ) : getYouTubeEmbedUrl(detailItem.mediaUrl) ? (
              <iframe
                width="560"
                height="315"
                src={getYouTubeEmbedUrl(detailItem.mediaUrl)}
                title={detailItem.caption}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: "12px" }}
              ></iframe>
            ) : (
              <video
                src={detailItem.mediaUrl}
                controls
                autoPlay
                style={{ maxWidth: "100%", borderRadius: "12px" }}
              >
                Your browser does not support the video tag.
              </video>
            )}
            <button
              className="btn btn-secondary mt-2"
              onClick={() => setDetailItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <a href="/add" className="add-link">
        ➕ Add Media
      </a>
      <br />
      <a href="/login" className="add-link">
        ➕ Logout
      </a>
    </div>
  );
}
