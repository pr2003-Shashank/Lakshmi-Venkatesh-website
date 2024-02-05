import React from "react";
import './admin.scss';
import Sidebar from '../shared/sidebar';
import Panel from "../shared/panel";
import Content from "../shared/content";

function Admin() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <div className="dashboard_container">
      <div className="sidebar">
        <Sidebar mobileOpen={mobileOpen} onClose={handleCloseSidebar} />
      </div>
      <div className="main">
        <Panel handleDrawerToggle={handleDrawerToggle} />
        <Content />
      </div>

    </div>
  )
}

export default Admin;