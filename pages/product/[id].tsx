import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContactQuery } from "../../app/api/apiSlice";
import Container from "@mui/material/Container";

export interface Contact {
  image: string | null;
}

function SingleProduct() {
  const router = useRouter();
  const id: any = router.query.id;
  const { data }: any = useContactQuery(id);

  return (
    <Container sx={{ my: "25px" }}>
      <Card sx={{ maxWidth: 545, mx: "auto" }}>
        <img
          style={{ width: " 60%", textAlign: "center", margin: "auto" }}
          src={data?.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Price: {data?.price}</Button>
          <Button size="small">offer percentage {data?.offer_price}</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default SingleProduct;
