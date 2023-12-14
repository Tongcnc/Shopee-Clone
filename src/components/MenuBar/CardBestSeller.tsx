type BestSeller = {
  img: string;
  price: string;
  discount: string;
};

function CardBestSeller(props: BestSeller) {
  return (
    <div className="relative w-[180px] flex flex-col items-center border-Light-orange border-[1px] bg-white p-4">
      <img src={props.img} alt="" />
      <h1 className="text-xl text-dark font-medium">฿{props.price}</h1>
      <div className="absolute top-0 right-0 Tag">-{props.discount}%</div>
    </div>
  );
}

export default CardBestSeller;
