
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
  <nav className="p-4">
        
        <div className="text-3xl font-bold font-heading text-primary">Logo</div>
        
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-secondary transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
