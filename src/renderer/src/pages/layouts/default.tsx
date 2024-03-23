import * as Collapsible from "@radix-ui/react-collapsible";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="h-screen w-screen bg-rotion-900 text-rotion-100 flex"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
