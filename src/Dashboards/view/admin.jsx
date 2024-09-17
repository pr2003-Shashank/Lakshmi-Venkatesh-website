import React from "react";
import './admin.scss';
import Sidebar from '../shared/sidebar';
import Panel from "../shared/panel";
import Content from "../shared/content";

function Admin() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseSidebar = () => {
    setMobileOpen(false);
  };

  const handleListItemClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="dashboard_container">
      <div className="sidebar">
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={handleCloseSidebar}
          onListItemClick={handleListItemClick}
        />
      </div>
      <div className="main">
        <Panel 
        handleDrawerToggle={handleDrawerToggle} 
        onListItemClick={handleListItemClick}
        />
        <Content selectedPage={selectedPage}/>
      </div>

    </div>
  )
}

export default Admin;