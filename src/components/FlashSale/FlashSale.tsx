import CardFlashSale from "./CardFlashSale";

function FlashSale() {
  return (
    <div className="mx-40 mt-10">
      <div className="bg-white">
        <p className="text-Primary-color font-bold text-lg p-4">FLASH SALE</p>
        <div className="flex gap-4 justify-center">
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/th-11134004-7r98s-lnwssmpspa9c70"
            price="925"
            discount="54"
            sold="33"
          />
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/d7e3d74ec64969b13b755a14aaae4021"
            price="635"
            discount="37"
            sold="153"
          />
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/sg-50009109-be0aeb5786bbe87c912f042cd2bc3aec"
            price="969"
            discount="38"
            sold="247"
          />
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/cb744c8a9d19aaa2eceff025b05a4f30"
            price="274"
            discount="39"
            sold="79"
          />
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/th-11134004-7r98s-lnwssmpspa9c70"
            price="1,009"
            discount="54"
            sold="37"
          />
          <CardFlashSale
            img="https://down-th.img.susercontent.com/file/e338ff83aa5133ca4d6ee1f8d3da51a6"
            price="999"
            discount="60"
            sold="92"
          />
        </div>
      </div>

      <a href="https://live.shopee.co.th/universal-link/aggregation#home_live">
        <img
          src="https://cf.shopee.co.th/file/sg-50009109-6a02678a26b6275610bf7264e15e0177"
          alt="promotion ads"
        />
      </a>
    </div>
  );
}

export default FlashSale;
