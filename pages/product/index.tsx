import Link from "next/link";
import { useAddToCartMutation } from "../../app/api/apiSlice";
import Grid from "@mui/material/Grid";
import { CardMedia, ListItem, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function Product({ product }: any) {
  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();

  const handleAddToCart = () => {
    addToCart(product);
  };

  console.log(product);

  return (
    <>
      <Grid sx={{ my: "25px" }} item xs={12} sm={4} md={4}>
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
              sx={{ color: "green", mt: "5px", hover: "red" }}
              variant="h5"
            >
              Price: ${product?.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/product/${product._id}`}>
              <Button size="small">Details</Button>
            </Link>
            <Button onClick={handleAddToCart} size="small">
              Add To Cart
            </Button>
          </CardActions>
        </CardMedia>
      </Grid>
    </>
  );
}
