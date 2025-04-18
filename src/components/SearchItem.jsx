import "../components/search-modal/search.css"

export default function SearchItem({ img, name, price }) {
    return (
<div className="search-item flex h-[130px] py-10 items-center gap-4 px-4 hover:bg-[#F2F5FF] transition-colors duration-200 cursor-pointer border-b border-gray-300">        <img
          src={img}
          alt={name}
          className="h-[50px] w-[50px] border border-gray-300 rounded-sm"
        />
        <div className="flex flex-col">
          <h1 className="search-item text-black font-bold group-hover:underline">{name}</h1>
          <h2 className="search-item text-gray-500 group-hover:underline">{price} €</h2>
        </div>
      </div>
    );
  }