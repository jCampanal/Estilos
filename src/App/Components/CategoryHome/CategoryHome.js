import React,{useState,useEffect, useRef} from 'react' 
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setNavOpacity } from '../../Store/NavEffect/NavEffect'
import {useIntersection} from 'react-use'
import {
    ContendDiv,
    IMGS,
    DesktopS,
    CaptionDiv,
    Caption
} from './CategoryHomeStyled'

import Styled from 'styled-components'

const H1S=Styled.h2`
scale:${(props)=>(props.Opacity?props.Scale?props.Scale:'1':'2')};
opacity:${(props)=>(props.Opacity?'1':'0')};
color:${(props)=>(props.Color?props.Color:'red')};
cursor:pointer;
transition:1000ms; `;

const CategoryHome=(props)=>{
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const [opacity,setOpacity]=useState(false)   
    const [color,setColor]=useState('rgba(20, 91, 139, 0.769)')

    
    const [aplly,setApply]=useState(false)
    const sectionRef=useRef(null)

    const intersection=useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.5
    })

    

      
    const HandlerClickButton=(path)=>{
        setOpacity(false)
        dispatch(setNavOpacity(false))
        setTimeout(()=>{
          Navigate(path)
        },600)
        
      } 




    useEffect(() => {
        console.log('entro '+props.Index)
        console.log(opacity)
        
        if(intersection&&!opacity){
        setOpacity(!(intersection.intersectionRatio<0.5))
      
    }
    }, [intersection])



    useEffect(()=>{
      setTimeout(()=>{
        if(color==='rgba(20, 91, 139, 0.769)'){
          setColor('rgba(11, 48, 73, 0.623)')
        }else {
          setColor('rgba(20, 91, 139, 0.769)')
        }
      },2000)
    },[color])





        return(
                    <H1S  ref={sectionRef} Color={color} Opacity={opacity} onClick={()=>HandlerClickButton(props.href)}>
                        {props.caption}
                    </H1S>
           
        )
}

export default CategoryHome