// components/FlipkartLogo.js
import { Link } from "react-router-dom";

function FlipkartLogo() {
  return (
    <div className="w-full flex justify-center my-6">
      <Link to="/" className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-blue-600">Flipkart</span>
        <span className="text-sm text-gray-500 mt-1">
          Explore <span className="text-yellow-400 font-bold">Plus</span>{" "}
          <span className="text-yellow-400 text-base">★</span>
        </span>
      </Link>
    </div>
  );
}

export default FlipkartLogo;
