import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/shared/ui/button'

const slides = [
    {
        image: '/images/nike-just-do-it.avif',
        title: 'Back to School',
        subtitle: 'Fresh picks for the new season',
    },
    {
        image: '/images/nike-just-do-it.avif',
        title: 'Air Max 270',
        subtitle: 'Feel the Air',
    },
    {
        image: '/images/nike-just-do-it.avif',
        title: 'Run Faster',
        subtitle: 'Gear for your next run',
    },
]

export const Gallery = () => {
    return (
        <div className="w-full h-[700px] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                loop
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="text-center text-white backdrop-blur-sm bg-black/30 p-6 rounded-xl max-w-xl absolute left-10 bottom-10">
                                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-xl">{slide.subtitle}</p>
                                <Button className="mt-4">Shop Now</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
