export default function ProductItem({ imgSrc, itemName, itemPrice }) {
  return (
    <div className="grid-child shadow-md rounded hover:scale-101">
      <img
        src={imgSrc}
        alt="Product"
        className="h-[300px] w-full object-cover border-[5px] border-solid"
        draggable="false"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-bold">{itemName}</h3>
        <p className="text-lg text-gray-600 font-bold">{itemPrice}</p>
      </div>
    </div>
  );
}
