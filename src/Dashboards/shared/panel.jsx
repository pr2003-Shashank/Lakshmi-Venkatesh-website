import React from "react";
import './panel.scss';
import { Toolbar, IconButton, AppBar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Panel({ handleDrawerToggle }) {

    const drawerWidth = 240;

    return (
        <div className="panel_container">
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">

                    </Typography>
                    <div className="tools_block">
                    <PersonIcon/>
                    <NotificationsIcon/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Panel;

