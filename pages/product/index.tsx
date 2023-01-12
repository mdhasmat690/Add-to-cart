import Link from "next/link";
import { useAddToCartMutation } from "../../app/api/apiSlice";
import Grid from "@mui/material/Grid";
import {
  Box,
  CardMedia,
  IconButton,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import * as React from "react";
import { addItemToCart, deleteItemFromCart } from "../../app/api/cartSlice";
import Swal from "sweetalert2";

type Anchor = "top" | "left" | "bottom" | "right";

function Product({ product }: any) {
  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    console.log(product);
  };

  if (!product) {
    return (
      <>
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
      </>
    );
  }

  interface ac {
    top: boolean;
    left: boolean;
    right: boolean;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = React.useState<ac>({
    top: false,
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productsInCart = useAppSelector(
    (state: any) => state.cart.productsInCart
  );
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <>
      <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            sx={{ width: "100%" }}
          >
            <Box>
              {productsInCart?.map((product: any) => (
                <div key={product.id}>
                  <Card sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          {product.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {product.brand}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton
                          onClick={() => dispatch(addItemToCart(product))}
                          aria-label="previous"
                        >
                          +
                        </IconButton>
                        <IconButton aria-label="play/pause">
                          {product.quantity}
                        </IconButton>
                        <IconButton
                          onClick={() => dispatch(deleteItemFromCart(product))}
                          aria-label="next"
                        >
                          -
                        </IconButton>

                        <Button onClick={() => handleAddToCart(product)}>
                          Save to Database
                        </Button>
                      </Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={product.images[1]}
                      alt="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      </div>

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
            <span onClick={toggleDrawer("right", true)}>
              <Button
                onClick={() => dispatch(addItemToCart(product))}
                // onClick={toggleDrawer("right", true)}
                size="small"
              >
                Add To Cart
              </Button>
            </span>
          </CardActions>
        </CardMedia>
      </Grid>
    </>
  );
}

export default Product;
