import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 650
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
        >
            <Grid item md={120}>
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Lance Page"
                            height="300"
                            image="/images/Lance.jpg"
                            title="Lance Page"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lance Page
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                My name is Lance Page, and I'm a content creator, gamer, and aspiring Developer. I've been working my way through The University of Kansas Coding Bootcamp to prepare for my future in code development. I enjoy putting my skills to work designing web applications.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/6ftdotexe" target="_blank" size="small" color="primary">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/lance-page-82798214a/" target="_blank" size="small" color="primary">
                            LinkedIn
                        </a>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item md={120}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="William Trout"
                            height="300"
                            image="/images/William.jpg"
                            title="William Trout"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                William Trout
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Currently working in the banking industry as a Bank Manager, I am working towards gaining the skills necessary to provide services to the next generation of banking clients. That service will be provided digitally and I plan on helping to craft that service. Upon completion of this course I plan on continuing my journey by working towards a Masters degree with a focus on Cyber Security.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/williamntrout" target="_blank" size="small" color="primary">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/williamntrout" target="_blank" size="small" color="primary">
                            LinkedIn
                        </a>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item md={120}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Chobu Nkolo Kangkolo"
                            height="300"
                            image="/images/Chobu.jpg"
                            title="Chobu Nkolo Kangkolo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Chobu Nkolo Kangkolo
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Hi, My name is Chobu Kangkolo. When I have the time, I love taking pictures around the city and binge watching documentaries on netflix.From time to time, I challenge myself to master new ideas and to learn more about my different interests. One of those interests which could possibly reap great rewards if mastered are computers.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/ckangkolo16" target="_blank" size="small" color="primary">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4" target="_blank" size="small" color="primary">
                            LinkedIn
                        </a>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item md={120}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="David Yennerell"
                            height="300"
                            image="/images/David.jpg"
                            title="David Yennerell"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                David Yennerell
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Hi, My name is David Yennerell. I am a aspiring web developer based out of Kansas City who is close to finishing up a coding bootcamp with Kansas University. Born on the east coast and now in Kansas City, MO. I offer a creative mindset to projects related to boosting revenue.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/GrandeRojo17" target="_blank" size="small" color="primary">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/david-yennerell-815a471a2" target="_blank" size="small" color="primary">
                            LinkedIn
                        </a>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    );
}