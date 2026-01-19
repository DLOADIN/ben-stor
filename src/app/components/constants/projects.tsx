import car1 from "@/assets/IMG-20241007-WA0015.jpg"
import car2 from "@/assets/IMG-20241007-WA0018.jpg"
import car3 from "@/assets/IMG-20241007-WA0019.jpg"
import car4 from "@/assets/IMG-20241007-WA0040.jpg"
import car5 from "@/assets/IMG-20241007-WA0042.jpg"
import car6 from "@/assets/IMG-20241007-WA0043.jpg"

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export const services: ProjectCardProps[] = [
  {
    title: "HYUNDAI SANTA FE",
    description: "This ain't your grandma's minivan. The Santa Fe is sleek, spacious, and ready to conquer any Rwandan road, from the bustling city streets to the rugged savannah. Buckle up, buttercup, it's gonna be a ride.",
    image: car1
  },
  {
    title: "HYUNDAI SONATA",
    description: "Smooth operator, that's the Sonata. This sedan glides like a dream, perfect for cruising along Lake Kivu or impressing your date with a touch of sophistication. Just don't blame us if you get lost in the scenery.",
    image: car2,
  },
  {
    title: "LAND CRUISER",
    description: "The Land Cruiser: Built to last longer than your ex's grudges. This beast can handle anything Rwanda throws at it – mud, mountains, and maybe even a rogue gorilla. Go ahead, explore the untamed wilderness in style.",
    image: car3,
  },
  {
    title: "TOYOTA PRADO",
    description: "Need a car that's as rugged as you are? The Prado is your adventure buddy. Conquer those off-road trails and leave the pavement behind. Just remember to pack some snacks – the views might keep you out longer than expected.",
    image: car4,
  },
  {
    title: "TOYOTA COASTER",
    description: "Rollin' in style with the Toyota Coaster. This spacious minibus is perfect for group adventures, family reunions, or that epic road trip you've been dreaming of. Just don't forget to bring the party playlist.", 
    image: car5,
  },
  {
    title: "TOYOTA HIACE",
    description: "The Toyota Hiace: Work hard, play harder. This reliable workhorse is ready for anything, from transporting your crew to hauling your gear. Just don't expect it to win any beauty contests (unless you're into rugged charm).",
    image: car6,
  },];
