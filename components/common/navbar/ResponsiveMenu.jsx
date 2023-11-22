import { ActiveMenu } from "@/contexts/activeMenu";
import Link from "next/link";
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const ResponsiveMenu = () => {
  const { activeMenu, setActiveMenu } = useContext(ActiveMenu);
  console.log(activeMenu);
  const links = [
    {
      label: "The Experiences",
      path: "/",
    },
    {
      label: "Customer Reviews",
      path: "/",
    },
    {
      label: "About us",
      path: "/",
    },
    {
      label: "Contact us",
      path: "/",
    },
  ];
  //   start Animation
  const item = {
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        bounce: 6,
        duration: 0.5,
        delay: 0.9,
      },
    },
  };
  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          className={`responsive-menu `}
          variants={item}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1,
            bounce: 6,
            delayChildren: 2,
            staggerChildren: true,
          }}
          exit={"exit"}
        >
          <div className="close" onClick={() => setActiveMenu(!activeMenu)}>
            <span>Close</span>
          </div>
          <motion.ul>
            {links.map((link, index) => (
              <motion.li
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 1.5,
                    bounce: 1,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 100,
                  bounce: 6,
                  transition: { bounce: 6, delay: 0.4 },
                }}
                key={index}
              >
                <Link href={link.path}>{link.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
