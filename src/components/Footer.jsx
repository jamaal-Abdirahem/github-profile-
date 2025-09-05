function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <p className="text-sm sm:text-base">
          This project is built with ❤️ by{" "}
          <a
            href="https://github.com/jamaal-abdirahem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            Jamal Abdirahim Mohamed
          </a>{" "}
          using React & Tailwind CSS.
        </p>

        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
