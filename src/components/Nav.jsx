export default function Nav() {
  return (
    <div className="bg-[#4a4a4a] text-white h-15 flex items-center justify-center px-4 relative">
      <a href="/link1" className="text-white px-4 hover:underline">
        ALL PRODUCTS
      </a>
      <a href="/link2" className="text-white px-4 hover:underline">
        WATCHES
      </a>
      <a href="/link3" className="text-white px-4 hover:underline">
        JEWELRY
      </a>
      <a href="/link4" className="text-white px-4 hover:underline">
        ABOUT US
      </a>
    </div>
  );
}
