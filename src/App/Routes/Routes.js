import React, {lazy,Suspense} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Loading from '../Components/Loading/Loading'

import Log from '../Main/Log/Log'
import Home from '../Main/Home/Home';
import Search from '../Main/Search/Search'

import Header from '../Pages/Header/Header'

const LCalzados=lazy(()=>import('../Main/Calzados/Calzados'))
const LCalzadosMujer=lazy(()=>import('../Main/Calzados/CalzadosMujer/CalzadosMujer'))
const LCalzadosMixtos=lazy(()=>import('../Main/Calzados/CalzadosMixtos/CalzadosMixtos'))

const LInferior=lazy(()=>import('../Main/Inferior/Inferior'))
const LInferiorMujeres=lazy(()=>import('../Main/Inferior/InferiorMujeres/InferiorMujeres'))
const LInferiorHombres=lazy(()=>import('../Main/Inferior/InferiorHombres/InferiorHombres'))

const LSuperior=lazy(()=>import('../Main/Superior/Superior'))
const LSuperiorMujeres=lazy(()=>import('../Main/Superior/SuperiorMujeres/SuperiorMujeres'))
const LSuperiorHombres=lazy(()=>import('../Main/Superior/SuperiorHombres/SuperiroHombres'))



const AppRoutes =()=>{



    return(
        <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Header><Home/></Header>} />

                    <Route exact path="/calzados" element={<Header><LCalzados/></Header>} />
                        <Route exact path="/calzados/Mujeres" element={<Header><LCalzadosMujer/></Header>} />  
                        <Route exact path="/calzados/Unisex" element={<Header><LCalzadosMixtos/></Header>} /> 

                    <Route path="/inferior" element={<Header><LInferior/></Header>} />
                        <Route exact path="/inferior/Mujeres" element={<Header><LInferiorMujeres/></Header>} /> 
                        <Route exact path="/inferior/Hombres" element={<Header><LInferiorHombres/></Header>} /> 

                    <Route path="/superior" element={<Header><LSuperior/></Header>} />
                        <Route exact path="/Superior/Mujeres" element={<Header><LSuperiorMujeres/></Header>} /> 
                        <Route exact path="/Superior/Hombres" element={<Header><LSuperiorHombres/></Header>} />

                    <Route path="/search" element={<Header><Search/></Header>} /> 
                    <Route path='/Auth' element={<Log/>}/>      
                </Routes>
    </Suspense>
    )
}

export default AppRoutes