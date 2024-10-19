"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Community", icon: <PeopleIcon />, path: "/community" },
  ];

  return (
    <AppBar position="fixed" className="bg-[#141B29] shadow-none">
      <Container maxWidth="lg">
        <Toolbar className="flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex items-center">
            <TrendingUpIcon className="text-main" />
            <p className="ml-2 text-xl font-semibold">
              Tech Trendin<span className="text-main">&lsquo;</span>
            </p>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex space-x-4 mr-4">
              {menuItems.map((item) => (
                <Link href={item.path} key={item.text} passHref>
                  <Button
                    startIcon={item.icon}
                    className={`normal-case text-base ${
                      isActive(item.path) ? "text-white" : "text-[#A6A6A6]"
                    }`}
                  >
                    {item.text}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex space-x-4">
              <Button
                variant="outlined"
                className="text-white bg-[#202634] border-[#A6A6A6] normal-case text-base px-3 py-2"
              >
                Log In
              </Button>
              <Button
                variant="contained"
                className="bg-main text-white normal-case text-base"
              >
                Sign Up
              </Button>
            </div>

            <div className="md:hidden">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={handleMenuClose}
                    component={Link}
                    href={item.path}
                    style={{
                      color: isActive(item.path) ? "black" : "gray",
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
