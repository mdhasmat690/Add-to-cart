import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContactQuery } from "../../app/api/apiSlice";
import Container from "@mui/material/Container";
import { CardMedia, Grid } from "@mui/material";

export interface Contact {
  image: string | null;
}

function SingleProduct() {
  const router = useRouter();
  const id: any = router.query.id;
  const { data }: any = useContactQuery(id);

  console.log(data);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <Container sx={{ my: "30px" }}>
      <Grid container sx={{ mt: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
        <Grid xs={12} sm={4} md={4}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image={data?.images[1]}
            alt="Paella dish"
          />
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <CardMedia
            sx={{ width: "100%", height: "100%", mx: "auto" }}
            component="img"
            image={data?.images[2]}
            alt="Paella dish"
          />
        </Grid>
        <Grid
          sx={{
            wight: "200px",
            height: "200px",
            objectFit: "cover",
            textAlign: "center",
            alignItems: "center",
            mx: "auto",
          }}
          xs={12}
          sm={4}
          md={4}
        >
          <div style={{ marginLeft: "10px" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: ".2em",
                my: "10px",
              }}
            >
              Product Name: {data?.title}
            </Typography>
            <Typography sx={{ float: "left", fontWeight: "600" }} variant="h4">
              Brand: {data.brand}
            </Typography>
            <Typography
              sx={{
                textTransform: "lowercase",
                width: "70%",
                my: "10px",
              }}
            >
              {data.description}
            </Typography>
            <Typography>Price: ${data.price} </Typography>
            <Button sx={{ mt: "10px" }} variant="outlined">
              Add To Cart
            </Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default SingleProduct;
