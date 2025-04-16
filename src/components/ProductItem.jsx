export default function ProductItem({
  firstImgSrc,
  secondImageSrc,
  itemName,
  itemPrice,
  onClick,
}) {
  return (
    // Add a second image later on
    <div
      className="grid-child relative shadow-md rounded hover:scale-101 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[280px] w-full group">
        <img
          src={firstImgSrc}
          alt="Product"
          className="h-full w-full object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          draggable="false"
        />
        <img
          src={secondImageSrc}
          alt="Product"
          className="h-full w-full object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          draggable="false"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-bold">{itemName}</h3>
        <p className="text-lg text-gray-600 font-bold">{itemPrice}</p>
      </div>
    </div>
  );
}

// FULL WORKING VERSION OF THE CODE ->
