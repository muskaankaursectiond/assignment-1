import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333" }}>
      <Link href="/" legacyBehavior>
        <a style={{ color: "white", marginRight: "10px" }}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: "white", marginRight: "10px" }}>About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a style={{ color: "white" }}>Contact Us</a>
      </Link>
    </nav>
  );
}

