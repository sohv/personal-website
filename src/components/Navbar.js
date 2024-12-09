import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full h-14 flex justify-between items-center bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white px-3 py-2 shadow-lg">
      <Link href="/" passHref>
        <div className="cursor-pointer">
          {/* Use Next.js Image component for the SVG logo */}
          <Image 
            src="/images/image.svg" // Path to your SVG file
            alt="Logo"
            width={70} // Adjust width based on your design
            height={70} // Keep width and height the same for circular logo
            className ="object-contain" // Ensure it blends well and remains contained within the circle
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        {/* Home Link */}
        <Link href="/" legacyBehavior>
          <a className="px-3 py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out">Home</a>
        </Link>

        {/* Projects Link */}
        <Link href="/projects" legacyBehavior>
          <a className="px-3 py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out">Projects</a>
        </Link>

        {/* Resume Link */}
        <Link href="/resume" legacyBehavior>
          <a className="px-3 py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out">Resume</a>
        </Link>

        {/* Contact Link */}
        <Link href="/contact" legacyBehavior>
          <a className="px-3 py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out">Contact</a>
        </Link>

        {/* Blog Button */}
        <Link href="/blog" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300 ease-in-out">
            Blog
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
