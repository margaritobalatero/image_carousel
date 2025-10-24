import { Form, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { loginUser } from "../utils/auth.server.js";
import { createUserSession } from "../utils/session.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const user = await loginUser({ username, password });
    return createUserSession(user._id, "/dashboard");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
}

export default function Login() {
  const data = useActionData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {data?.error && <p className="text-red-400 mb-4">{data.error}</p>}

      <Form method="post" action="/login" className="bg-gray-800 p-8 rounded-xl w-80 space-y-4" reloadDocument>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-green-600 w-full py-2 rounded hover:bg-green-500"
        >
          Login
        </button>
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 underline">Sign Up</a>
        </p>
      </Form>
    </div>
  );
}
