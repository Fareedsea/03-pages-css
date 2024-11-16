import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
        <div className="header-left">
          <Link href="#" className="logo">Fareed</Link>
        </div>
        <div className="header-right-div">
          <ul className="header-links">
          <li><Link className="nav-links" href="/">Home</Link></li>
          <li><Link className="nav-links" href="/about">About</Link></li>
          <li><Link className="nav-links" href="/contact">Contact</Link></li>
        </ul>
      </div>
      
    </div>
  );
}
