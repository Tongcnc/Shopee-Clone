type CardFlash = {
  img: string;
  price: string;
  sold: string;
  discount: string;
};

function CardFlashSale(props: CardFlash) {
  return (
    <div className="relative w-[180px] flex flex-col items-center p-4 gap-2">
      <img
        src="https://down-th.img.susercontent.com/file/sg-11134004-7qvcx-lhztqt1fudlx49"
        alt=""
        className="z-10 absolute top-0"
      />
      <img src={props.img} alt="" className="w-[180px]" />
      <p className="text-Primary-color text-xl">฿{props.price}</p>
      <div className="w-full text-xs text-white bg-Primary-color rounded-full text-center">
        ขายแล้ว {props.sold}
      </div>
      {/* tag Mall */}
      <div className="absolute top-2 left-[-5px]">
        <p className="bg-RedMall text-white text-xs px-1">Mall</p>
      </div>
      {/* tag Discount */}
      <div className="absolute top-0 right-0">
        <div className="flag relative w-10 h-12 mx-auto pt-15 text-xs font-semibold tracking-wide text-center Tag p-1">
          <p className="text-white">ลด</p>
          <p>-{props.discount}%</p>
          <div className="absolute left-0 right-0 bottom-0 w-0 h-0 border-b-white border-b-[10px] border-x-[20px] border-x-transparent content-empty"></div>
        </div>
      </div>
    </div>
  );
}

export default CardFlashSale;
