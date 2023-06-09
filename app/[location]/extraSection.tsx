'use client'

import { useState } from "react"
import HeaderButton from "./headerButton"
import StatsTile from "./statsTile"

interface AstroObj {
  sunrise: string
  sunset: string
}

interface WeatherObj {
  temp_c: number
  condition: ConditionObj
  is_day: boolean
  humidity: number
  uv: number
  feelslike_c: number
  gust_mph: number
}

interface ConditionObj {
  text: string
}

export default function ExtraSection({ stats, location, astro }: { stats: WeatherObj, location: string, astro: AstroObj}) {
  const [ isStatShowing, setIsStatShowing ] = useState(false)

  const toggleStats = () => {
    setIsStatShowing(!isStatShowing)
  }

  return (
    <>
      <HeaderButton toggleStats={toggleStats} isShowing={isStatShowing} location={location} />
      { isStatShowing && <StatsTile stats={stats} astro={astro} /> }
    </>
  )
}
