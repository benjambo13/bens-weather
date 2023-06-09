'use client'
import { Suspense, useState } from "react"
// @ts-ignore
import { Dashboard, RecentlyViewed } from '@carbon/icons-react'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"

import HistoryStats from "./historyStats"

export default function HeaderButton({ toggleStats, isShowing, location }: { toggleStats: () => void, isShowing: boolean, location: string}) {
  const yesterdayDate = new Date()
  yesterdayDate.setDate(yesterdayDate.getDate() - 1)
  const weekAgoDate = new Date()
  weekAgoDate.setDate(weekAgoDate.getDate() - 7)

  const [date, setDate] = useState<Date | undefined>(yesterdayDate)

  return (
    <div className='flex flex-col fixed right-0 top-0 mt-14 mr-10 gap-8'>
      <Button variant='outline' className={`rounded-full h-14 ${isShowing ? 'bg-slate-200' : ''} border-black`} onClick={toggleStats}>
        <Dashboard size='24'/>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' className='rounded-full h-14 border-black'>
            <RecentlyViewed size='24'/>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{location} Weather History</SheetTitle>
            <SheetDescription>
              Select a date in the past week to find out the weather on that day
            </SheetDescription>
          </SheetHeader>
          <div className='mt-4'>
            <div className='items-center flex my-8 flex-col'>
              <Calendar
                fromDate={weekAgoDate}
                toDate={yesterdayDate}
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <Suspense fallback={
              <>
                <Skeleton className="w-full h-[20px] rounded-full" />
                <Skeleton className="w-full h-[20px] rounded-full my-8" />
                <Skeleton className="w-full h-[20px] rounded-full" />
              </>
            }>
              {/* @ts-expect-error Server Component */}
              <HistoryStats date={date} />
            </Suspense>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
