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

                During his K-12 education, Ugo Barrah couldn’t help but notice the stark contrast 
                in STEM resources available to him in the U.S. compared to those accessible to his 
                peers in sub-Saharan Africa, where his parents were born and where he visited as a child. 
             
                {/* I like computer science! 
                I mostly create programs, draw digital art, and code websites like this one. 
                This website was made with React, Nodejs, and some of my favorite js libraries. */}
            </div>
            <div className='sen3'>
                During his high school at Phillips Exeter Academy, Ugo founded STEMsubSahara.org 
                to assist the neediest of the kids in subSaharan Africa with interest in STEM by 
                providing them with essential resources and mobile devices for STEM education. 
                {/* 私の趣味は外国語を勉強することです。- Japanese for "my hobby is learning foreign languages." */}
            </div>
            <div className='sen4'>
                Our long term goal is to further develop this site as a platform that centers on personalized 
                one-on-one mentorship, STEM broadcasts, peer connections, AI, and video links to create an 
                interactive and supportive learning experience for the neediest of the kids in the subSaharan 
                to access STEM resources in rural communities where there no internet.

            </div>
            <div className='sen5'>
                If you want to contact me, I linked my socials below!
            </div>
            
            
        </div>
        <Tree />
    </div>
    
    );
}

export default Home;