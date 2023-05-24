import { useState } from "react"
import classNames from "../assets/styles/Accordion.module.css"

export function Accordion(){


    const [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <h1>akkordiyon</h1>

        <h2>Kuzey Kafkasya</h2>

        <ul className={classNames.Accordion}>
        <Panel title="Coğrafya" show={activeIndex === 0} setActive={()=>{setActiveIndex(0)}}> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla iure harum voluptatibus minima suscipit modi cumque est ea dolor!
            </p>
        </Panel>

        <Panel title="İklim" show={activeIndex === 1} setActive={()=>{setActiveIndex(1)}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla iure harum voluptatibus minima suscipit modi cumque est ea dolor!
            </p>
        </Panel>
        </ul>
        </>
        
    )
}


function Panel({title, children, show, setActive}){
    return(
        <li>
            <h2>{title}</h2>
            {show && children}
            {
                !show && 
                <button type="button" onClick={setActive}>Detay göster</button>
            }
            
        </li>
    )
}

