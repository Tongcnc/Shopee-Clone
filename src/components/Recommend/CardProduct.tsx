// @ts-ignore
import product from "../../data/product.js";

type CardProduct = {
  id: number;
  title: string;
  cover: string;
  price: string;
  sold: string;
  discount: number;
  recommend: boolean;
  mall: boolean;
};

function CardProduct() {
  return (
    <div className="grid grid-cols-6 gap-1 bg-white p-4">
      {product.map((item: CardProduct) => (
        <div
          key={item.id}
          className="border-Light-gray border-[1px] relative w-[180px] bg-white hover:border-Primary-color hover:cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md"
        >
          <img src={item.cover} alt={item.title} className="w-[180px]" />
          <h3 className="text-dark px-2">{item.title.slice(0, 30) + "..."}</h3>
          <div className="flex justify-between px-2">
            <p className="text-Primary-color font-semibold">{item.price}</p>
            <p className="text-gray text-xs">
              ขายแล้ว{" "}
              {item.sold.length > 3 ? (
                <span>{(parseFloat(item.sold) / 1000).toFixed(1)} พัน</span>
              ) : (
                <span>{item.sold}</span>
              )}{" "}
              ชิ้น
            </p>
          </div>

          {/* tag on the card */}
          {item.recommend ? (
            <div className="absolute top-2 left-[-5px]">
              <p className="bg-Primary-color text-white text-xs">ร้านแนะนำ</p>
            </div>
          ) : null}
          {item.mall ? (
            <div className="absolute top-2 left-[-5px]">
              <p className="bg-RedMall text-white text-xs px-1">Mall</p>
            </div>
          ) : null}

          <div className="absolute top-0 right-0">
            <p className="Tag">-{item.discount}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
