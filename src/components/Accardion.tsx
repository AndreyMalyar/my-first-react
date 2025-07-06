import { useState } from "react";
import type { ReactNode, FC, CSSProperties } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
    const [ isOpen, setOpen ] = useState<boolean>(false);

    const accordionStyle = {
        title: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
        } as CSSProperties,
        button: {
            fontSize: "16px",
            padding: "10px",
            backgroundColor: "brown"
        } as CSSProperties
    }

    const handleToggle = () => {
        setOpen(prev => !prev)
    }

    return (
        <div>
            <h3 style={accordionStyle.title}>
                {title}
                <button style={accordionStyle.button} onClick={handleToggle}>{isOpen ? "-" : "+"}</button>
            </h3>
            {isOpen && children}
        </div>
    )
}

export default Accordion;