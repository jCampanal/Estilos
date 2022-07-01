import React,{useState,useEffect} from 'react'
import {ButtonS} from './LoguinButtonStyled'
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../Store/auth/authorizationSlice";
import { selectUserName, selectStatus} from "../../Store/auth/authorizationSlice"
import { setNavOpacity } from '../../Store/NavEffect/NavEffect';
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../Store/NotificationDiv/NotificationDiv'
import { useNavigate } from 'react-router';


const LoguinButton=(props)=>{
    const [logueado, setLogueado]=useState(false)    
    const navigate=useNavigate() 

    const dispatch=useDispatch()
    const Status= useSelector(selectStatus)
    const HandlerInitSesion=()=>{
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
        dispatch(setContentNotification('Sección finalizada'))
        dispatch(setStatusNotification('succ'))
        dispatch(setOpenNotification(true))
    }

    return(
        <>
        {!Status&&<ButtonS {...props} onClick={HandlerInitSesion}>
            {'Iniciar sesión'}
        </ButtonS>}
        {Status&&<ButtonS {...props} onClick={HandlerLogout}>
            {'Cerrar sesión'}
        </ButtonS>}
        </>
    )
}

export default LoguinButton