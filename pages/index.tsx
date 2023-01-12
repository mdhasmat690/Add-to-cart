import Product from "./product";
import Banner from "../componment/banner";
import { GetServerSideProps } from "next";
import AllProductBanner from "../componment/allproductBanner";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Home = ({ data }: any) => {
  if (!data) {
    return <>Loading</>;
  }

  return (
    <>
      <Banner />
      <AllProductBanner />
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

export default Home;

type Data = {
  _id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
};

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch(
    "https://taskserver-jgk8.onrender.com/products?limit=9"
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};
