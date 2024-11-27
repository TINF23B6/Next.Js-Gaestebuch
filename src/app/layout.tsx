import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/ui/logo";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Gästebuch",
	description: "Eine einfache Next.js-Gästebuch-App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`${geistMono.className} ${geistSans.className}`}
			>
				<ThemeProvider
					attribute="class"
					forcedTheme="dark"
					disableTransitionOnChange
				>
					{children}
c				</ThemeProvider>
			</body>
		</html>
	);
}
