import React from 'react'
import moment from 'moment'

import { getWeatherIconPath } from '../../lib/utils'

interface WeatherObj {
  temp_c: number
  condition: ConditionObj
  is_day: boolean
}

interface ConditionObj {
  text: string
}

interface LocationObj {
  name: string
  country: string
  localtime: string
}

export default function CurrentTile({ weather, location }: { weather: WeatherObj, location: LocationObj }) {
  return(
    <div>
      <div className='flex items-end mx-20' >
        <div className='flex'>
          <p className='text-9xl'>{Math.round(weather.temp_c)}</p>
          <p className='text-7xl'>°</p>
        </div>
        <div className='m-3'>
          <div className='mb-2 flex items-end'>
            <p className='text-5xl'>{location.name}</p>
            <p className='ml-4 text-slate-400'>{location.country}</p>
          </div>
          <p>{moment(location.localtime).format('HH:mm - dddd, DD MMM \'YY')}</p>
        </div>
        <div className='text-center'>
          <img src={getWeatherIconPath(weather.condition.text, weather.is_day)} alt="current weather" className='w-36 h-36' />
        </div>
      </div>
    </div>
  )
}
