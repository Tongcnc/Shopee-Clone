import CardBestSeller from "./CardBestSeller";
import CardBrandSeller from "./CardBrandSeller";

const Menu = [
  {
    word: "ส่งฟรี*ไม่อั้น",
    img: "data:image/png;base64,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",
  },
  {
    word: "แฟชั่น&บิวตี้",
    img: "https://png.pngtree.com/png-clipart/20190906/original/pngtree-red-dress-clothing-png-image_4548315.jpg",
  },
  {
    word: "อิเล็กทรอนิกส์",
    img: "https://www.pngitem.com/pimgs/m/275-2751085_plug-your-data-into-our-huddleboard-icon-electric.png",
  },
  {
    word: "Shopee Mall ลดสูงสุด 90%",
    img: "https://static.vecteezy.com/system/resources/thumbnails/007/636/978/small_2x/shopping-bag-logo-icon-design-template-free-vector.jpg",
  },
  {
    word: "Hobbies & Lifestyle",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8AAP+QkP/v7/8zM//o6P8jI/9aWv+2tv+pqf9PT//g4P+srP+zs/9SUv/s7P/c3P/X1/8pKf9DQ/8dHf8QEP/09P/4+P+dnf9hYf+Zmf+goP/Q0P+0tP9fX/9ubv98fP9zc/+Li/85Of/AwP+6uv/Ly//Dw/8vL/9KSv9mZv+kpP+Bgf9AQP+Ghv/a2v+Tk/9ycv+j8++GAAAEy0lEQVR4nO2d22KiMBRFSRFQqOAVvFWrIo7Xdv7/50ZtbS1BEuRgibPXM2W7CgQIJ4mmAQAAAAAAAAAAAAAAAAAAAAAAAAAAUBjBaPFSP/NSrVYXB8Jl5BDnONEyPO76kHCRtxgFxDkczVmbcXS75twaeIQxXm88N7tdPmq3bxLGJBCu+NAzU7rDaLxej2kvijyMUet6MmMTgyjGm6bFmEuimASMSloyY686SYy/T49pUV/z30zSkxnbkJxAz6KYPkVKEpEomY0pWhtd+I9kRZ2nM2Fyn+I0lTCcEcQk8VQawyeCmCRgCENJSm04fnhDl+Ru0YchDG/mwQz9t2V90xscGJ4fNstnGAyPP3DQq1WjrG1c5LbMTvcEY+c/Lp+hfnz7PtFpuWGGjOBney1vaFMYeuMshhf0femI9c/9yRu2Kd6BPfdGQ2ZJxgfxF1BlDNlU7mpcxt/k1TE06zIBAfcaqI4h28pcig0uQCFDtyEREP3JYUjSluYwrEQSAWHndsM5yTFM6ZMVGXZkbooLrqdZ3rBCYWgk9KrLGrKqRECV+yuVDGUa08c3rCtt+AxDLalP/c6GXh7DWsGGJN9MjPnDGwq+cMEQhjCEoQKGtRyGHQpDJ7Uc4rcNZV5AYQhDGMIQhql0KQoHG1xXGAxhCEMYwvChDNmIwLCZUMAOQxjC8MEM8/TTMJK2NI/h9e8Wga57nmE4TpP3yGD4Xs3PII/hU7PhGIbn6fqPmoWgtnbtVbu9283nFTOPYcfMj/h2mGJoVubz3a7dXtnu+nv0h7NO2MlthnfiuuEP+p9df44l2J+yhsx+O22VMk7sA3UN2eRY/sJ/t4+jsCHbHFqZnXArlQ1bvtYQ709lw8MzCF+YwKG04VAbiDdS2nAmMeRObcNXTTAi9YjihsK7IQx/Axhe8D9ch4/flkr8bKUNt9pGvJHShu8S0wiobRhqvngjpQ0PL4hb4UYqG041me5JlQ2PHbhBT7SVwobvp+42X/TL1TXcnztNqy7fSXqBooYd+2LwhV7dTyfr9XhsWS5f+5jhC6lr5cfN0+ddsS1rPF6vJ9N9PTbMLPD9j3799xyGf0aHPeTEG3GD5zIYzt5Offq+nzLb0a+Pt8hVQduTCMjzda0EhhIzVcEQhjCEYT7DjUSA2neLoisVYAhDGMIQho9gqMRodRjCEIb/geHvz/wBQxjCEIYwLL/hi9KGasxmBkMYwlAFw8HDGw5hmMqSm3hDIUOpGVr5cVAKGU6lpvmN4uOE1DGcSy6TtIkVtChj2JWpxDgRK6lRxjDDMlBh6/IwqmHYbcnMkvyFX9t+lYHZ5/K38hiev2X7tvtZ5PV3u7l5FZ/ga1B0eQy/7nppxV03UEJDYmAIQ0kkDBcEMUmUxzDLojlZKI9hUWtYlseQYpKYJMpjWNSqx/cyFNd5U0xAmQRftRhnd6d59amWVo6jC4cJDCgeooKhKKZT2LrVoqWI228kMY4tyJEpIr0NP33NN5PqRhymz9Fq0SyOnUgjbbKeFs2a1Uee0xobm+ZMuYKzvTpCakX5KBVeXfOp81qo4OFEDWeWncBqRnuPajwlpdjuPizwFP3EdxKRXntQkuA+MQAAAAAAAAAAAAAAAAAAAAAAAAAAIAv/AMUGkC6DPHJYAAAAAElFTkSuQmCC",
  },
  {
    word: "ลูกค้าใหม่ รับโค้ดรือของขวัญฟรี",
    img: "https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-shop-with-the-gentlemen-collection-and-win-the-shopee-0.png",
  },
  {
    word: "ซูเปอร์มาร์เก็ต",
    img: "https://www.clker.com/cliparts/w/2/7/Z/F/P/cart-icon.svg.hi.png",
  },
  {
    word: "เก็บคอยน์แลกโค้ด",
    img: "data:image/png;base64,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",
  },
  {
    word: "ช้อปปี้โฮม",
    img: "data:image/png;base64,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",
  },
  {
    word: "ช้อปปี้ถูกชัวร์",
    img: "https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-shop-with-the-gentlemen-collection-and-win-the-shopee-0.png",
  },
];

