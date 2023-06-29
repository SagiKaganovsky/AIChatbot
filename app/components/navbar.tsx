import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center ">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Chat
        </Link>
        <Link href="/completion" className="btn btn-ghost normal-case text-xl">
          Completion
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
