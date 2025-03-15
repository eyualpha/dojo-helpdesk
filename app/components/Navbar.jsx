import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        width={50}
        quality={100}
        className=" rounded-full"
        placeholder="blur"
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
