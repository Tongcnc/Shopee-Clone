const Help = [
  "Help Centre",
  "สั่งซื้อสินค้าอย่างไร",
  "เริ่มขายสินค้าอย่างไร",
  "ช่องทางการชำระเงินใน Shopee",
  "Shopee Coins",
  "การจัดส่งสินค้า",
  "การคืนเงินและการคืนสินค้า",
  "การันตีโดย Shopee คืออะไร?",
  "ติดต่อ Shopee",
];

const About = [
  "เกี่ยวกับเรา",
  "โปรแกรม Affiliate",
  "ร่วมงานกับเรา",
  "นโยบายของ Shopee",
  "นโยบายความเป็นส่วนตัว",
  "Shopee Blog",
  "Shopee Mall",
  "Seller Centre",
  "Flash Deals",
  "ผู้ติดต่อออนไลน์",
];

const Payment = [
  "https://down-th.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06",
  "https://down-th.img.susercontent.com/file/080424831b3a3dbe82af85852f675831",
  "https://down-th.img.susercontent.com/file/8335a80af33fb390d580cb3c57ef4330",
  "https://down-th.img.susercontent.com/file/c04844650bc89dac624eab8026caa276",
  "https://down-th.img.susercontent.com/file/c21d34c0a31c00441daf05a97f96df38",
  "https://down-th.img.susercontent.com/file/90d3cf6f82d3a1a74c84ab5f876583cb",
  "https://down-th.img.susercontent.com/file/0af0045814cb152488cfcd6921e0ab64",
  "https://down-th.img.susercontent.com/file/th-50009109-610807e056e0e5d16f8b063d89ff4a22",
  "https://down-th.img.susercontent.com/file/af82ae9d9ee79d1a064d6496896440ca",
  "https://down-th.img.susercontent.com/file/6e7e289bab75472a86d03bb11e2c9baa",
  "https://down-th.img.susercontent.com/file/734b42470f38e756615738cd5111d139",
  "https://down-th.img.susercontent.com/file/th-50009109-8c421b69876d8da18d39213c533408da",
];

const Express = [
  "https://down-th.img.susercontent.com/file/th-50009109-d75347c83dcad93b78214382e9e55774",
  "https://down-th.img.susercontent.com/file/ab1e8cd2988eecf57ea4bb44b48dc1dd",
  "https://down-th.img.susercontent.com/file/09442b3b2b135f8b6509eb3f67ef9f1c",
  "https://down-th.img.susercontent.com/file/73129aa780add391efbef64246720ba5",
  "https://down-th.img.susercontent.com/file/a136bea64c68258a5a0c8263e4f8104f",
  "https://down-th.img.susercontent.com/file/a136bea64c68258a5a0c8263e4f8104f",
  "https://down-th.img.susercontent.com/file/0645ba3892dea64a8538d4604bb690cb",
  "https://down-th.img.susercontent.com/file/8c07eb5612750efd0d2e7bfb34a09099",
  "https://down-th.img.susercontent.com/file/ee847678378381b73678fd01dc0dc3b3",
];

const Contact = [
  {
    contact: "Facebook",
    link: "https://facebook.com/ShopeeTH",
    img: "https://down-th.img.susercontent.com/file/fa8fb1ea9a769cb0343d38ed2826fd1e",
  },
  {
    contact: "Instagram",
    link: "https://instagram.com/Shopee_TH",
    img: "https://down-th.img.susercontent.com/file/b1a26fd8cab0c23749f53432c1f59fe6",
  },
  {
    contact: "Line",
    link: "https://line.me/R/ti/p/@shopeeth",
    img: "https://down-th.img.susercontent.com/file/535e22ccc23a8db15d83215261a8b2dd",
  },
  {
    contact: "LinkedIn",
    link: "https://linkedin.com/company/shopee",
    img: "https://down-th.img.susercontent.com/file/a2b07c5ed72399ad3fbf4696e0b5861a",
  },
];

