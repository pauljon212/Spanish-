export default function SharedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">JP Global</h3>
            <p className="text-sm">3D Printing & Language Learning</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">3D Printing</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-white transition">Services</a></li>
              <li><a href="/#process" className="hover:text-white transition">Process</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/learn" className="hover:text-white transition">Spanish Lessons</a></li>
              <li><a href="/learn" className="hover:text-white transition">Vocabulary</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-center text-slate-400">
            © {currentYear} JP Global. Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
