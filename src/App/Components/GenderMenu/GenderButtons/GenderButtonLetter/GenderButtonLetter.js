import React,{useEffect,useState} from 'react' 
import { useDispatch } from 'react-redux';
import {setNavOpacity} from '../../../../Store/NavEffect/NavEffect'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router'

import Styled from 'styled-components'

const H1S=Styled.h2`
scale:${(props)=>(props.Opacity?props.Scale?props.Scale:'1':'2')};
opacity:${(props)=>(props.Opacity?'1':'0')};
color:${(props)=>(props.Color?props.Color:'red')};
transition:500ms; `;


const GenderButton=(props)=>{
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const Location =useLocation()
  const [opacity,setOpacity]=useState(false)
  const [desktop,setDesktop]=useState(false)
  const [color,setColor]=useState('rgba(20, 91, 139, 0.769)')
  useEffect(()=>{
    setTimeout(()=>{
      if(color==='rgba(20, 91, 139, 0.769)'){
        setColor('rgba(11, 48, 73, 0.623)')
      }else {
        setColor('rgba(20, 91, 139, 0.769)')
      }
    },2000)
  },[color])

    useEffect(()=>{
      setTimeout(() => {
        setOpacity(true)
      }, 1000*(props.index+1));
    },[])

  const HandlerClickButton=()=>{
    setOpacity(false)
    setDesktop(true)
    dispatch(setNavOpacity(false))
    setTimeout(()=>{
      Navigate(Location.pathname+props.Href)
    },600)
    
  }
    return(
         <H1S Color={color} Opacity={opacity} onClick={()=>HandlerClickButton()}>
                 {props.Caption}
          </H1S>
    )
}

export default GenderButton