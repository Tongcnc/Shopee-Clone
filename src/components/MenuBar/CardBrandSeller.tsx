type BrandSeller = {
  img: string;
  text: string;
  logo: string;
};

function CardBrandSeller(props: BrandSeller) {
  return (
    <div className="relative w-[180px] flex flex-col items-center bg-white p-4">
      <img src={props.img} alt="" />
      <h1 className="text-xl text-dark font-medium">{props.text}</h1>
      <div className="absolute top-28 rounded-full px-12 py-1 border-Light-gray bg-white border-[1px] z-10 shadow-md">
        <img src={props.logo} alt="" className="w-12" />
      </div>
    </div>
  );
}

export default CardBrandSeller;
