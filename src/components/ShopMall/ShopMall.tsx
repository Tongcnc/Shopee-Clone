import { IoIosArrowDroprightCircle } from "react-icons/io";
import CardBrandSeller from "../MenuBar/CardBrandSeller";

function ShopMall() {
  return (
    <div className="bg-white mx-40 mt-10">
      <div className="flex border-b-[1px] border-b-Light-gray p-4">
        <div className="flex">
          <p className="uppercase text-RedMall font-semibold">shopee mall</p>
          <span> | </span>
          <div className="flex gap-2">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/cb78b175eb4e657a3785b3d3d109937a.png"
              alt="shopping bag icon"
              className="h-5"
            />
            <p>ดีลพิเศษแบรนด์ชั้นนำ</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/511aca04cc3ba9234ab0e4fcf20768a2.png"
              alt="carantee icon"
              className="h-5"
            />
            <p>ของแท้ 100%</p>
          </div>
          <div className="flex gap-2">
            <p>คืนเงิน/สินค้าใน 15วัน</p>
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/6c502a2641457578b0d5f5153b53dd5d.png"
              alt="return icon"
              className="h-5"
            />
          </div>
          <div className="flex gap-2">
            <p className="text-RedMall">ดูทั้งหมด</p>
            <IoIosArrowDroprightCircle style={{ color: "rgb(208,1,27)" }} />
          </div>
        </div>
      </div>

      <div className="flex">
        <img
          src="https://cf.shopee.co.th/file/th-50009109-79996e4f0871b6eac7c5833274be2117"
          alt=""
        />
        <div className="grid grid-rows-2 grid-flow-col">
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/sg-11134201-7qved-lid0crzaucct77"
            logo="https://down-bs-th.img.susercontent.com/4d8b5d1305bd8e98b75b442d71d7e35e_tn"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/th-11134201-7qul4-lj3y6ewp66q914"
            logo="https://neocurrency.com/wp-content/uploads/2023/03/20yy6slV3tp4meb_image-3.jpg"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/th-11134207-7r992-ln17o5vl3p6xfe"
            logo="https://www.jobbkk.com/upload/employer/0D/93D/02B93D/images/178493.webp?v=1697223335"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/sg-11134201-7qved-lid0crzaucct77"
            logo="https://down-bs-th.img.susercontent.com/4d8b5d1305bd8e98b75b442d71d7e35e_tn"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/sg-11134201-7qved-lid0crzaucct77"
            logo="https://down-bs-th.img.susercontent.com/4d8b5d1305bd8e98b75b442d71d7e35e_tn"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/th-11134201-7qul4-lj3y6ewp66q914"
            logo="https://neocurrency.com/wp-content/uploads/2023/03/20yy6slV3tp4meb_image-3.jpg"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/th-11134207-7r992-ln17o5vl3p6xfe"
            logo="https://www.jobbkk.com/upload/employer/0D/93D/02B93D/images/178493.webp?v=1697223335"
            text="ลดสูงสุด 70%"
          />
          <CardBrandSeller
            img="https://down-th.img.susercontent.com/file/sg-11134201-7qved-lid0crzaucct77"
            logo="https://down-bs-th.img.susercontent.com/4d8b5d1305bd8e98b75b442d71d7e35e_tn"
            text="ลดสูงสุด 70%"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopMall;
