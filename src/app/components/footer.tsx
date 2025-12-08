import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm opacity-80">

        {/* Branding */}
        <div>
          <h3 className="font-semibold gradient-text text-lg">CoderLala Technologies</h3>
          <p className="mt-3 opacity-70">
            Building next-generation digital products with modern engineering.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="space-y-2">
            <Link href="https://linkedin.com" target="_blank">LinkedIn</Link><br />
            <Link href="https://github.com" target="_blank">GitHub</Link><br />
            <Link href="mailto:support@coderlala.com">Email Us</Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs opacity-50 mt-10">
        © {new Date().getFullYear()} CoderLala Technologies Pvt. Ltd. — All rights reserved.
      </p>
    </footer>
  );
}
