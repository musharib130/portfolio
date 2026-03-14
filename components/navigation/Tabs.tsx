"use client"
import { useState, Fragment, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"

import { tabs } from "./constants"

import "./tabs.css"

interface TabsProps {
  children: React.ReactNode
}

export default function Tabs({ children }: TabsProps) {
  const [active, setActive] = useState<string>('/')

  const router = useRouter()
  const pathname =  usePathname()

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const toggleTab = async (link: string) => {
    router.push(link)
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="scroll-tab-container">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <div
            onClick={() => toggleTab(tab.link)}
            className={`scroll-tab ${active === tab.link ? "active" : ""}`}>
            <p className={`vertical-text`}>
              {tab.text}
            </p>
          </div>
          <AnimatePresence mode="wait">
          {active === tab.link && (
            <motion.div
              key={active} // IMPORTANT: makes it a new component
              initial={isMobile ? { height: 0, padding: 0 } : { width: 0, padding: 0 }}
              animate={isMobile ? { height: "100%", width: "100%", padding: "1rem" } : { width: "100%", padding: "1rem" }}
              exit={isMobile ? { height: 0, paddingInline: 0 } : { width: 0, paddingInline: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-auto paper-texture rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.30, duration: 0.15 }  // delayed on open
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0 }  // instant on close
                }}
                className="h-full"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </Fragment>
      ))}
    </div>
  )
}