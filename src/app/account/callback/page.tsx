"use client"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function ClerkRedirectCallback() {
  const { isLoaded, user } = useUser()
  const router = useRouter()

  if (!isLoaded || !user?.id) return null

  // get the user's current GitHub account, if one is present
  const gitHubAccount = user?.externalAccounts?.filter(
    (account) => account.provider === 'github',
  )

  // check if the account if verified and store result
  const verifiedDiscordAccount =
    gitHubAccount.length === 1 &&
    gitHubAccount[0].verification?.status === 'verified'

  // check if there is a GitHub account, but it is unverified
  const unverifiedGitHUbAccount =
    !verifiedDiscordAccount && gitHubAccount.length === 1

  // You can get the reason/error from this too, if you want to d display that. 
  if (!unverifiedGitHUbAccount) {
    return (
      <div className="mb-16 flex w-full flex-col items-center">
        <div className="mt-12 flex w-4/6 flex-col">
          <div>
            <p>GitHub account added</p>
          </div>
          <div>
            <p>
              There is a GitHub account associated with your account, but it
              is unverified.

            </p>
            <button onClick={() => router.push("/new/git/connected")} type="submit">
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-16 flex w-full flex-col items-center">
      <div className="mt-12 flex w-4/6 flex-col">
        <div>
          <p>GitHub account added</p>
        </div>
        <div>
          <p>
            You have added a GitHub account and it is verified. You can
            continue to the final step.
          </p>
          <button onClick={() => router.push("/new/git/connected")} type="submit">
            Continue
          </button>
        </div>
      </div>
    </div>
  )



}
