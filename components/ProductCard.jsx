import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductCard() {
  return (
    <>
      <div className="border rounded border-gray-200  flex flex-col w-[250px] h-[100%]">
        <Link href="#">
          <div className="pt-5 cursor-pointer">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/abbouds-ropa.appspot.com/o/Jumper.png?alt=media&token=13b492db-27c6-4cb0-88c6-58bb0ee83710"
              alt="vestido-de-nina"
              width={250}
              height={360}
              //   className="cursor-pointer"
            />
          </div>
        </Link>
        <div className="py-2 px-5">
          <h1 className="font-bold">Vestido de niña</h1>
          <h3>$349.99</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
