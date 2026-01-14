import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function FeaturedProduct({ product }) {
  return (
    <Card
      component="article"
      sx={{
        width: "100%",
        maxWidth: 280,
        mx: "auto",
        height: "100%",
        border: 2,
        borderColor: "text.primary",
        boxShadow: 2,
      }}
    >
      <CardActionArea
        component={Link}
        to="/shop"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          "& .MuiCardActionArea-focusHighlight": {
            background: "transparent",
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 250,
            objectFit: "contain",
            p: 3,
            bgcolor: "#fff",
          }}
        />
        <CardContent sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { FeaturedProduct };
