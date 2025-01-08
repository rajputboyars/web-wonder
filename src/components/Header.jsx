const Header = () => {
    return (
      <header className="bg-black bg-opacity-30 shadow fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-white">Web Wonders</div>
          <nav className="space-x-4">
            <a href="#" className="text-white hover:text-blue-600">Home</a>
            <a href="#services" className="text-white hover:text-blue-600">Services</a>
            <a href="#how-it-works" className="text-white hover:text-blue-600">How It Works</a>
            <a href="#testimonials" className="text-white hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  