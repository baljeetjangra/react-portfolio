import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
} from '@material-ui/core';

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import avatar from '../baljeet.jpg'



//Css Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width:'250px',
        background: '#5CE6CE',
        height:'100%',

    },
    avatar :{
        display:'block',
        margin:'.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13),
    },
    listItem:{
        color:'#0A192F'

    }
}));

const menuItems = [
    {
        listicon:<Home/>,
        listText:'Home',
    },
    {
        listicon:<AssignmentInd/>,
        listText:'Resume',
    },
    {
        listicon:<Apps/>,
        listText:'Portfolio',
    },
    {
        listicon:<ContactMail/>,
        listText:'Contacts',
    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider,open) =>()=> {
        setState({...state,[slider]:open})
    });
    const classes = useStyles()

    const sideList = slider =>(
        <Box 
        onClick={toggleSlider(slider,false) }
        className={classes.menuSliderContainer} component='div'>
            <Avatar className={classes.avatar} src ={avatar} alt="baljeet's image" />
            <Divider />
            <List>
                {menuItems.map((item,key)=>(

                    <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>
                        {item.listicon}
                    </ListItemIcon>
                    <ListItemText primary={item.listText}/>
                </ListItem>
                ))}
                </List>
        </Box>
    );
    return (
        <>
        
        <Box component='nav'>
            <AppBar position='static' color='secondary'>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right',true)}color='primary'>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant='h6' color='primary'>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                    anchor='right' 
                    onClose={toggleSlider('right',false)}
                    open={state.right}>
                            {sideList('right')}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
