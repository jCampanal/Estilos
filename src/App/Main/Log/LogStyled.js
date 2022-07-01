import Styled from 'styled-components'

export const FirstContent=Styled.div`
display:flex;
justify-content:center;
width:100vw;
height:100vh;
align-items:center;
position:relative;
opacity:${(props)=>(props.Opacity?'1':'0')};
transition:all 500ms;`;


export const SecondContent=Styled.div`
display:flex;
justify-content:center;
width:300px;
border: 2px solid #1976d2;
border-radius:8px;
box-shadow: 3px 3px 3px gray;
background-color:white;
`;

export const ContentDiv=Styled.div`
width:100vw;
height:${(props)=>(props.Height?props.Height:'auto')};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:absolute;
z-index:${(props)=>(props.Idx?props.Idx:'0')};;
top:0;`;

export const IMGS=Styled.img`
width:100vw;
margin: 10px 0 0 0;
max-width:500px;`;

export const H3S=Styled.h3`
color:red;
margin:0 5px 0 0;
cursor:pointer;`;

export const BackDiv=Styled.div`
display:flex;
justify-content:right;
width:300px;
margin:10px 0 0 0;`;