import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../../assets/home.jpg' })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    flexGrow: 1,
    justifyContent: 'center'
  },
  
  hero: {
    height: "100vh",
    background: "none",
    position: "relative",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "3rem",
    
  },

  title: {
    fontSize: "3rem",
    color: "black",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  
}));

function Home() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Box className={classes.hero}>
        <Box textAlign='center'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Follow Music Playlists
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Join Conversations
        </Typography>
        <Link to="/register">
        <Button variant="contained" color="secondary" >
          Get Started
        </Button>
        </Link>
        </Box>
      </Box>
      

    </div>
    
  );
}

export default Home;


