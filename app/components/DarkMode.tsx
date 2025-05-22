"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const getInitialDarkMode = () => {
	if (typeof window !== "undefined") {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme === "dark";
	}
	return false; // Default to false if not on client-side
};

export default function DarkMode() {
	const [darkMode, setDarkMode] = useState(getInitialDarkMode());

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<div>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="fixed bottom-4 right-4 p-2 bg-primary text-white rounded-full shadow-lg"
			>
				{darkMode ? (
					<SunIcon className="h-6 w-6" />
				) : (
					<MoonIcon className="h-6 w-6" />
				)}
			</button>
		</div>
	);
}
