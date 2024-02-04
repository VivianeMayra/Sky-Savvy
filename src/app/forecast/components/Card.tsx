import { format } from "date-fns"

interface CardProps {
  date: string
  description: string
  temp: number
}

export function Card({ date, description, temp }: CardProps) {
  const formattedDate = format(new Date(date), "dd/MM/yyyy HH")
  return (
    <div className="w-60 p-8 h-full bg-white flex flex-col items-center rounded-md ">
      <h2>{formattedDate} h</h2>
      <p className="text-2xl font-bold">{temp} °C </p>
      <p>{description}</p>
    </div>
  )
}
