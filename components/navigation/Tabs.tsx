"use client"
import { useState, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TabsProps {
  tabs: string[]
  children: React.ReactNode
}

export default function Tabs({ tabs, children }: TabsProps) {
  const [active, setActive] = useState<number | null>(null)

  const toggleTab = (index: number) => {
    setActive(active === index ? null : index)
  }

  return (
    <div className="flex flex-row juststify-start align-stretch h-full w-full">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <div
            onClick={() => toggleTab(index)}
            className={`border border-white bg-black cursor-pointer
            transition-all duration-300
            flex items-start
            ${active === null ? "flex-1" : "flex-none"}`}>
            <p
              className={`text-white vertical-text p-4 font-bold text-xl`}
            >
              {tab}
            </p>
          </div>
          <AnimatePresence mode="wait">
          {active === index && (
            <motion.div
              key={active}   // IMPORTANT: makes it a new component
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden border border-white"
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