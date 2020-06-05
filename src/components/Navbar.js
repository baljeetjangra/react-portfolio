import React from 'react'
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
} from '@material-ui/core'

import {
    HomeOutlined,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons'
const Navbar = () => {
    return (
        <Box component='nav'>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <HomeOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
