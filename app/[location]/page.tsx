import CurrentTile from "./currentTile"
import ForecastTile from "./forecastTile"
import ExtraSection from "./extraSection"

type WeatherObj = {
  forecast: {
    forecastday: {
      hour: HourObj[]
      astro: AstroObj
    }[]
  },
  current: CurrentObj
  location: LocationObj
  astro: AstroObj
}

type CurrentObj = {
  temp_c: number
  condition: ConditionObj
  is_day: boolean
  humidity: number
  uv: number
  feelslike_c: number
  gust_mph: number
}

type ConditionObj = {
  text: string
}

type HourObj = {
  condition: ConditionObj
  is_day: boolean
  temp_c: number
  chance_of_rain: number
}

type LocationObj = {
  name: string
  country: string
  localtime: string
}

type AstroObj = {
  sunrise: string
  sunset: string
}

async function getData(location: string | undefined): Promise<WeatherObj> {
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${location}&units=metric&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)

  if (!res.ok) { throw new Error('Failed to fetch data')}
 
  return res.json()
}

export default async function Page({ params } : { params: any }): Promise<JSX.Element> {
  const data = await getData(params.location)
  const current = data.current

  return (
    <div className='bg-clouds h-screen pt-20 bg-cover'>
      <CurrentTile weather={current} location={data.location} />
      <ExtraSection stats={current} location={data.location.name} astro={data.forecast.forecastday[0].astro}/>
      <ForecastTile forecast={data.forecast.forecastday[0].hour} />
    </div>
  )
}
