import { useGetCartQuery } from "../../app/api/apiSlice";

const Cart = () => {
  const { data } = useGetCartQuery();

  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {data?.map((product: any) => (
          <div
            key={product._id}
            style={{ display: "flex", marginLeft: "20px" }}
          >
            <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
              <div className="h-52 w-52 mx-auto">
                <img src={product.image} alt={product.image} />
              </div>
              <h1 className="font-bold text-center">{product?.name}</h1>
              <p className="text-center font-semibold mb-3">
                Offer Price: {product?.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
