import React from "react";
import './sidebar.scss';
import { Divider, Drawer, Toolbar } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../../assets/images/global_logo.png';

let listitems = [
    { text: 'Overview', icon: <BarChartIcon />, page: '' },
    { text: 'Products', icon: <ShoppingCartIcon />, page: 'products' },
    { text: 'Users', icon: <PersonIcon />, page: 'users' },
    { text: 'Orders', icon: <AssignmentIcon />, page: 'orders' },
    { text: 'Sign Out', icon: <ExitToAppIcon />, page: '/login' },
]

function Sidebar({ mobileOpen, onClose, onListItemClick }) {

    const navigate = useNavigate();
    const location = useLocation();

    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleItemClick = (page) => {
        if (page !== '/login') {
            navigate(`/admin/${page}`); // Navigate to the inner link
        } else {
            navigate(page); // For the 'Sign Out' option
        }
        onClose(); // Close the sidebar

        if (onListItemClick) {
            onListItemClick(page);
        }
    }

    const drawer = (
        <div className="drawer_container">
            <Toolbar>
                <img className="logo" src={Logo} />
            </Toolbar>
            <Divider />
            <List>
                {listitems.slice(0, 4).map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            onClick={() => handleItemClick(item.page)}
                            selected={location.pathname === `/admin/${item.page}`}
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
                            onClick={(e) => {
                                navigate(item.page);
                                onClose();
                            }}
                            selected={location.pathname === item.page}
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