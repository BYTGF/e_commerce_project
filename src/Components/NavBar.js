import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppleIcon from '@mui/icons-material/Apple';

const pages = [ "Home", "Products"];

function ResponsiveAppBar(props) {

const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handlePageChange = (newPage) => {
    props.changePage(newPage);
}

const handleLogout = (status) => {
    props.isLoggedIn(status)
}

const handleOpenNavMenu = (event) => {
setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
setAnchorElUser(null);
};

return (
<AppBar position="static">
    <Container maxWidth="xl">
    <Toolbar disableGutters>
        <AppleIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        color="212121"
        sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
        }}
        >
        BUMN
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="black"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
            vertical: "top",
            horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
            display: { xs: "block", md: "none" },
            }}
        >
            {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => handlePageChange(page)}>{page}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
        }}
        >
        BUMN
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
            <Button
            key={page}
            onClick={() => handlePageChange(page)}
            sx={{ my: 2, color: "Black", display: "block" }}
            >
            {page}
            </Button>
        ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
        <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="black"
            onClick={() => handlePageChange("CartPage")}
        >
            <Badge badgeContent={props.itemInCart.length < 0 ? 0 : props.itemInCart.length} color="error">
            <ShoppingCartIcon />
            </Badge>
        </IconButton>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, m:1 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            
            <MenuItem onClick={() => handleLogout(false)}>
                <Typography textAlign="center">Log Out</Typography>
            </MenuItem>
        </Menu>
        </Box>
    </Toolbar>
    </Container>
</AppBar>
);
}
export default ResponsiveAppBar;
