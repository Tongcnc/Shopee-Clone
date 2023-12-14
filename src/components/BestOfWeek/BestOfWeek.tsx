import CardBestOfWeek from "./CardBestOfWeek";

function BestOfWeek() {
  return (
    <div className="bg-white my-10 mx-40">
      <p className="text-RedMall border-b-[1px] border-Light-gray p-4">
        ขายดีประจำสัปดาห์
      </p>
      <div className="flex p-4 gap-2">
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/dc54a4f4373cfb2b7c5874ce046a3edd"
          sold="120"
          name="ถุงเท้า"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/6a8f43fd33890d8a68ffc776edf6f6ba"
          sold="164"
          name="ไม้แขวนเสื้อ"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/5073b88509476ac92149bc204cfa5eec"
          sold="111"
          name="กางเกงชั้นในชาย"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/dc54a4f4373cfb2b7c5874ce046a3edd"
          sold="120"
          name="ถุงเท้า"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/6a8f43fd33890d8a68ffc776edf6f6ba"
          sold="164"
          name="ไม้แขวนเสื้อ"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/0a14dafc5a16a184693aecc961f60539"
          sold="98"
          name="สาหร่ายอบกรอบ"
        />
        <CardBestOfWeek
          img="https://down-th.img.susercontent.com/file/5073b88509476ac92149bc204cfa5eec"
          sold="111"
          name="กางเกงชั้นในชาย"
        />
      </div>
    </div>
  );
}

export default BestOfWeek;
