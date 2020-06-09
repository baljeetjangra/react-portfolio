import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import {makeStyles} from '@material-ui/styles';
import Particles from 'react-particles-js';

const useStyles = makeStyles({
    particlesCanva:{
        position:'absolute'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Particles canvasClassName = {classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value:45,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:'circle',
                    stroke:{
                        width:3,
                        color:'#fff'
                    }
                },
                size:{
                    value:8,
                    random:true,
                    anim:{
                        enable:true,
                        speed:8,
                        size_min: 0.1,
                        sync: true
                    }
                }
            }}
            />
        </>
    )
}

export default Home
