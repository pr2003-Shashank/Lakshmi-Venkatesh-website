import React from "react";
import Overview from "../components/overview"; 
import ProductManagement from '../components/productManagement';
import UserManagement from '../components/userManagement';
import OrderManagement from '../components/orderManagement';
import Account from '../components/account';
import './content.scss'

function Content({selectedPage}) {
 
  // Conditionally render components based on the selected page

  switch (selectedPage) {
    case '':
      return <Overview />;
    case 'products':
      return <ProductManagement />;
    case 'users':
      return <UserManagement />;
    case 'orders':
      return <OrderManagement />;
      case 'account':
        return <Account/>;
    default:
      return null;
  }
}

export default Content;
