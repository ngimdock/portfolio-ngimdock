import { useState, useEffect } from "react";

export function useScrollWindow() {
	const [scrollPositionY, setScrollPositionY] = useState(window.scrollY);

	//useEffect section
	useEffect(() => {
		window.addEventListener("scroll", calculateScrollValue);

		return () => window.removeEventListener("scroll", calculateScrollValue);
	}, [scrollPositionY]);

	function calculateScrollValue() {
		setScrollPositionY(window.scrollY);
	}

	return [scrollPositionY];
}
