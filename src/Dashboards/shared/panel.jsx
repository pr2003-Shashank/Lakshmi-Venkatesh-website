import React from "react";
import './panel.scss';
import { Toolbar, IconButton, AppBar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from "react-router-dom";

function Panel({ handleDrawerToggle,onListItemClick }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (page) =>{
        onListItemClick(page);
        navigate(page);
        handleClose();
    }

    const navigate = useNavigate();

    const drawerWidth = 240;

    return (
        <div className="panel_container">
            <AppBar
                // position="fixed"
                // sx={{
                //     width: { md: `calc(100% - ${drawerWidth}px)` },
                //     ml: { md: `${drawerWidth}px` },
                // }}
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

                        <PersonIcon
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />

                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem 
                            onClick={() => handleMenuItemClick('account')}
                            >
                                My account</MenuItem>
                            <MenuItem
                                onClick={(e) => {
                                    navigate('/login');
                                }
                                }>
                                Logout
                            </MenuItem>
                        </Menu>

                        <NotificationsIcon />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Panel;

