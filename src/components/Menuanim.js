import * as React from "react";
import { useRef, forwardRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./../components/dimention";
import { MenuToggle } from "./../components/Menutoggle";
import { sideItems } from "../datas/sidebardata";
import { Link } from 'react-router-dom'


const sidebar = {
  open: (height = 100) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
};

export default function Menu ()  {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  
  return (
    <motion.nav
    className="hidden max-md:block"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="bg-soft-red cursor-pointer h-fit absolute top-0 -left-20 z-40 w-40 p-7 pt-8 hidden max-md:block" 
        variants={sidebar}
        // drag 
        // dragConstraints = {{left: 0, right: 250, top: -50, bottom: 500}}
      >
        {/* elements de la navbar ici */}

          <MenuToggle  toggle={() => toggleOpen()} /> {/*icone du menu inter actif */}
            {sideItems.map((val, id) => (
                <Link to={val.path} key={id}>
                    <motion.li className='side flex text-sm gap-1 rounded-sm cursor-pointer items-center p-3'>
                    {val.icon}
                    {val.text}
                    </motion.li>
                </Link>
            ))}

        {/* fin */}
      </motion.div>
    </motion.nav>
  );
};
