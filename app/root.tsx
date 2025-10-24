// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css"; // <-- import your compiled Tailwind CSS

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
