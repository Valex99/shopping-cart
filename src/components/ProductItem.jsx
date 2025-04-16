export default function ProductItem({ imgSrc, itemName, itemPrice, onClick }) {
  return (
    // Add a second image later on
    <div className="grid-child shadow-md rounded hover:scale-101 cursor-pointer" onClick={onClick}>
      <img
        src={imgSrc}
        alt="Product"
        className="product-img h-[280px] w-full object-contain"
        draggable="false"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-bold">{itemName}</h3>
        <p className="text-lg text-gray-600 font-bold">{itemPrice}</p>
      </div>
    </div>
  );
}
