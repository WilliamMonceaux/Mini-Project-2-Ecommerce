import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CardsTemplate({ products }) {
  return (
    <main className="card-container">
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
          <Grid item key={product.id} size={{ xs: 12, md: 6, lg: 3 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                height="300"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Card</Button>
              </CardActions>
            </Card>
          </Grid>
          );
        })}
      </Grid>
    </main>
  );
}

export { CardsTemplate };
