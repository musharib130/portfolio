"use client"
import { useState, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./tabs.css"

interface TabsProps {
  tabs: string[]
  children: React.ReactNode
}

export default function Tabs({ tabs, children }: TabsProps) {
  const [active, setActive] = useState<number>(0)

  const toggleTab = (index: number) => {
    setActive(index)
  }

  return (
    <div className="scroll-tab-container">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <div
            onClick={() => toggleTab(index)}
            className={`scroll-tab ${active === index ? "active" : ""}`}>
            <p
              className={`vertical-text`}
            >
              {tab}
            </p>
          </div>
          <AnimatePresence mode="wait">
          {active === index && (
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