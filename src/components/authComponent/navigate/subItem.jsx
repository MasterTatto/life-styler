import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {Collapse, List} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import s from "./styles.module.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {handleSelected} from "./item";

const SubItem = ({title, icon, data, link}) => {
    const [open, setOpen] = React.useState(false);
    const {pathname} = useLocation()

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
                <ListItemButton sx={{pl: 9}} onClick={data && handleClick}>
                    <p style={{width: '100%'}} className={s.sub_title}>{title}</p>
                    {data && <>
                        {open ? <ExpandLess sx={{color: '#fff'}}/> : <ExpandMore sx={{color: '#fff'}}/>}
                    </>}
                </ListItemButton>
            </WrapperTop>
            {(data) && <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data?.map((el, i) => {
                        const stylesBackground = handleSelected(pathname, el.link)

                        return <NavLink to={el.link}>
                            <ListItemButton sx={{pl: 11, ...stylesBackground}} key={i}>
                                <p className={s.sub_title}>{el.title}</p>
                            </ListItemButton>
                        </NavLink>
                    })}

                </List>
            </Collapse>}
        </List>
    );
};

export default SubItem;
