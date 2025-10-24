// app/routes/signup.jsx
import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { registerUser } from "../utils/auth.server.js";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    // Save user in MongoDB
    await registerUser({ username, password });
    // Redirect to login page
    return redirect("/login");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
}

export default function Signup() {
  const data = useActionData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      {data?.error && <p className="text-red-400 mb-4">{data.error}</p>}

      <Form method="post" className="bg-gray-800 p-8 rounded-xl w-80 space-y-4">
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
          className="bg-blue-600 w-full py-2 rounded hover:bg-blue-500"
        >
          Sign Up
        </button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 underline">
            Login
          </a>
        </p>
      </Form>
    </div>
  );
}
