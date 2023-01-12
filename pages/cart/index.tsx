import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useGetCartQuery } from "../../app/api/apiSlice";
import Link from "next/link";
import { CardMedia, ListItem, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Cart = () => {
  const { data } = useGetCartQuery();

  console.log(data);

  if (!data) {
    return (
      <div
        style={{
          width: "200px",
          height: "400px",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        isLoading...
      </div>
    );
  }

  return (
    <>
      <Container sx={{ my: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((product: any) => (
            <Grid key={product.id} item xs={12} sm={4} md={4}>
              <CardMedia sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{
                    wight: "200px",
                    height: "200px",
                    objectFit: "cover",
                    textAlign: "center",
                    alignItems: "center",
                    mx: "auto",
                  }}
                  component="img"
                  alt="green iguana"
                  image={product?.images[1]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                  <Typography
                    sx={{ color: "red", mt: "5px", hover: "red" }}
                    variant="h5"
                  >
                    Item: {product?.quantity}
                  </Typography>
                  <Typography
                    sx={{ color: "green", mt: "5px", hover: "red" }}
                    variant="h5"
                  >
                    Price: ${product?.price}
                  </Typography>
                </CardContent>
              </CardMedia>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
