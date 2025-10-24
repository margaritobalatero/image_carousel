import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET || "anyrandomstring";

const storage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) },
  });
}

export async function requireUserSession(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) throw redirect("/login");
  return userId;
}

export async function destroyUserSession(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: { "Set-Cookie": await storage.destroySession(session) },
  });
}
