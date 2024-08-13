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
                I like computer science! 
                I mostly create programs, draw digital art, and code websites like this one. 
                This website was made with React, Nodejs, and some of my favorite js libraries.
            </div>
            <div className='sen3'>
                私の趣味は外国語を勉強することです。- Japanese for "my hobby is learning foreign languages."
            </div>
            <div className='sen4'>
                I also like to play guitar!
            </div>
            <div className='sen5'>
                If you want to contact me, I linked my socials below!
            </div>
            
            
        </div>
    </div>
    
    );
}

export default Home;