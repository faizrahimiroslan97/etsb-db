// ./app/routes/multimedia.jsx

import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";
import { SidePanel } from "~/components/side-panel";

export default function Multimedia() {
  return (
    <Layout>
      <div className="h-full flex">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}