const Country = [
  { country: "สิงคโปร์", link: "https://shopee.sg/" },
  { country: "อินโดนีเซีย", link: "https://shopee.co.id/" },
  { country: "ไทย", link: "https://shopee.co.th/" },
  { country: "มาเลเซีย", link: "https://shopee.com.my/" },
  { country: "เวียดนาม", link: "https://shopee.vn/" },
  { country: "ฟิลิปปินส์", link: "https://shopee.ph/" },
  { country: "บราซิล", link: "https://shopee.com.br/" },
  { country: "เม็กซิโก", link: "https://shopee.com.mx/" },
  { country: "โคลัมเบีย", link: "https://shopee.com.co/" },
  { country: "ชิลี", link: "https://shopee.cl/" },
  { country: "ไต้หวัน", link: "https://shopee.tw/" },
];

function Footer() {
  return (
    <div>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark">
                ศูนย์ช่วยเหลือ
              </h2>
              {Help.map((help, i) => (
                <ul key={i}>
                  <li>
                    <a
                      href="#"
                      className="text-xs text-gray hover:text-Primary-color"
                    >
                      {help}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark">
                เกี่ยวกับ SHOPEE
              </h2>
              {About.map((about, i) => (
                <ul key={i}>
                  <li>
                    <a
                      href="#"
                      className="text-xs text-gray hover:text-Primary-color"
                    >
                      {about}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark">
                วิธีการชำระเงิน
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {Payment.map((payment, i) => (
                  <ul key={i}>
                    <li>
                      <a href="#">
                        <img
                          src={payment}
                          alt="payment method"
                          className="rounded-sm shadow-md bg-white"
                        />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>

              <h2 className="my-6 text-sm font-semibold text-dark">
                บริการจัดส่ง
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {Express.map((exp, i) => (
                  <ul key={i}>
                    <li>
                      <a href="#">
                        <img
                          src={exp}
                          alt="express company"
                          className="rounded-sm shadow-md bg-white"
                        />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark">
                ติดตามเรา
              </h2>
              {Contact.map((contact, i) => (
                <ul key={i}>
                  <li className="flex gap-1 mb-2">
                    <img src={contact.img} alt={contact.contact} />
                    <a
                      href={contact.link}
                      className="text-xs text-gray hover:text-Primary-color"
                    >
                      {contact.contact}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            <div>
              <h2 className="mb-6 text-sm text-dark">ดาวน์โหลดแอปพลิเคชั่น</h2>
              <div className="flex gap-2">
                <a href="#">
                  <img
                    src="https://down-th.img.susercontent.com/file/9e8c9401e9e2d5d7d23191ced60b510b"
                    alt="Qr-code"
                    className="rounded-sm shadow-md"
                  />
                </a>
                <ul className="bg-white flex flex-col gap-1">
                  <li className="p-2 rounded-sm shadow-md">
                    <a href="#">
                      <img
                        src="https://down-th.img.susercontent.com/file/ed6fcd311cab7abf948d7cd81929c53e"
                        alt="App Store"
                      />
                    </a>
                  </li>
                  <li className="p-2 rounded-sm shadow-md">
                    <a href="#">
                      <img
                        src="https://down-th.img.susercontent.com/file/6be5f60baa027fff58b1b16d44e28a66"
                        alt="Google Play"
                      />
                    </a>
                  </li>
                  <li className="p-2 rounded-sm shadow-md">
                    <a href="#">
                      <img
                        src="https://down-th.img.susercontent.com/file/038f533c8d76c728fb64c57ab00a12d6"
                        alt="AppGallery"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copy Right */}
          <div className="px-4 py-6 flex justify-between text-gray text-sm border-t-[1px] border-gray">
            <p>© 2023 Shopee. All Rights Reserved</p>
            <div className="flex">
              <p>Country & Region: </p>
              {Country.map((country, i) => (
                <a href={country.link} key={i}>
                  {country.country}
                  {""}|
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
