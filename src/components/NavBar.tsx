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

// import logo from "../assets/logo-white.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen bg-Primary-color text-white">
      <div className="flex text-xs">
        <div className="flex gap-2">
          <p>Seller Centre</p>
          <span>|</span>
          <p>เริ่มต้นขายสินค้า</p>
          <span>|</span>
          <p>ดาวน์โหลด</p>
          <span>|</span>
          <div className="flex">
            <p>ติดตามเราบน</p>
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

        <div className="flex">
          <div>
            <RiNotification2Line />
            <p>การแจ้งเตือน</p>
          </div>
          <div>
            <IoHelpCircleOutline />
            <p>ช่วยเหลือ</p>
          </div>
          <div>
            <TfiWorld />
            <p>ไทย</p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoIosArrowDown />
            </button>
            {isOpen && (
              <div>
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

      <div className="flex">
        <img
          src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-products-kjm-11.png"
          alt="logo"
          className="w-[150px]"
        />
        <input
          type="search"
          placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
          className="px-10 rounded-md"
        />
        <label htmlFor="search">
          <CiSearch />
        </label>
        <button type="submit" className="bg-Primary-color rounded-sm px-4 py-2">
          <FiShoppingCart />
        </button>
      </div>

      <div className="flex gap-2 text-xs">
        <p>ลูกค้าใหม่</p>
        <p>ของฟรี</p>
        <p>ไอโฟน 1 บาท</p>
        <p>ลูกค้าใหม่</p>
        <p>เครื่องใช้ไฟฟ้า</p>
        <p>รองเท้าผ้าใบ1บาท</p>
        <p>แจกฟรี</p>
      </div>
    </div>
  );
}

export default NavBar;
