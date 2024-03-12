'use client';
import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			<Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
			<Navbar toggleMenu={toggleMenu} />
		</>
	);
}
