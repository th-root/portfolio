import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-slate-700">
      <h1 className="flex items-center text-2xl font-bold">
        Thiago Silva De Oliveira
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
