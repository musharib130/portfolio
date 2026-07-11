"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { getConfirmation } from "@/components/confirmation-dialog/confirmation-dialog.store";
import { useAuthGuard } from "@/hooks/useAuthGuard";

const menuItems = [
	{ label: "Dashboard", href: "/dashboard" },
	{ label: "Portfolio Managment", href: "/dashboard/portfolio-managment" },
	{ label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardShellLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    const { status } = useAuthGuard();

	const pathname = usePathname();

    const handleLogout = async () => {
        const confirmed = await getConfirmation("Are you sure you want to logout?");
        
        if (confirmed) {
            signOut({ callbackUrl: "/auth" });
        }
    }

    if (status === "loading" || status === "unauthenticated") {
        return null
    }

	return (
		<div className="h-screen w-screen overflow-hidden bg-[#f4efe5] p-4">
			<div className="flex h-full w-full gap-4">
				<aside className="flex h-full w-[280px] shrink-0 flex-col rounded-lg border border-[#ccb794] bg-[#f8f2e6] p-4">
					<div className="mb-4 rounded-md border border-[#ccb794] bg-[#efe2cc] p-3 text-center text-lg font-semibold text-[#5f3d1e]">
						Musharib&apos;s Dashboard
					</div>

					<div className="min-h-0 flex-1 overflow-auto rounded-md border border-[#ccb794] bg-[#f3e9d8] p-2">
						<nav className="flex flex-col gap-2">
							{menuItems.map((item) => {
								const isActive = pathname === item.href;

								return (
									<Link
										key={item.href}
										href={item.href}
										className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
											isActive
												? "border-[#7a4d25] bg-[#7a4d25] text-[#f7ecdd]"
												: "border-[#ccb794] bg-[#fbf7f0] text-[#5f3d1e] hover:bg-[#efe2cc]"
										}`}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>
					</div>

					<button
						type="button"
						onClick={handleLogout}
						className="mt-4 rounded-md border border-[#8a2f2f] bg-[#b94949] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#9e3f3f] cursor-pointer"
					>
						Logout
					</button>
				</aside>

				<main className="paper-texture h-full min-w-0 flex-1 rounded-lg p-4">{children}</main>
			</div>
		</div>
	);
}
