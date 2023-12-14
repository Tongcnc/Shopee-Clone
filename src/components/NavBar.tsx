import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLine } from "react-icons/fa6";
import { RiNotification2Line } from "react-icons/ri";
import { IoHelpCircleOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-b from-Primary-color to-Secondary-color text-white sticky top-0 z-[999] px-40 py-4">
      <div className="flex text-sm justify-between">
        <div className="flex gap-2">
          <p>Shopee Home</p>
          <span>|</span>
          <p>เริ่มต้นขายสินค้า</p>
          <span>|</span>
          <p>ดาวน์โหลด</p>
          <span>|</span>
          <div className="flex">
            <p>ติดตามเราบน</p>
            <div className="flex gap-2 ml-2">
              <a href="https://facebook.com/ShopeeTH" target="blank">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/Shopee_TH" target="blank">
                <AiFillInstagram />
              </a>
              <a
                href="https://line.me/R/ti/p/@shopeeth?from=page&openQrModal=true&searchId=shopeeth"
                target="blank"
              >
                <FaLine />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-2">
            <RiNotification2Line />
            <p>การแจ้งเตือน</p>
          </div>
          <div className="flex gap-2">
            <IoHelpCircleOutline />
            <p>ช่วยเหลือ</p>
          </div>
          <div className="flex gap-2 relative">
            <TfiWorld />
            <p>ไทย</p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="bg-white text-Primary-color p-3 rounded-sm absolute top-6 left-0 z-[9999]">
                <p>English</p>
                <p>ไทย</p>
              </div>
            )}
          </div>

          <p>
            <span>สมัครใหม่</span>
            <span>|</span>
            <span>เข้าสู่ระบบ</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <img
          src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-products-kjm-11.png"
          alt="logo"
          className="w-[150px]"
        />
        <div>
          <div className="flex">
            <div className="relative">
              <input
                type="search"
                placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
                className="px-4 py-2 w-[800px] rounded-sm text-dark"
              />
              <label
                htmlFor="search"
                className="absolute top-1 right-1 z-30 bg-Primary-color px-5 py-2 rounded-sm cursor-pointer"
              >
                <CiSearch />
              </label>
            </div>
          </div>
          <div className="flex gap-2 text-xs mt-1">
            <p>ลูกค้าใหม่</p>
            <p>ของฟรี</p>
            <p>ไอโฟน 1 บาท</p>
            <p>ลูกค้าใหม่</p>
            <p>เครื่องใช้ไฟฟ้า</p>
            <p>รองเท้าผ้าใบ1บาท</p>
            <p>แจกฟรี</p>
            <p>0 บาท</p>
            <p>รองเท้า</p>
            <p>ลูกค้าใหม่</p>
            <p>เสื้อกันหนาว</p>
          </div>
        </div>
        <button>
          <FiShoppingCart size={"2rem"} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
