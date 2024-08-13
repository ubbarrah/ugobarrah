import './index.scss'
import cherryTree from '../../../assets/images/right-tree.png'
import {useRef, useLayoutEffect} from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'


const Tree = () => {
    const treeRef = useRef()
    const treeOutlineRef = useRef()
    const bgRef = useRef()

    useLayoutEffect(() => {
        const out = treeOutlineRef.current;
        gsap.registerPlugin(DrawSVGPlugin)
        gsap
        .timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        let ctx = gsap.context(() => {
            gsap.from(treeOutlineRef.current, {
                drawSVG: 0,
                duration: 10,
               // delay: 5,
            })
            
        });
        gsap.fromTo(
            treeRef.current, {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
        return () => ctx.revert();
        
    }, []);


    return(
        <div className="tree-container" ref={bgRef}>
            <svg
            version="1.1"
            width="995"
            height="745"
            viewBox="0 0 995 745"
            className="svg-container"
            xmlns="http://www.w3.org/2000/svg">
                <path ref={treeOutlineRef}
                //style="fill:#ffb1bb;fill-opacity:0;stroke:#ffb1bb;stroke-opacity:1"
                fill="none"
                d="m 995,10 h -10 v 5 H 975 V 10 H 960 V 5 h -10 v 5 H 940 V 5 h 5 V 0 h -20 v 5 h -15 v 5 h -5 v 5 h -5 V 10 H 890 V 20 H 880 V 10 h -15 v 5 h -15 v 5 h -15 v 15 h -5 V 20 H 815 V 15 H 795 V 10 H 785 V 5 h -5 v 25 h -5 v 10 h 5 v 15 h -5 v -5 h -5 V 30 h -5 V 20 h -5 V 10 h -5 v 5 h -10 v 5 h -5 v 5 h -5 v 5 h -15 v -5 h -15 v 5 H 695 V 15 h -15 v -5 h -30 v 20 h 5 v 20 h 5 v 10 h 5 v 10 h -5 v -5 h -5 V 60 H 645 V 40 h -5 v -5 h -10 v 5 h -5 v 15 h -5 V 40 h -10 v 5 h -5 v -5 h -5 v -5 h -5 v -5 h -5 v 20 h -20 v -5 h -5 v -5 h -10 v 10 h 5 v 15 h -5 v -5 h -5 v -5 h -5 V 45 h -5 v 20 h -5 v -5 h -5 v -5 h -10 v -5 h -10 v 30 h -5 v 10 h -5 v 5 h -10 v -5 h -10 v 10 h -5 V 90 h -5 v -5 h -15 v 5 h -5 v 10 h -10 v 5 h -20 v 5 h -5 v 10 h -5 v 5 h -5 v 5 h -15 v 5 h 5 v 10 h -5 v 5 h -5 v 5 h 5 v 5 h 5 v 5 h -10 v 5 h -10 v 10 h 20 v 10 h 10 v 10 h 15 v 5 h -5 v 10 h 10 v -5 h 10 v 15 h 10 v -5 h 10 v 10 h 10 v -5 h 5 v -5 h 20 v -5 h 5 v 5 h 5 v 5 h -5 v 5 h -10 v 5 h -10 v 5 h 25 v -5 h 10 v -5 h 5 v 5 h 25 v 10 h -5 v 5 h -30 v 5 h -10 v -5 h -15 v 10 h -20 v 10 h -35 v 10 h 5 v 5 h 5 v 5 h 5 v 5 h -15 v 5 h -10 v 5 h -5 v 5 h 5 v 5 h 5 v 5 h -5 v 10 h 5 v 5 h 5 v 5 h 5 v 10 h -5 v 10 h 10 v 5 h 5 v 15 h 15 v -5 h 10 v 5 h -5 v 5 h 5 v 5 h 5 v 5 h 25 v 5 h -5 v 10 h 5 v 5 h 20 v -5 h 10 v 10 h -5 v 15 h 10 v -5 h 10 v -10 h 10 v 5 h -5 v 5 h 20 v 5 h 5 v 5 h 10 v 5 h 10 v 10 h -10 v 5 h -5 v 5 h -5 v 5 h -5 v 5 h -5 v 5 h -5 v 5 h -5 v 5 h -10 v 10 h 35 v -5 h 5 v -5 h 5 v 5 h 5 v 5 h 10 v -10 h 20 v 5 h 5 v 5 h 10 v 5 h -5 v 5 h 25 v 5 h 5 v 5 h 10 v -5 h 5 v 5 h 5 v 5 h 5 v -5 h 10 v -5 h 10 v -5 h 5 v 10 h 25 v -5 h 10 v -5 h 15 v 10 h -5 v 5 h 20 v -5 h 5 v -5 h 5 v 5 h 5 v 5 h 5 v 10 h 15 v 5 h 5 v 5 h 10 v 5 h 5 v 5 h 10 v 5 h 5 v 5 h 10 v 5 h 5 v 5 h 10 v 5 h 5 v 5 h 5 v 5 h 5 v 5 h 5 v 5 h 10 v 5 h 15 v 5 h 5 v 5 h 5 v 5 h 5 v 5 h 5 v 5 h 5 v 10 h 5 v 5 h 5 v 35 h -5 v 50 h -10 v 5 h -5 v 10 h 65 V 10"
                />
            </svg>
            
            <img ref={treeRef} className='cherry-tree' src={cherryTree} alt='tree photo'/>
        </div>
    )
    
}

export default Tree;