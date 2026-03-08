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
              initial={{ width: 0, opacity: 0.1, padding: 0 }}
              animate={{ width: "100%", opacity: 1, padding: "1rem" }}
              exit={{ width: 0, opacity: 0.1, padding: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden paper-texture rounded-lg"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
        </Fragment>
      ))}
    </div>
  )
}