import React from 'react'
import { Button } from "@mui/material";
import { ButtonSX } from './MuiLoginButtonStyled';
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../Store/auth/authorizationSlice";
import { selectStatus} from "../../Store/auth/authorizationSlice";
import { useNavigate } from 'react-router';
import { setNavOpacity } from '../../Store/NavEffect/NavEffect';

const MuiLoginButton=(props)=>{
    const Login=useSelector(selectStatus)
    const dispatch= useDispatch()
    const navigate=useNavigate()

    const HandlerInitSesion=()=>{
        props.Close()
        dispatch(setNavOpacity(false))

        setTimeout(()=>{
            navigate('/Auth')
        },700)

        setTimeout(()=>{
            dispatch(setNavOpacity(true))
        },1200)
        
    }

    
    const HandlerLogout=()=>{
        dispatch(logout())
    }

    return(
        <>
       {!Login&&<Button sx={ButtonSX} onClick={()=>{HandlerInitSesion()}}>
            Iniciar
        </Button>}
        {Login&&<Button sx={ButtonSX} onClick={()=>{HandlerLogout()}}>
            Cerrar
        </Button>}
        </>
    )

}

export default MuiLoginButton