type MenuProduct = {
  word: string;
  img: string;
};

function MenuBar() {
  return (
    <div className="bg-Light-gray flex flex-col gap-4 px-40">
      <div className="flex justify-between p-8 bg-white">
        {Menu.map((menu: MenuProduct, i: number) => (
          <div
            key={i}
            className="w-[85px] flex flex-col items-center cursor-pointer hover:-translate-y-1"
          >
            <img
              src={menu.img}
              alt={menu.word}
              className="w-12 h-12 rounded-lg border-[1px] border-Light-gray"
            />
            <p className="text-xs mt-3 text-center">{menu.word}</p>
          </div>
        ))}
      </div>

      <div>
        <a href="https://shopee.co.th/#">
          <img
            src="https://cf.shopee.co.th/file/th-50009109-4511584405faf59f920c914b3bee8be5"
            alt="promotion ads"
          />
        </a>
      </div>

      {/* 12.12 ลดใหญ่วันเกิด */}
      <div>
        <img
          src="https://down-th.img.susercontent.com/file/th-50009109-8703cbb82e66d8e9a28101a67a201455"
          alt=""
        />
        <div className="flex gap-4 bg-Light-orange py-6 px-4 border-x-[6px] border-Primary-color">
          <div>
            <div className="flex justify-between text-Primary-color pb-4">
              <h2 className="font-semibold">12.12 สินค้าขายดี</h2>
              <button className="text-xs">ดูเพิ่มเติม</button>
            </div>
            <div className="flex gap-2">
              <CardBestSeller
                img="https://down-th.img.susercontent.com/file/b1b2d769cecc4030bbf5a986ec3a4102"
                price="1"
                discount="90"
              />
              <CardBestSeller
                img="https://down-th.img.susercontent.com/file/th-11134004-7r98o-lks0nk7yctwa3c"
                price="1"
                discount="89"
              />
              <CardBestSeller
                img="https://down-th.img.susercontent.com/file/th-11134207-23030-0gdr8kpx9mov5d"
                price="12"
                discount="40"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-Primary-color pb-4">
              <h2 className="font-semibold">12.12 แบรนด์สุดฮิต</h2>
              <button className="text-xs">ดูเพิ่มเติม</button>
            </div>
            <div className="flex gap-2">
              <CardBrandSeller
                img="https://media.allonline.7eleven.co.th/pdmain/125140-00-pack-potato-chip-lays-v2.jpg"
                text="ลดสูงสุด 50%"
                logo="https://down-th.img.susercontent.com/file/47488f022fd82e3fb9e384776b5140e1_tn"
              />
              <CardBrandSeller
                img="https://plantnery.com/wp-content/uploads/2023/02/SET-DEO.png"
                text="ลดสูงสุด 90%"
                logo="https://down-aka-th.img.susercontent.com/84127720f29794f3c22df143cc73af7b_tn"
              />
              <CardBrandSeller
                img="https://d25f87opgd5a05.cloudfront.net/products_495872_11Sep41_GD5JC.png"
                text="ลดสูงสุด 50%"
                logo="https://down-th.img.susercontent.com/file/595baa01fa80d4f52dba80cd31c88922_tn"
              />
            </div>
          </div>
        </div>

        <img
          src="https://down-th.img.susercontent.com/file/th-50009109-3592b872c41f8fbb09b8fc82a58970ac"
          alt=""
        />
      </div>
    </div>
  );
}

export default MenuBar;
