  "use client"

  import { useState, useEffect } from 'react'
  import Image from 'next/image'
  // import image1 from '@/assets/DGT_6621.jpg'
  // import image1 from '@/assets/DGT_6547.jpg'
  import image2 from '@/assets/DGT_6533.jpg'
  import image3 from '@/assets/DGT_6621.jpg'
  // import image4 from '@/assets/DGT_6595.jpg'
  import image5 from '@/assets/DGT_6733.jpg'
  import image6 from '@/assets/DGT_6631.jpg'
  import image7 from '@/assets/DGT_6672.jpg'
  import image8 from '@/assets/DGT_6700.jpg'
  import image9 from '@/assets/DGT_6702.jpg'
  import image10 from '@/assets/DGT_6573.jpg'
  // import image12 from '@/assets/DGT_6752.jpg'
  import image11 from '@/assets/DGT_6719.jpg'
  import image13 from '@/assets/DGT_6756.jpg'
  import image14 from '@/assets/DGT_6771.jpg'
  // import image15 from '@/assets/DGT_6801.jpg'
  import image16 from '@/PICS/TAKI9768.jpg'
  import image17 from '@/PICS/TAKI9664.jpg'
  
  
  const slides = [
    {
      image: image13,
      alt: 'Slide 1',
      paragraph: 'WELCOME TO BS BRAND',
    },
    {
      image: image2,
      alt: 'Slide 2',
      paragraph: 'We are a Faith Inspired Fashion Brand',
    },
    {
      image: image3,
      alt: 'Slide 3',
      paragraph: 'We proudly offer:',
    },
    {
      image: image14,
      alt: 'Slide 3',
      paragraph: 'Houdies, Lacoste, T-shirts, Complete Outfits and More',
    },
    {
      image: image5,
      alt: 'Slide 3',
      paragraph: 'Crafted with a touch of Faith Featuring:',
    },
    {
      image: image6,
      alt: 'Slide 3',
      paragraph: 'Bible Quotes, WMB Quotes, Gospel Lyrics and other Inspiring Spiritual Quotes ',
    },
    {
      image: image7,
      alt: 'Slide 3',
      paragraph: 'For Everyone- Youth, Men, Women, Kids and Elders alike',
    },
    {
      image: image8,
      alt: 'Slide 3',
      paragraph: 'Simply choose your favorite color, bible verse, WMB Quote or Spiritual Message',
    },
    {
      image: image9,
      alt: 'Slide 3',
      paragraph: 'We Deliver Worldwide to every country that embraces Jesus Christ as Our Savior',
    },
    {
      image: image10,
      alt: 'Slide 3',
      paragraph: 'With our trusted partner DHL; We reach every corner of the easily in just 2 - 3 days',
    },
    {
      image: image11,
      alt: 'Slide 3',
      paragraph: 'We also offer other services like Apartment Rentals, Car Rentals and much more services',
    },
    {
      image: image16,
      alt: 'Slide 3',
      paragraph: 'At BS-Brand, We embrace the power of collaboration in our fashion designs & services we offer',
    },
    {
      image: image17,
      alt: 'Slide 3',
      paragraph: 'We prioritize faith-inspired designs that empower individuals to express their beliefs with elegance and purpose',
    },
  ]

  export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }, 2500)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className="mt-20 relative w-[1750px] h-[calc(100vh-3.5rem)] overflow-hidden rounded-3xl flex justify-center items-center mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-10 text-white p-4">
              <p className="text-xl font-semibold">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }