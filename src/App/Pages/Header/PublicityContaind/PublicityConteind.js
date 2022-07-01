import React,{useState,useEffect} from 'react' 
import { PublicityContainerData600,
         PublicityContainerData1200,
         PublicityContainerData1600, } from './PublicityContainesData'
import {
    VisulaPromotionDiv,
    VisualIMG,
    NewIMG,
    ConteinVisulaPromotionDiv,
    ColumnRight,
    ColumnLeft,
    ModelIMG} from './PublicityConteindStyled'

const PublicityContained=(porps)=>{
    let AUX=window.screen.width>600?
            window.screen.width>1200?
            [...PublicityContainerData1600]:
            [...PublicityContainerData1200]:
            [...PublicityContainerData600]
    const [PublicityContainerData,setPublicityContainerData]=useState(AUX)
   
    const [visualImage,setVisualImage]=useState(AUX[0].SRC)
    const [visualImageAux,setVisualaux]=useState(AUX[0].SRC)
    const [newImage,setNewImage]=useState(AUX[1].SRC)
    const [count,setCount]=useState(0)
    const [change,setChange]=useState(false)

    window.onresize=(()=>{
        let Aux= window.screen.width>600?
        window.screen.width>1200?
        [...PublicityContainerData1600]:
        [...PublicityContainerData1200]:
        [...PublicityContainerData600] 
        setPublicityContainerData(Aux)
        setVisualImage(Aux[0].SRC)
        setVisualImage(Aux[1].SRC)
        setVisualaux(Aux[0].SRC)
        setChange(false)})

    useEffect(()=>{
        
                const LastCount=count+1===PublicityContainerData.length
                setTimeout(()=>{setNewImage(PublicityContainerData[LastCount?0:count+1].SRC)},600)
                setTimeout(()=>{setChange(true)},1600)
                setTimeout(()=>{setVisualImage(PublicityContainerData[LastCount?0:count+1].SRC)},4000)
                setTimeout(()=>{setChange(false)},4800)
                if(LastCount){
                    setTimeout(()=>{setCount(0)},14800)
                }else{
                    setTimeout(()=>{setCount(count+1)},14800)
                }
                    
       
    },[count])



    return(
        <ConteinVisulaPromotionDiv>
            <ColumnLeft/>
            <VisulaPromotionDiv>
                <VisualIMG
                    src={visualImage}
                    change={change}/>
                <NewIMG
                    src={newImage}
                    change={change}/>
                <ModelIMG src={visualImageAux}/>
            </VisulaPromotionDiv>
            
            <ColumnRight/>
       </ConteinVisulaPromotionDiv>
    )
}

export default PublicityContained