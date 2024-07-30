import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Box } from '@mui/material';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        {
            text: "Início",
            icon: <HomeIcon />
        }
    ];

    return (
        <nav id='inicio' className='navbar'>
            <div className="container_navbar">
                <a href="#inicio" className="links_nav">Início</a>
                <a href="#sobre" className="links_nav">Sobre</a>
                <a href="#habilidades" className="links_nav">Habilidades</a>
                <a href="#projetos" className="links_nav">Projetos</a>
                <a id='btn_contato' href="" className="links_nav">Entrar em Contato</a>
            </div>
            <button className='btn_menu' onClick={() => setOpenMenu(true)}>
                <MenuOutlinedIcon />
            </button>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
