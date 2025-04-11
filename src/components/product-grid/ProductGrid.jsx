import "./grid.css";

export default function ProductGrid() {
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);

  return (
    <div className="flex px-40 py-20 gap-20">
      <div className="w-[130px]">
        
      </div>

      <div className="w-full grid-container">
        {/* // Grid childs */}
        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>

        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>
        <div className="grid-child">HELLO</div>
      </div>
    </div>
  );
}
