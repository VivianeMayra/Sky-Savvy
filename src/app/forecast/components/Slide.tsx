// Slide.tsx
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card } from "./Card"
import { ForecastList } from "@/Context/ForecastContext"
import { useMediaQuery } from "react-responsive"

interface SlideProps {
  forecastData: ForecastList | null
}

export function Slide({ forecastData }: SlideProps) {
  const isMobile = useMediaQuery({ maxWidth: 450 })
  if (!forecastData) {
    return null
  }

  let slidesToShow = 4
  if (isMobile) {
    slidesToShow = 1
  }

  const { list } = forecastData

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {list.map((data, index) => (
        <div key={index}>
          <Card {...data} />
        </div>
      ))}
    </Slider>
  )
}
