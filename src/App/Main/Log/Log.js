import React from 'react' 
import {
    FirstContent,
    SecondContent,
    ContentDiv,
    IMGS,
    H3S,
    BackDiv,
} from './LogStyled'
import LogMenenu from '../../Components/LogMenu/LogMenu'
import Logo from '../../../Assets/icono.png'
import { selectOpen, selectContent} from "../../Store/MotionGenerix/ModalGeneric";
import {selectNavOpacity,setNavOpacity} from '../../Store/NavEffect/NavEffect'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const Log=(props)=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const Effect=useSelector(selectNavOpacity)
   
    
    const HandlerInitSesion=()=>{
        dispatch(setNavOpacity(false))

        setTimeout(()=>{
            navigate('/')
        },700)

        setTimeout(()=>{
            dispatch(setNavOpacity(true))
        },1200)
        
        
    }

    return(
        <FirstContent Opacity={Effect}>
            <ContentDiv Idx={1} Height={'100vh'}>
                <SecondContent>
                    <LogMenenu/>
                </SecondContent>
                <BackDiv>
                    <H3S onClick={()=>{HandlerInitSesion()}}>Regresar</H3S>
                </BackDiv>
            </ContentDiv> 
            <ContentDiv >
                <IMGS src={Logo} Height={'100vh'}/>
            </ContentDiv>    
        </FirstContent>
    )
}

export default Log