import { CardMedia, Grid, ListItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
const AllProductBanner = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          sx={{ display: "flex", alignItems: "center", textAlign: "left" }}
          item
          md={6}
          lg={6}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://i.ibb.co/1KKPWCQ/all-over-print-duffle-bag-white-left-front-60a11ebcc15b1-1080x-d03594b2-3ce9-455d-aef3-8daa6cda670e.webp"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
          }}
          item
          md={6}
          lg={6}
        >
          <div style={{ marginLeft: "10px" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: ".2em",
                my: "10px",
              }}
            >
              TRENDING RIGHT NOW
            </Typography>
            <Typography sx={{ fontWeight: "600" }} variant="h4">
              Our All-product here buy Now
            </Typography>
            <Typography
              sx={{
                textTransform: "lowercase",
                letterSpacing: ".1em",
                width: "70%",
                my: "10px",
              }}
            >
              Choose a design that will complement your style. This All-Over
              Print Duffle Bag is the perfect spacious bag no matter the
              occasion.
            </Typography>
            <Link href={"/allproduct"}>
              <Button sx={{ my: "10px" }} variant="outlined">
                All Product
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AllProductBanner;
