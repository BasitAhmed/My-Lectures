import Image from "next/image";
import logo from "/public/Logo.webp";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    // Parent Div
    <div>
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" />
        </div>
        {/* Navigation */}
        <div>
          <ul className="flex gap-x-6">
            <li>Female</li>
            <li>Male</li>
            <li>Kids</li>
            <li>All Product</li>
          </ul>
        </div>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="What are you looking for"
            className="border border-gray-600 px-5 "
          />
        </div>

        {/* Cart Button */}
        <div>
          <button className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
