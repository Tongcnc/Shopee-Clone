import { CarouselDefault } from "../CarouselDefault";

function PromotionLayout() {
  return (
    <div className="flex gap-1 my-10 px-40">
      <CarouselDefault />
      <div className="flex flex-col gap-1">
        <img
          src="https://cf.shopee.co.th/file/th-50009109-c9a4a52480af6a6b1ca9916fd76227cb_xhdpi"
          alt="promotion"
        />
        <img
          src="https://cf.shopee.co.th/file/th-50009109-bbf64d3928ce2bf944104f538d87066f_xhdpi"
          alt="promotion"
        />
      </div>
    </div>
  );
}

export default PromotionLayout;
