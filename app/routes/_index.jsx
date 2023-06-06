// ./app/routes/_index.jsx

import { redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader = async ({ request }) => {
  await requireUserId(request);
  return redirect("/home");
};

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">
        TailwindCSS Is Working!
      </h2>
    </div>
  );
}
