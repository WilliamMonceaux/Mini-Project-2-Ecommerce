import { Card, CardActionArea, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function FeaturedProduct({product}) {
    return(<Card 
      sx={{ 
        width: '100%', 
        maxWidth: 280, 
        mx: 'auto',   
        
        height: '100%', 
        border: 1, 
        borderColor: 'divider', 
        boxShadow: 2,
      }}
    >
      <CardActionArea component={Link} to="/shop"> 
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ 
            height: 250, 
            objectFit: "contain", 
            p: 3, 
            bgcolor: '#fff',
            border: '2px solid black'
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export { FeaturedProduct };