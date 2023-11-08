'use client'

import { useState } from "react"
import { getRandomJoke } from "@/lib/data/getRandomJoke"

export const Joke = () => {
  const [joke, setJoke] = useState('')

  const generateRandomJoke = async () => {
    const data = await getRandomJoke()
    if (data) {
      setJoke(data)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <span className="text-center text-white">
        {joke ? joke : 'There was an error fetching random joke. Please try generate again.'}
      </span>
      <button
        onClick={generateRandomJoke}
        className="flex-grow-0 w-auto p-3 bg-black rounded"
      >
        <span className="text-center text-white">
          Generate
        </span>
      </button>
    </div>
  )
}