import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useCalendarApp, ScheduleXCalendar} from '@schedule-x/react'
import {
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'

const eventModal = createEventModalPlugin()

function App() {
    const calendar = useCalendarApp({
        views: [createViewWeek(), createViewMonthGrid()],
        events: [
            {
                id: 1,
                title: 'Len Springs Birthday',
                start: '2025-09-03 00:00',
                end: '2025-09-03 23:59',
                description: '!1995.'
            },
        ],
        selectDate: '2025-01-01',
        plugins: [eventModal, createDragAndDropPlugin()],
    })

    return (
        <>
            <div>
                <ScheduleXCalendar calendarApp={calendar}/>
            </div>
        </>
    )
}

export default App
