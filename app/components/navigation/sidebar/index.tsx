import Link from 'next/link';

export default function Sidebar({
	menuOpen,
	toggleMenu,
}: {
	menuOpen: boolean;
	toggleMenu: () => void;
}) {
	return (
		<div className="">
			<ul>
				<li>
					<Link href="/speakers">Speakers</Link>
				</li>
				<li>
					<Link href="/agenda">Agenda</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
			</ul>
		</div>
	);
}
