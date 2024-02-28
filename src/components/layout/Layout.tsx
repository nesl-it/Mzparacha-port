"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AnimatePresence mode="popLayout">
			<Navbar />
			{children}
			<Footer />
		</AnimatePresence>
	);
}
