export default function Header() {
  return (
    <nav className="nav flex justify-center  sticky z-50 top-0 bg-trasparent backdrop-blur-sm">
      <ul className="flex space-x-10 mt-10">
        <li className="text-2xl font-semibold hover:shadow-lg p-2 rounded-lg">
          <a href="#hero">Home</a>
        </li>
        <li className="text-2xl font-semibold hover:shadow-lg p-2 rounded-lg">
          <a href="#alttext">About</a>
        </li>
        <li className="text-2xl font-semibold hover:shadow-lg p-2 rounded-lg">
          <a href="#products">Products</a>
        </li>
        <li className="text-2xl font-semibold hover:shadow-lg p-2 rounded-lg">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
