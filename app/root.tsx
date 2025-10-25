import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [
  // Add your custom CSS
  { rel: "stylesheet", href: "/styles/carousel.css" },
  // ✅ Bootstrap CSS CDN
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    integrity:
      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+0UjT4y",
    crossOrigin: "anonymous",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-light">
        <div className="container py-4">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/* ✅ Bootstrap JS bundle CDN */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+QZ9jEY5iqk6g3k5iZLv3G5R0RDfX"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
