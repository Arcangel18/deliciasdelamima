'use client'
import { motion } from "motion/react"
//import { useInView } from "motion/react"
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    delay?:number;
}

export default function ScrollAnimation ({children,delay=0.2}:Props){

    const {ref,inView}= useInView({triggerOnce:true, threshold:0.1});

    return(
       <motion.div

       ref={ref}
       initial= {{opacity:0, y:80}}
       animate={inView ?{ opacity:1, y:0}: {}}
       transition={{duration:0.8,delay}}
       
       >
        {children}

       </motion.div>
    );

}