import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const day = now.getDate()
  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const weekday = weekdayNames[now.getDay()]
  const month = monthNames[now.getMonth()]
  const hours24 = now.getHours()
  const period = hours24 >= 12 ? 'PM' : 'AM'
  const hours = hours24 % 12 || 12
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return (
    <div>
      {`${weekday} ${month} ${day} ${hours}:${minutes} ${period}`}
    </div>
  )
}

export default DateTime
