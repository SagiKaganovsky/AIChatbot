import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center ">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Chat
        </Link>
        <Link href="/complition" className="btn btn-ghost normal-case text-xl">
          Complition
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
