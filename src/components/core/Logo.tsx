import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link
        to="/"
        className="flex items-baseline font-black tracking-tight transition-colors duration-300 hover:text-blue-500"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }} // or Playfair if you prefer serif
      >
        <span className="text-5xl leading-none text-white">S</span>
        <span className="text-3xl leading-none text-white">hivam Kumar</span>
      </Link>
    </div>
  );
};

export default Logo;
