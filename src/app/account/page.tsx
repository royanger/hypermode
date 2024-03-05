'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const { isLoaded, user } = useUser()
  const router = useRouter()

  if (!isLoaded) return null

  const addGitHub = () => {
    console.log('Hello?')

    user
      ?.createExternalAccount({
        strategy: "oauth_github",
        redirectUrl: "http://localhost:3001/account/callback",
      })
      ?.then((response) => {
        console.log('?????')

        router.push(response?.verification?.externalVerificationRedirectURL?.href!)
      })
      ?.catch((error) => {
        console.log("error", error)
      })
  }

  return (
    <div>
      <p>Add GitHub</p>

      <button type="button" onClick={() => addGitHub()}>GitHub</button>
    </div>
  )

}
