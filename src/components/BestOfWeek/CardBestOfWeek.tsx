type CardWeek = {
  img: string;
  sold: string;
  name: string;
};

function CardBestOfWeek(props: CardWeek) {
  return (
    <div className="bg-white w-[200px] overflow-hidden">
      <div className="relative">
        <img src={props.img} alt="" />
        <div className="bg-gray/50 absolute bottom-0 text-white text-sm w-full text-center">
          ยอดขายต่อเดือน <span>{props.sold}</span> พัน+
        </div>

        <div className="text-center h-10 w-[28px] -top-1 text-xs absolute">
          <p className="text-white absolute top-4 z-20 font-semibold left-1/2 -translate-x-1/2">
            TOP
          </p>
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-b from-Secondary-color to-Primary-color skew-y-[24deg]"></div>
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-b from-Secondary-color to-Primary-color -skew-y-[24deg]"></div>
        </div>
      </div>
      <p className="text-gray text-lg my-2">{props.name}</p>
    </div>
  );
}

export default CardBestOfWeek;
