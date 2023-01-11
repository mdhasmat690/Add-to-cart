import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useGetAllProductQuery } from "../../app/api/apiSlice";
import { Product } from "../product";

const AllProduct = () => {
  const { data } = useGetAllProductQuery();

  if (!data?.length) {
    return <>Loading...</>;
  }

  return (
    <>
      {" "}
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((product: any) => (
            <>
              <Product key={product.id} product={product} />
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AllProduct;
