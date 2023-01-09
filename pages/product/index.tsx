import Link from "next/link";
import { useAddToCartMutation } from "../../app/api/apiSlice";
import { toast } from "react-hot-toast";
export function Product({ product }: any) {
  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();

  const clickHanld = () => {
    const object = {
      name: product.name,
      image: product.image,
      price: product.price,
    };

    addToCart(object);
  };

  if (!isSuccess) {
    toast.success("Product Add to Cart Successfully");
  }

  return (
    <>
      <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
        <Link href={`/product/${product._id}`}>
          <div className="h-52 w-52 mx-auto">
            <img src={product.image} alt={product.image} />
          </div>
          <h1 className="font-bold text-center">{product.name}</h1>
          <p className="text-center font-semibold mb-3">
            Offer Price: {product.offer_price}
          </p>
          <div className=" flex-1">
            <ul className="space-y-2">
              <li className="text-sm ">Price: {product.price}</li>
            </ul>
          </div>
        </Link>

        <div>
          <div className="flex gap-2 mt-5">
            <button
              onClick={clickHanld}
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
