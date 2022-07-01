import React,{useState,useEffect} from 'react'
import { 
    ListItem,
    Box,
    List,
    Divider,
} from '@mui/material'
import {
    ContentMenuDivS,
    CloseMenuDiv,
    Backdrop,
    RegisterDivs,
    H4S,
    Name,
    ConteindIcon,
    RegisterBottom} from './SideMenuStyled'
import {NavListData} from '../../Routes/NavListData';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import MuiLoginButton from '../MuiLoginButton/MuiLoguinButton';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { setNavOpacity } from '../../Store/NavEffect/NavEffect';
import MuiHistorialButton from '../MuiHistorialButton/MuiHistorialButton';
import { useDispatch,useSelector } from "react-redux";
import { setOpenDesktop} from "../../Store/SideMenu/SideMenu";
import { selectOpen} from "../../Store/SideMenu/SideMenu";

const SideMenu=(props)=>{
    const navegate = useNavigate()  
    const location=useLocation()
    const open=useSelector(selectOpen)   
    const dispatch=useDispatch()

    const HandleCloseButtonClick=()=>{
        dispatch(setOpenDesktop(false))
    }

    const HandlerNavList=(path)=>{
        dispatch(setOpenDesktop(false))
        dispatch(setNavOpacity(false))
        setTimeout(()=>{
            navegate(path)
        },600)
    }

    return(
        <>
        <Backdrop Show={open} onClick={HandleCloseButtonClick}/>
        <ContentMenuDivS Show={open}>
            <CloseMenuDiv>                
                <Name>Estilos</Name>
                <IconButton sx={{marginRight:1,color:'#1976d2'}}>
                    <ClearIcon onClick={HandleCloseButtonClick}/>
                </IconButton>    
            </CloseMenuDiv>

            <RegisterDivs>
                <RegisterBottom>
                <MuiLoginButton Close={HandleCloseButtonClick}/>
                </RegisterBottom>
                <RegisterBottom>
                <MuiHistorialButton/>
                </RegisterBottom>
            </RegisterDivs>

            <Box sx={{ width: '100%',
                        color:'white',
                    }}>
            <Divider sx={{backgroundColor:'white'}}/>
            <List >            
                {NavListData.map((element,index)=>{
                    
                    return(
                            
                            <ListItem button
                                    sx={{justifyContent: "left",
                                        alignItems:'space-evenly',
                                        display:'flex',
                                        width:'100%'
                                        }}
                                    key={element.Title}
                                    selected={element.HREF === location.pathname}
                                    onClick ={()=>{HandlerNavList(element.HREF)}}
                                    >                                       
                                                <ConteindIcon>{element.Icon}</ConteindIcon>
                                                <H4S>{element.Title}</H4S>                                            
                                        
                            </ListItem>
                           
                        )})
                    }
                </List>
            </Box>
        </ContentMenuDivS>
        </>
    )
}

export default SideMenu