import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Link from "../../utils/ActiveLink";

const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <Menu>
          <Link href="/">
            <MenuItem>Go to website</MenuItem>
          </Link>
        </Menu>
      </SidebarHeader>
      <SidebarContent className="dashboard-sidebar">
        <Menu iconShape="square">
          <Link href="/dashboard">
            <MenuItem>Home</MenuItem>
          </Link>
          <SubMenu title="Forms">
            <Link href="/dashboard/export-payment">
              <MenuItem>Export Payment Insuarance</MenuItem>
            </Link>
            <Link href="/dashboard/domestic-payment">
              <MenuItem>Domestic Payment Insuarance</MenuItem>
            </Link>
            <Link href="/dashboard/transit">
              <MenuItem>Goods in Transit</MenuItem>
            </Link>
          </SubMenu>
          <Link href="/dashboard/blog-posts">
            <MenuItem>Blog Posts</MenuItem>
          </Link>
          <Link href="/dashboard/tenders">
            <MenuItem>Tenders & RFQs</MenuItem>
          </Link>
          <Link href="/dashboard/careers">
            <MenuItem>Careers</MenuItem>
          </Link>
          <Link href="/dashboard/users">
            <MenuItem>Users</MenuItem>
          </Link>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu>
          <MenuItem>Footer</MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
