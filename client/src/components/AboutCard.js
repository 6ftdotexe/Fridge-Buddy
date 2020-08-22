import React from "react";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton,
  Typography,
  Paper,
  Grid,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "350px",
  },
  media: {
    height: "100%",
  },
  paper: {
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function AboutCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardHeader title="Chobu Nkolo-Kangkolot" />
            <CardContent>
              <Typography paragraph>
                Write a little about yourself Chobu
              </Typography>
              <CardActionArea>
                <Link
                  href="https://github.com/ckangkolo16"
                  target="_blank"
                  rel="noopener nyouroreferrer"
                >
                  <GitHubIcon
                    className={classes.icons}
                    style={{ fontSize: "60px" }}
                    aria-label="github"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chobu-nkolo-kangkolo-08608b1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    className={classes.icons}
                    style={{ fontSize: "75px" }}
                    aria-label="linkedin"
                  />
                </Link>
              </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              alt="Profile Picture"
              image="../assets/images/ChobuProfilePic.jpg"
              title="Chobu Nkolo Kangkolo"
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              alt="Profile Picture"
              image="../assets/images/LancePageProfilePic.jpg"
              title="Lance Page"
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardHeader title="Lance Page" />
            <CardContent>
              <Typography paragraph>
                Write a little about yourself Lance
              </Typography>
              <CardActionArea>
                <Link
                  href="https://github.com/6ftdotexe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={classes.icons}
                    style={{ fontSize: "60px" }}
                    aria-label="github"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lance-page-82798214a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    className={classes.icons}
                    style={{ fontSize: "75px" }}
                    aria-label="linkedin"
                  />
                </Link>
              </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardHeader title="David Yennerell" />
            <CardContent>
              <Typography paragraph>
                Write a little about yourself David
              </Typography>
              <CardActionArea>
                <Link
                  href="https://github.com/GrandeRojo17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={classes.icons}
                    style={{ fontSize: "60px" }}
                    aria-label="github"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/david-yennerell-815a471a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    className={classes.icons}
                    style={{ fontSize: "75px" }}
                    aria-label="linkedin"
                  />
                </Link>
              </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              alt="Profile Picture"
              image="../assets/images/DavidProfilePic.jpg"
              title="David Yennerell"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              alt="Profile Picture"
              image="../assets/images/williamtroutprofile.jpg"
              title="William Trout"
            />
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card className={classes.root}>
            <CardHeader title="William Trout" />
            <CardContent>
              <Typography paragraph>
                Currently working in the banking industry as a Bank Manager, I
                am working towards gaining the skills necessary to provide
                services to the next generation of banking clients. That service
                will be provided digitally and I plan on helping to craft that
                service. Upon completion of this course I plan on continuing my
                journey by working towards a Masters degree with a focus on
                Cyber Security.
              </Typography>
              <CardActionArea>
                <Link
                  href="https://github.com/williamntrout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={classes.icons}
                    style={{ fontSize: "60px" }}
                    aria-label="github"
                  />
                </Link>
                <Link
                  href="https://linkedin.com/in/williamntrout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    className={classes.icons}
                    style={{ fontSize: "75px" }}
                    aria-label="linkedin"
                  />
                </Link>
              </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
