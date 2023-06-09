'use client'

import { useRouter } from 'next/navigation'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function Form() {
  const [location, setLocation] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    router.push(`/${location}`)
  }

  return (
    <div className="flex w-full max-w-lg items-center space-x-2 mx-auto mb-20">
      <Input
        id='location-input'
        name='location'
        type='text'
        placeholder="City, Town or Postcode"
        onChange={evt => setLocation(evt.target.value)}
        className='border-black'
      />
      <Button className='w-40' onClick={onSubmit}>Go</Button>
    </div>
  )
}