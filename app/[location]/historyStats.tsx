import moment from 'moment'
import { getWeatherIconPath } from '../../lib/utils'

type HistoryObj = {
  forecast: {
    forecastday: {
      day: {
        condition: {
          text: string
        }
        maxtemp_c: number
        mintemp_c: number
        avgtemp_c: number
        totalprecip_mm: number
      }
      astro: {
        sunrise: number
        sunset: number
      }
    }[]
  }
}

async function getData(location: string, date: Date): Promise<HistoryObj> {
  const res: Response = await fetch(`http://api.weatherapi.com/v1/history.json?q=${location}&dt=${moment(date).format('yyyy-MM-DD')}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function HistoryStats({ date }: { date: Date }): Promise<JSX.Element> {
  const data = await getData('London', date)
  const day = data.forecast.forecastday[0].day
  const astro = data.forecast.forecastday[0].astro
  return (
    <div className='text-lg'>
      <img src={getWeatherIconPath(day.condition.text, true)} alt="current weather" className='w-44 h-44 mx-auto' />
      <div className='flex justify-between mx-12 my-6'>
        <p>Maximum Temp:</p>
        <p>{day.maxtemp_c}°C</p>
      </div>
      <div className='flex justify-between mx-12 mb-6'>
        <p>Minimum Temp:</p>
        <p>{day.mintemp_c}°C</p>
      </div>
      <div className='flex justify-between mx-12 mb-6'>
        <p>Average Temp:</p>
        <p>{day.avgtemp_c}°C</p>
      </div>
      <div className='flex justify-between mx-12 mb-6'>
        <p>Total Rain:</p>
        <p>{day.totalprecip_mm}mm</p>
      </div>
      <div className='flex justify-between mx-12 mb-6'>
        <p>Sunrise:</p>
        <p>{astro.sunrise}</p>
      </div>
      <div className='flex justify-between mx-12'>
        <p>Sunset:</p>
        <p>{astro.sunset}</p>
      </div>
    </div>
  )
}
