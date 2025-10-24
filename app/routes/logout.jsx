import { destroyUserSession } from "../utils/session.server.js";

export async function action({ request }) {
  return destroyUserSession(request);
}
