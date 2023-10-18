import { ReactElement } from "react";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "Home Page",
    description: "A homepage for my browser with weather and search.",
    keywords: "homepage, weather, search",
    icons: {
        icon: "/assets/favicon.svg",
    },
};

export default function RootLayout({ children }: { children: ReactElement }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
