import React from "react";
import './sidebar.scss';
import { Divider, Drawer, Toolbar } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/images/global_logo.png';

let listitems = [
    { text: 'Dashboard', icon: <InboxIcon />, path: '/admin' },
    { text: 'Products', icon: <ShoppingCartIcon />, path: '#' },
    { text: 'Users', icon: <PersonIcon />, path: '#' },
    { text: 'Orders', icon: <AssignmentIcon />, path: '#' },
    { text: 'Sign Out', icon: <ExitToAppIcon />, path: '/login' },
]

function Sidebar({ mobileOpen, onClose }) {

    const navigate = useNavigate();
    const location = useLocation();

    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleItemClick = (path) => {
        navigate(path);
        onClose();
    }

    const drawer = (
        <div className="drawer_container">
            <Toolbar>
                <img className="logo" src={Logo} />
            </Toolbar>
            <Divider />
            {/* <List>
                {listitems.map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            onClick={() => handleItemClick(item.path)}
                            selected={location.pathname === (item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            <List>
                {listitems.slice(0, 4).map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            onClick={() => handleItemClick(item.path)}
                            selected={location.pathname === item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                {listitems.slice(4).map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            onClick={() => handleItemClick(item.path)}
                            selected={location.pathname === item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className="sidebar_container">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
                open
            >
                {drawer}
            </Drawer>

        </div>
    )
}

export default Sidebar;