'use client'

import { type FC } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css'

interface Props {
   images: string[]
   title: string;
   className?: HTMLElement['className']
}

export const ProductMobileSlideshow: FC<Props> = ({ images, title, className }) => {

   return (
      <div className={className}>
         <Swiper
            style={{
                  width: '100vw',
                  height: '500px'
               } as React.CSSProperties
            }
               spaceBetween={10}
               navigation={true}
               autoplay={{ 
                  delay: 2500
               }}
               modules={[FreeMode, Autoplay, Pagination]}
               className="mySwiper2"
            >
               {
                  images.map( image => (
                     <SwiperSlide key={image}>
                        <Image
                           width={600}
                           height={500}
                           src={`/images/products/${image}`}
                           alt={ title }
                           className='rounded-lg object-fill'
                        />
                     </SwiperSlide>
                  ))
               }
         </Swiper>
      </div>
   )
}
