import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ChallengeCardOther() {
    return (
        <Card sx={{ maxWidth: 345, textAlign: 'left' , marginTop:'20px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/600/600"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Challenge Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, blanditiis.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to=''>Open</Link>
            </CardActions>
        </Card>
    );
}
