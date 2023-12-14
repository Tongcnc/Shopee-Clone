import CardProduct from "./CardProduct";

function Recommend() {
  return (
    <div className="bg-white mx-40 mb-20">
      <h2 className="text-Primary-color font-bold text-base py-4 border-b-4 border-b-Primary-color text-center">
        สินค้าแนะนำประจำวัน
      </h2>
      <CardProduct />
    </div>
  );
}

export default Recommend;
