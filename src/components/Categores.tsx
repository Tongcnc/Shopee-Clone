const Category = [
  {
    type: "ความสวยงามและของใช้ส่วนตัว",
    img: "https://static.vecteezy.com/system/resources/previews/025/028/072/original/powder-makeup-brush-generative-ai-free-png.png",
  },
  {
    type: "เสื้อผ้าแฟชั่นผู้ชาย",
    img: "https://freepngimg.com/save/12846-dress-shirt-png-hd/480x480",
  },
  {
    type: "กระเป๋า",
    img: "https://images.dailyobjects.com/marche/product-images/1203/midnight-blue-caddy-crossbody-images/Midnight-Blue-Caddy-Crossbody-vw.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60",
  },
  {
    type: "รองเท้าผู้หญิง",
    img: "https://pngimg.com/uploads/women_shoes/women_shoes_PNG7447.png",
  },
  {
    type: "นาฬิกาและแว่นตา",
    img: "https://inwfile.com/s-cc/m715nw.png",
  },
  {
    type: "สื่อบันเทิงภายในบ้าน",
    img: "https://www.sony.co.th/image/60fc808004d6860e433b5a4cafeb60d2?fmt=png-alpha&resMode=bisharp&wid=384",
  },
  {
    type: "เครื่องใช้ไฟฟ้าภายในบ้าน",
    img: "https://cosori.com/cdn/shop/products/01.00_WA1_0821CAF-L501-KUS_02.png?v=1684946259&width=1080",
  },
  {
    type: "กล้องและอุปกรณ์",
    img: "https://pngimg.com/uploads/photo_camera/photo_camera_PNG7849.png",
  },
  {
    type: "ของเล่น สินค้าแม่และเด็ก",
    img: "https://cdn.shopify.com/s/files/1/0576/6955/0289/products/hegen-pcto-240ml8oz-feeding-bottle-ppsu_250x250@2x.png?v=1623924229",
  },
  {
    type: "สัตว์เลี้ยง",
    img: "https://pngimg.com/d/dog_food_PNG61.png",
  },
  {
    type: "ยานยนต์",
    img: "https://i.pinimg.com/originals/38/f6/af/38f6afe3fc9c244bc6835b75a8bfab3f.png",
  },
  {
    type: "ตั๋วและบัตรกำนัล",
    img: "https://media.gogoprint.co.th/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/g/i/gift-voucher.png",
  },
  {
    type: "กลุ่มผลิตภัณฑ์เพื่อสุขภาพ",
    img: "https://fz.lnwfile.com/_/fz/_raw/ed/w8/o5.png",
  },
  {
    type: "เสื้อผ้าแฟชั่นผู้หญิง",
    img: "https://th.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%E0%B9%80%E0%B8%94%E0%B8%A3%E0%B8%AA%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B9%E0%B8%A5-birdseye-%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87--FPRO67BMW902_PM2_Front%20view.jpg",
  },
  {
    type: "รองเท้าผู้ชาย",
    img: "https://image.makewebeasy.net/makeweb/m_1920x0/wFXx9EXMY/DefaultData/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%9A.png",
  },
  {
    type: "เครื่องประดับ",
    img: "https://www.dermond.co.th/wp-content/uploads/2022/07/VATANIKA-x-DER-MOND_V22618P2.png",
  },
  {
    type: "เครื่องใช้ในบ้าน",
    img: "https://freepngimg.com/save/45430-platform-bed-png-file-hd/2500x2500",
  },
  {
    type: "มือถือและอุปกรณ์เสริม",
    img: "https://down-th.img.susercontent.com/file/5a82f65c4db893e1833983dc3987240a_tn",
  },
  {
    type: "คอมพิวเตอร์และแล็ปท็อป",
    img: "https://assets.stickpng.com/images/580b57fbd9996e24bc43bfd5.png",
  },
  {
    type: "อาหารและเครื่องดื่ม",
    img: "https://inwfile.com/s-db/nuyxwy.png",
  },
  {
    type: "กีฬาและกิจกรรมกลางแจ้ง",
    img: "https://pngimg.com/uploads/bicycle/bicycle_PNG5392.png",
  },
  {
    type: "เกมและอุปกรณ์เสริม",
    img: "https://inwfile.com/s-r/sqcd2g.png",
  },
  {
    type: "เครื่องเขียน หนังสือ และงาน",
    img: "https://www.cepos.fr/wp-content/uploads/2022/09/580_rpo_situ_DT_pngweb.png",
  },
  {
    type: "ช้อปปี้เพย์ใกล้ตัว",
    img: "https://cdn-icons-png.flaticon.com/512/3595/3595867.png",
  },
];

function Categories() {
  return (
    <div className="bg-white my-6 mx-40">
      <h2 className="py-6 pl-6 text-gray">หมวดหมู่</h2>
      <div className="grid grid-rows-2 grid-flow-col">
        {Category.map((type, i) => (
          <div
            key={i}
            className="border-Light-gray border-[1px] flex flex-col items-center p-1 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-Light-gray mb-6 relative">
              <img
                src={type.img}
                alt={type.type}
                className="w-24 absolute top-[50%] translate-y-[-50%]"
              />
            </div>
            <p className="text-sm text-dark">{type.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
