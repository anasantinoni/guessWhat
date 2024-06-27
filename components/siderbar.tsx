import Image from "next/image";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./siderbar-item";

type Props = {
    className?: string;
};

export const Sidebar = ( { className}: Props ) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className, 
        )}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                        <Image src="/mascot.svg" height={100} width={100} alt="Mascot" />
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Aprenda" 
                    href="/learn"
                    iconScr="/learn.svg" 
                />
                <SidebarItem 
                    label="Entre os melhores" 
                    href="/leaderboard"
                    iconScr="/leaderboard.svg" 
                />
                <SidebarItem 
                    label="Perguntas" 
                    href="/quests"
                    iconScr="/quests.svg" 
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
};