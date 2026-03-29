"use client"

import ConfirmationDialog from "@/components/confirmation-dialog/ConfirmationDialog"
import { SessionProvider } from "next-auth/react"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <SessionProvider>
        {children}
        <ConfirmationDialog />
      </SessionProvider>
  )
}