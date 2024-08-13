import './index.scss'
import cherryTree from '../../../assets/images/right-tree.png'
import {useRef, useLayoutEffect} from 'react'


const Tree = () => {


    return(
        <div className="tree-container" ref={bgRef}>
            
            <img className='cherry-tree' src={cherryTree} alt='tree photo'/>
        </div>
    )
    
}

export default Tree;