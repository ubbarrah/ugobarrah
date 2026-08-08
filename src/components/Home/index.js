import {Link, NavLink} from 'react-router-dom'
import './index.scss';
import portrait from "../../assets/images/portrait.png";
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import Tree from './Tree'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H', 'i', '!', ' ', 'I', "'", 'm', ' ', 'U', 'g', 'o', ' ', 'B', 'a', 'r', 'r', 'a', 'h', '.']
    
    useEffect(() => {
        setTimeout(() => {setLetterClass('text-animate-hover')}, 
        4000)}, []
    )
    
    return (
    
    <div className="container home-page">
        <div className="portrait">
            <img src={portrait} alt="portrait"></img>

        </div>
        <div className='text-zone'>
            <div className='sen1'>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {nameArray}
                idx = {11} />
            </div>
            <div className='sen2'>

                All theoughout my high school and college education, I couldn’t help but notice the stark contrast 
                in STEM resources available to me in the U.S compared to those accessible to my 
                peers in sub-Saharan Africa, where my parents were born and where I visited as a child. 
             
            </div>
            <div className='sen3'>
               That's why I devoted myself to making software tailored specifically toward helping equalize the STEM playing field. 
               The application is called Treer. Try it out in the code section on my website. it is available for MacOS and soon iPhone and Android as well.
            </div>
            <div className='sen4'>
                If you want to contact me, I linked my socials below!
            </div>
            <div className='sen5'>
                
            </div>
            
            
        </div>
        <Tree />
    </div>
    
    );
}

export default Home;