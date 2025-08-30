// "use client";

// import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
// import { BiBuoy } from "react-icons/bi";
// import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiPlusCircle, HiShoppingBag, HiTable, HiTrendingUp, HiUser, HiViewBoards } from "react-icons/hi";

// export function Component() {
//   return (
//     <Sidebar
//       aria-label="Main navigation sidebar"
//       className="bg-blue-50 w-56 h-full border-r border-blue-200"
//     >
//       <SidebarItems>
//         <SidebarItemGroup>
//           <SidebarItem href="/" icon={HiHome} className="text-blue-700 hover:bg-blue-100">
//             Home
//           </SidebarItem>
//           <SidebarItem href="/create" icon={HiPlusCircle} className="text-blue-700 hover:bg-blue-100">
//             Create
//           </SidebarItem>
//           <SidebarItem href="/progress" icon={HiTrendingUp} className="text-blue-700 hover:bg-blue-100">
//             Progress
//           </SidebarItem>
//         </SidebarItemGroup>
//       </SidebarItems>
//     </Sidebar>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiHome, HiPlusCircle, HiTrendingUp } from "react-icons/hi";

export function SidebarComponent() {
  const pathname = usePathname();

  return (
    <Sidebar
      aria-label="Main navigation sidebar"
      className="bg-white w-56 h-full border-r border-gray-200 shadow-md"
    >
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            href="/"
            icon={HiHome}
            className={`text-gray-700 hover:bg-blue-100 rounded-lg ${
              pathname === "/" ? "bg-blue-200 text-blue-800 font-semibold" : ""
            }`}
          >
            Home
          </SidebarItem>

          <SidebarItem
            href="/create"
            icon={HiPlusCircle}
            className={`text-gray-700 hover:bg-blue-100 rounded-lg ${
              pathname === "/create" ? "bg-blue-200 text-blue-800 font-semibold" : ""
            }`}
          >
            Create
          </SidebarItem>

          <SidebarItem
            href="/progress"
            icon={HiTrendingUp}
            className={`text-gray-700 hover:bg-blue-100 rounded-lg ${
              pathname === "/progress" ? "bg-blue-200 text-blue-800 font-semibold" : ""
            }`}
          >
            Progress
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
