"use client";

import * as React from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  const router = useRouter();

  const handleReturnToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <div onClick={handleReturnToDashboard} className="mb-2 flex gap-2 leading-none p-3 rounded-md hover:bg-gray-200 bg-gray-100 transition">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <GalleryVerticalEnd className="size-4" />
      </div>
      <div>
        <p className="font-semibold">eValuate</p>
        <p className="text-xs">Dashboard</p>{" "}
      </div>
    </div>
  );
}

// export function VersionSwitcher({
//   versions,
//   defaultVersion,
// }: {
//   versions: string[]
//   defaultVersion: string
// }) {
//   const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion)

//   return (
//     <SidebarMenu>
//       <SidebarMenuItem>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <SidebarMenuButton
//               size="lg"
//               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//             >
//               <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                 <GalleryVerticalEnd className="size-4" />
//               </div>
//               <div className="flex flex-col gap-0.5 leading-none">
//                 <span className="font-semibold">eValuate</span>
//                 <span className="text-xs">Dashboard</span>
//               </div>
//               <ChevronsUpDown className="ml-auto" />
//             </SidebarMenuButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="w-[--radix-dropdown-menu-trigger-width]"
//             align="start"
//           >
//             {versions.map((version) => (
//               <DropdownMenuItem
//                 key={version}
//                 onSelect={() => setSelectedVersion(version)}
//               >
//                 {version}{" "}
//                 {version === selectedVersion && <Check className="ml-auto" />}
//               </DropdownMenuItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   )
// }
