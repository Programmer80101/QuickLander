import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/yourbrand", label: "Twitter" },
    { href: "https://facebook.com/yourbrand", label: "Facebook" },
    { href: "https://instagram.com/yourbrand", label: "Instagram" },
  ];

  return (
    <footer className="mt-6 py-4 px-4 bg-neutral-200">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company Inc. All rights reserved.
      </p>
      <div aria-label="Footer Navigation" className="mt-3 flex flex-row gap-12 justify-center">
        {navLinks.map((link, index) => (
          <Link className="link" key={index} href="#">{link.label}</Link>
        ))}
      </div>
      <div aria-label="Social media" className="mt-3 flex flex-row gap-12 justify-center">
        {socialLinks.map((link, index) => (
          <Link className="link" key={index} href="#">{link.label}</Link>
        ))}
      </div>
      <div className="mt-3 flex flex-row gap-12 justify-center">
        <Link className="link" href="#">Privacy Policy</Link>
        <a className="link" href="#">Terms of Service</a>
      </div>
    </footer>
  );
}
