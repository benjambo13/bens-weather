import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { day, night } from './weatherIcons'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeatherIconPath(text: string, isDay: boolean) {
  return isDay ? day[text as keyof typeof day] : night[text as keyof typeof night]
}

export function minTwoNumbers(n: number) {
  return (n < 10 ? '0' : '') + n
}
