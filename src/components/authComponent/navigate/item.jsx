import React from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import s from "./styles.module.css";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import {NavLink} from "react-router-dom";

const ItemNavigate = ({title, icon, data, link}) => {
    const [open, setOpen] = React.useState(false);

    const WrapperTop = ({children}) => {
        return link ? <NavLink to={link}>{children}</NavLink> : <>{children}</>
    }

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            sx={{
                width: '100%',
                paddingTop: '0px',
                paddingBottom: '0px',
                '& .MuiListItemIcon-root': {
                    minWidth: 'fit-content',
                    marginRight: '12px'
                },
                '& .MuiButtonBase-root': {
                    paddingTop: '10px',
                    paddingBottom: '10px',
                },
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >

            <WrapperTop>
                <ListItemButton onClick={data && handleClick}>
                    <ListItemIcon>
                        {icon}
                        {/*<InboxIcon sx={{color: 'rgba(255, 102, 100, 1)'}}/>*/}
                    </ListItemIcon>
                    <p className={s.title}>{title}</p>
                    {data && <>
                        {open ? <ExpandLess sx={{color: '#fff'}}/> : <ExpandMore sx={{color: '#fff'}}/>}
                    </>}

                </ListItemButton>
            </WrapperTop>
            {(data) && <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data?.map((el, i) => {
                        return <NavLink to={el.link}>
                            <ListItemButton sx={{pl: 9}} key={i}>
                                <p className={s.sub_title}>{el.title}</p>
                            </ListItemButton>
                        </NavLink>
                    })}

                </List>
            </Collapse>}
        </List>
    );
};

export default ItemNavigate;
