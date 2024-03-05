"use client"

import { useClerk } from "@clerk/nextjs"
import { useEffect } from "react"

export default function ClerkRedirectCallback() {
  const { handleRedirectCallback } = useClerk()

  console.log('TESTING')

  const handleRedirect = async () => {
    try {
      await handleRedirectCallback({
        redirectUrl: "/new/git/connected",
      })
    } catch (err) {
      console.log("Error redirecting callback", err)
    }
  }
  useEffect(() => {
    handleRedirect()
  }, [handleRedirectCallback])

  return null
  // return (
  //   <p>Callback page</p>
  // )
}
