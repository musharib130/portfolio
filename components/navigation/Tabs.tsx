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

  return (
    <div className="scroll-tab-container">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <div
            onClick={() => toggleTab(tab.link)}
            className={`scroll-tab ${active === tab.link ? "active" : ""}`}>
            <p
              className={`vertical-text`}
            >
              {tab.text}
            </p>
          </div>
          <AnimatePresence mode="wait">
          {active === tab.link && (
            <motion.div
              key={active}   // IMPORTANT: makes it a new component
              initial={{ width: 0, padding: 0 }}
              animate={{ width: "100%", padding: "1rem" }}
              exit={{ width: 0, padding: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden paper-texture rounded-lg"
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