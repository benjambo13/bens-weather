import CurrentTile from "./currentTile"
import ForecastTile from "./forecastTile"
import ExtraSection from "./extraSection"

interface WeatherObj {
  forecast: {
    forecastday: Array<{
      hour: HourObj
      astro: AstroObj
    }>
  },
  current: CurrentObj
  location: LocationObj
  astro: AstroObj
}

interface CurrentObj {
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

interface HourObj {
  condition: ConditionObj
  is_day: boolean
  temp_c: number
  chance_of_rain: number
}

interface LocationObj {
  name: string
  country: string
  localtime: string
}

interface AstroObj {
  sunrise: string
  sunset: string
}

async function getData(location: string | undefined) {
  const res: Response = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${location}&units=metric&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)

  if (!res.ok) { throw new Error('Failed to fetch data')}
 
  return res.json()
}

export default async function Page({ params } : { params: any }) {
  const data: WeatherObj = await getData(params.location)
  const current = data.current

  return (
    <div className='bg-clouds h-screen pt-20 bg-cover'>
      <CurrentTile weather={current} location={data.location} />
      <ExtraSection stats={current} location={data.location.name} astro={data.forecast.forecastday[0].astro}/>
      {/* @ts-ignore */}
      <ForecastTile forecast={data.forecast.forecastday[0].hour} />
    </div>
  )
}
