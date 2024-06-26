import React from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import s from "./styles.module.css";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import {NavLink, useLocation} from "react-router-dom";
import SubItem from "./subItem";

export const handleSelected = (pathname, url) => {
    console.log(url)
    console.log(pathname)
    const isSelect = pathname === url
    return {
        background: isSelect && '#2d76fa',
        '&:hover': {
            background: isSelect && '#2d76fa',
        }

    }
}
const ItemNavigate = ({title, icon, data, link}) => {
    const [open, setOpen] = React.useState(false);
    const {pathname} = useLocation()
    const WrapperTop = ({children}) => {
        return link ? <NavLink to={link}>{children}</NavLink> : <>{children}</>
    }

    const handleClick = () => {
        setOpen(!open);
    };

    console.log(link)
    console.log(pathname)

    const stylesBackground = handleSelected(pathname, link)

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
                <ListItemButton sx={{...stylesBackground}} onClick={data && handleClick}>
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
                        const stylesBackground = handleSelected(pathname, el.link)

                        return el?.data ? <SubItem data={el.data} title={el.title} icon={icon} link={el.link}/> :
                            <NavLink to={el.link}>
                                <ListItemButton sx={{pl: 9, ...stylesBackground}} key={i}>
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
