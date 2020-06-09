import React from 'react';
import {Box,Typography,Avatar,Grid} from '@material-ui/core';
import avatar from '../profile.jpg';
import Typed from 'react-typed';
import { makeStyles} from '@material-ui/styles'

//Css styles

const useStyles = makeStyles(theme => ({
    avatar:{
        width : theme.spacing(15),
        height : theme.spacing(15),
        margin : theme.spacing(1),
    },
    title:{
        color:'#5CE6CE',
        fontSize:'3em',
    },
    subtitle:{
        color:'#5CE6CE',
        marginBottom:'3rem',
        fontSize:'2em',

    },
    typesContainer:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'100vw',
        textAlign:'center',
        zIndex:1,
    }
}))
const Header = () =>{
    const classes = useStyles();

    return (
        <Box className={classes.typesContainer}>
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt='Baljeet Jangra' />

            </Grid>
            <Typography className ={classes.title} varient='h1'>
                <Typed strings={["Baljeet Jangra"]} typeSpeed={40} />
            </Typography>
            <br /> 
            <Typography className ={classes.subtitle} varient='h2'>
                <Typed strings={["Django Web Development","Responsive Web Design","React Js"]} typeSpeed={40} backspeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header;