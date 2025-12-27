import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CardsTemplate() {
  return(<section className='card-container'>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia component='img' alt='product' height='140' />
    <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
            Products
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Here is the products
        </Typography>
    </CardContent>
    <CardActions>
        <Button size='small'>Add to Card</Button>
    </CardActions>
  </Card>
  </section>
);
}

export { CardsTemplate };
