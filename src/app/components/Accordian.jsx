"use client"
import React, { useEffect, useState ,createContext, useContext, useRef} from "react";

const AccordianContext = createContext();

const Accordian = ({children, value, onChange, ...props})=>{
    const [selected, setSelected] = useState(value);

    useEffect(()=>{
        onChange?.(selected)
    }, [selected])


    return(
        <ul {...props}>
        <AccordianContext.Provider value={{selected, setSelected}}>
            {children}
        </AccordianContext.Provider>
        
        </ul>
    )
}


export function AccordianItem({children, value, trigger, ...props}){
    const {selected , setSelected} = useContext(AccordianContext)
    const open = selected == value

    const ref = useRef(null)

    return (
        <li className="border-b " {...props}>
            <header role="button" onClick={()=> setSelected(open ? null : value)} className="flex justify-between items-center px-10 py-6 font-medium" style={{backgroundColor:open? "#ff4d30" : "white", color: open?"white" : "black"}}>
                {trigger}
                <img src="/icons/arrow.png" className={`w-4 h-4  transition-transform ${open ? "rotate-180" : " "}`}  style={{filter:open? "invert(98%) sepia(0%) saturate(7494%) hue-rotate(288deg) brightness(106%) contrast(103%)" : ""}} alt="" />
            </header>
            <div className="overflow-y-hidden transition-all" style={{ height: open ? ref.current?.offsetHeight || 0 : 0}}>
                <div className="p-4 pb-4 text-sm" ref={ref}>{children}</div>
            </div>
        </li>
    )
}











 export default Accordian;




