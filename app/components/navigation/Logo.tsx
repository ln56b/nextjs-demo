import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function Logo() {
	const [width, setWidth] = useState(0);
	const [showButton, setShowButton] = useState(false);

	const updateWidth = () => setWidth(window.innerWidth);
	const changeNavButton = () => {
		if (window.scrollY >= 400 && window.innerWidth < 728) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};
	useEffect(() => {
		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', changeNavButton);
	});

	return (
		<>
			<Link href="/" style={{ display: showButton ? 'none' : 'block' }}>
				<Image
					src="/images/logo.jpg"
					alt="Logo"
					width={width < 1024 ? '50' : '100'}
					height={width < 1024 ? '50' : '100'}
					className="relative"
				/>
			</Link>
			<div
				style={{
					display: showButton ? 'block' : 'none',
				}}
			>
				<Button />
			</div>
		</>
	);
}
