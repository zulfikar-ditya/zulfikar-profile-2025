"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function DarkMode() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	useEffect(() => {
		const storedDarkMode = localStorage.getItem("theme");
		if (storedDarkMode === "dark") {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

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
