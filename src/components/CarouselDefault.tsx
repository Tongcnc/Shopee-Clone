import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    // @ts-ignore
    <Carousel>
      <img
        src="https://cf.shopee.co.th/file/th-50009109-a1a4444d47ba4d4d9f98dd08f264c8b3_xxhdpi"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cf.shopee.co.th/file/th-50009109-8bff96ceab8da6a614ea294d00a3c2c7_xxhdpi"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cf.shopee.co.th/file/th-50009109-bde4a2dacee63d83c0bf869997514fae_xxhdpi"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cf.shopee.co.th/file/th-50009109-4715c6ca53545d3acde8a23d91ae0b5d_xxhdpi"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cf.shopee.co.th/file/th-50009109-6e40bbcb6879faeeb966eb9e7fa4f118_xxhdpi"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
