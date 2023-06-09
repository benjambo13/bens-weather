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

interface AstroObj {
  sunrise: string
  sunset: string
}

export default function StatsTile({ stats, astro }: { stats: WeatherObj, astro: AstroObj }) {
  return (
    <div className='flex fixed top-16 right-40'>
      <div className='flex flex-col mr-8'>
        <div className='flex'>
          <img src='./weather-icons/sunrise.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>Sunrise</p>
            <p className='text-2xl'>{astro.sunrise}</p>
          </div>
        </div>
        <div className='flex'>
          <img src='./weather-icons/sunset.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>Sunset</p>
            <p className='text-2xl'>{astro.sunset}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mr-8'>
        <div className='flex'>
          <img src='./weather-icons/humidity.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>Humidity</p>
            <p className='text-2xl'>{stats.humidity}%</p>
          </div>
        </div>
        <div className='flex'>
          <img src='./weather-icons/uv-index.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>UV</p>
            <p className='text-2xl'>{stats.uv}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex'>
          <img src='./weather-icons/thermometer.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>Feel like</p>
            <p className='text-2xl'>{stats.feelslike_c} °C</p>
          </div>
        </div>
        <div className='flex'>
          <img src='./weather-icons/wind.svg' alt='humidity' className='w-16 h-16' />
          <div className='ml-2'>
            <p className='text-xs text-slate-400'>Gusts</p>
            <p className='text-2xl'>{stats.gust_mph} mph</p>
          </div>
        </div>
      </div>
    </div>
  )
}
