import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <>
      <CardMedia
        sx={{ width: "100%", height: "400px" }}
        component="img"
        image="https://i.ibb.co/30yZ7bG/2043.jpg"
        alt="Paella dish"
      />
    </>
  );
};

export default Banner;
