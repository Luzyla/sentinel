import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-thin">
			<body className="bg-second-color text-accent-color flex flex-row flex-wrap h-full w-full">
				<section className="flex w-[100%]">
					<aside className="max-widht-[550px] bg-slate-300 p-4 shadow-lg shadow-first-color h-full min-h-screen">
						<Logo />
						<Menu />
					</aside>

					<section className="bg-slate-200 w-full">
						<Navbar />
						{children}
					</section>
				</section>
			</body>
		</html>
	);
}
