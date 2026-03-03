export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Web X-6 Smasa</h2>
          <p className="text-sm text-slate-400">
            Crafted & developed by{" "}
            <a
              href="https://github.com/Pashyaaaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              @vyanzll
            </a>
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://www.instagram.com/vyanzll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://github.com/Pashyaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:octavianpashya20@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-8">
        © {new Date().getFullYear()} Octavian Pashya Ramadhan. All rights
        reserved.
      </div>
    </footer>
  );
}
