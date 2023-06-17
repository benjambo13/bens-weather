import { getWeatherIconPath, minTwoNumbers } from "../../lib/utils"

type HourObj = {
  condition: {
    text: string
  }
  is_day: boolean
  temp_c: number
  chance_of_rain: number
}

export default function ForecastTile({ forecast }: { forecast: Array<HourObj> }): JSX.Element {
  return(
    <div className='overflow-auto m-4 block w-fit whitespace-nowrap mx-8 fixed bottom-0'>
      {forecast.map((hour , i): JSX.Element => {
        return(
          <div className='text-center inline-block border-r first:border-l p-1 pb-4 border-black'>
            <div className='flex justify-center'>
              <p className='font-bold mr-0.5'>{minTwoNumbers(i)}</p>
              <p>00</p>
            </div>
            <img src={getWeatherIconPath(hour.condition.text, hour.is_day)} alt='hour-picture' className='w-20 h-20' />
            <p className='font-bold'>{JSON.stringify(Math.round(hour.temp_c))}°C</p>
            <img src='./weather-icons/raindrops.svg' alt='rain-percentage' className='w-8 h-8 mx-auto mt-4' />
            <p>{JSON.stringify(hour.chance_of_rain)}%</p>
          </div>
        )
      })}
    </div>
  )
}
