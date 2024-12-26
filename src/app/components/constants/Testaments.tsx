import { StaticImageData } from 'next/image';
import pic1 from '@/PICS/Testimonials_assets/dogiteri_nsabii_469721903_18048820607113517_1735180949973337094_n.jpg'
import pic2 from '@/PICS/Testimonials_assets/ndimbati250_461776262_395260200134876_1333684609725121973_n.webp'
import pic3 from '@/PICS/Testimonials_assets/pexels-divinetechygirl-1181519.jpg'
import pic4 from '@/PICS/Testimonials_assets/pexels-viscoseillusion-4006576.jpg'
import pic5 from '@/PICS/Testimonials_assets/pexels-jamaal-hutchinson-675024091-18563157.jpg';
import pic6 from '@/PICS/Testimonials_assets/pexels-jamaal-hutchinson-675024091-18563162.jpg';
import pic7 from '@/PICS/Testimonials_assets/pexels-jean-daniel-1182238.jpg';
import pic8 from '@/PICS/Testimonials_assets/pexels-jorge-fakhouri-filho-861811-2701660.jpg';
import pic9 from '@/PICS/Testimonials_assets/pexels-marlonretratos-3190174.jpg';
import pic10 from '@/PICS/Testimonials_assets/pexels-mwabonje-1820919.jpg';
import pic11 from '@/PICS/Testimonials_assets/pexels-mwabonje-2033447.jpg';
import pic12 from '@/PICS/Testimonials_assets/pexels-nappy-936119.jpg';
import pic13 from '@/PICS/Testimonials_assets/pexels-olly-3769021.jpg';
import pic14 from '@/PICS/Testimonials_assets/pexels-philboakye-2698935.jpg';
import pic15 from '@/PICS/Testimonials_assets/pexels-shvetsa-3746275.jpg';
import pic16 from '@/PICS/Testimonials_assets/pexels-sincegameon-29759438.jpg';
import pic17 from '@/PICS/Testimonials_assets/pexels-tomaz-barcellos-999425-1996250.jpg';
import pic18 from '@/PICS/Testimonials_assets/pexels-tubarones-2737046.jpg';
import pic19 from '@/PICS/Testimonials_assets/pexels-tubarones-2764976.jpg';
import pic20 from '@/PICS/Testimonials_assets/pexels-tubarones-3026283.jpg';


interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string | StaticImageData;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ndimbati",
    role: "Actor",
    company: "Rwandan Entertainment Hub",
    image: pic2,
    quote: "Wearing Bs Brand reminds me daily of God’s purpose for my life. It’s more than fashion. It’s a testimony."
  },
  {
    id: 2,
    name: "Dr. Nsabi",
    role: "Actor",
    company: "Dr Nsabi Comedy",
    image: pic1,
    quote: "Bs Brand seamlessly blends faith and style. Every piece is a reminder to act with love and grace."
  },
  {
    id: 3,
    name: "Akaliza Merveille",
    role: "Student",
    company: "African Leadership University",
    image: pic3,
    quote: "Through Bs Brand products, I feel empowered to walk boldly in my faith and inspire others to do the same."
  },
  {
    id: 4,
    name: "Emily Thompson",
    role: "Marketing Director",
    company: "Creative Spark USA",
    image: pic4,
    quote: "Bs Brand shirts do inspire to me share my faith in a way that’s authentic, modern, and meaningful."
  },
  {
    id: 5,
    name: "Grace Uwimana",
    role: "Freelance Writer",
    company: "",
    image: pic5,
    quote: "Bs Brand is more than clothing. It’s a platform for faith, love, and purpose in action."
  },
  {
    id: 6,
    name: "John Adams",
    role: "Fashion Designer",
    company: "Style Vision Rwanda",
    image: pic6,
    quote: "Their designs are filled with hope and inspiration. Bs Brand keeps my faith strong and my style sharper."
  },
  {
    id: 7,
    name: "Michael Carter",
    role: "Devops Engineer",
    company: "The North Face USA",
    image: pic7,
    quote: "I love how Bs Brand products encourage me to wear my faith confidently, even in the corporate world."
  },
  {
    id: 8,
    name: "Aline Ishimwe",
    role: "Accountant",
    company: "Vivid Rwanda",
    image: pic8,
    quote: "Bs Brand inspires my creativity by reminding me of the beauty of God’s word every day."
  },
  {
    id: 9,
    name: "Laura Simmons",
    role: "Event Planner",
    company: "Memorable Moments USA",
    image: pic9,
    quote: "Bs Brand allows me to connect my faith with my profession. It’s a true blessing"
  },
  {
    id: 10,
    name: "Erica Mugisha",
    role: "Software Developer",
    company: "Twelve 12 USA",
    image: pic10,
    quote: "Bs Brand makes faith fashionable. It’s exactly what I needed to express my spiritual journey."
  },
  {
    id: 11,
    name: "Mugabo Kevin",
    role: "Graphic Designer",
    company: "Pixel Perfect USA",
    image: pic11,
    quote: "Every design from Bs Brand feels like a gentle nudge from God to keep shining His light."
  },
  {
    id: 12,
    name: "Jean Bosco",
    role: "Photographer",
    company: "Lens Crafters Rwanda",
    image: pic12,
    quote: "Bs Brand helps me focus on capturing moments that glorify God while staying stylish."
  },
  {
    id: 13,
    name: "Olivia Carter",
    role: "Restaurant Owner",
    company: "Tasty Bites USA",
    image: pic13,
    quote: "I wear Bs Brand rollernecks as a statement of faith, reminding me to serve with love and humility."
  },
  {
    id: 14,
    name: "Alex Mugabe",
    role: "Tour Guide",
    company: "Akagera Motors",
    image: pic14,
    quote: "On every trek, Bs Brand reminds me that God’s creation is beautiful, and so is His message."
  },
  {
    id: 15,
    name: "Ella Johnson Ndungutse",
    role: "Social Media Influencer",
    company: "The Daily Vibe USA",
    image: pic15,
    quote: "Bs Brand products makes sharing my faith easy, stylish, and impactful. My followers love it!"
  },
  {
    id: 16,
    name: "Kevin Ndahayo",
    role: "Fitness Coach",
    company: "StrongLife Rwanda",
    image: pic16,
    quote: "Wearing Bs Brand products reminds me that faith is the foundation of true strength."
  },
  {
    id: 17,
    name: "Laetitia Simons",
    role: "Software Engineer",
    company: "Tellet USA",
    image: pic17,
    quote: "Bs Brand is like a harmony of faith and fashion—beautifully crafted and spiritually uplifting."
  },
  {
    id: 18,
    name: "Patricia Uwase",
    role: "Architect",
    company: "Skyline Creations Rwanda",
    image: pic18,
    quote: "Bs Brand clothes do reflect God’s precision and creativity. It’s a joy to wear their designs."
  },
  {
    id: 19,
    name: "Nathaniel Brooks",
    role: "Teacher",
    company: "Bright Minds Academy USA",
    image: pic19,
    quote: "The other day, One of my students was inspired to share the word of God because of how frequently he saw BS Brand t-shirts I wore at school."
  },
  {
    id: 20,
    name: "Ganza Sabin",
    role: "Chef",
    company: "Kigali Burger Bros",
    image: pic20,
    quote: "Every T-shirt and Sweatshirt from Bs Brand is like a reminder to infuse my work with God’s grace."
  },
];

export { testimonials, type Testimonial };
