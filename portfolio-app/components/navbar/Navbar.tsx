import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 font-bold text-x">
                            Daniel Caceres
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/skills" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                            Skills
                        </Link>
                        <Link href="/experience" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                            Experience
                        </Link>
                        <Link href="/projects" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href="/education" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                            Education
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
