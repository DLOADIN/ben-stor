import { StaticImageData } from 'next/image';
import image1 from '@/PICS/DGT_6785.jpg';
import image2 from '@/PICS/DGT_6547.jpg';
import image3 from '@/PICS/DGT_6752.jpg';
import image4 from '@/PICS/DGT_6563.jpg';
import image5 from '@/PICS/DGT_6595.jpg';
import image6 from '@/PICS/DGT_6634.jpg';
import image7 from '@/PICS/DGT_6642.jpg';
import image8 from '@/PICS/DGT_6665.jpg';
import image9 from '@/PICS/DGT_6687.jpg';
import image10 from '@/PICS/DGT_6716.jpg';
import image11 from '@/PICS/DGT_6760.jpg';
import image13 from '@/PICS/DGT_6756.jpg';
import image15 from '@/PICS/TAKI9572.jpg';
import image16 from '@/PICS/TAKI9585.jpg';
import image17 from '@/PICS/TAKI9680.jpg';
import image18 from '@/PICS/TAKI9606.jpg';
import image19 from '@/PICS/TAKI9610.jpg';
import image20 from '@/PICS/DGT_677.jpg';
import image21 from '@/PICS/TAKI9589.jpg';
import image22 from '@/PICS/TAKI9596.jpg';
import image23 from '@/PICS/TAKI9599.jpg';

export interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
  variants?: Array<{
    role: string;
    image: string | StaticImageData;
  }>;
}

export const teamMembers: TeamMember[] = [
  {
    name: "BS BLACK HOODIES",
    role: "Unisex",
    image: image2,
    variants: [
      {
        role: "Unisex",
        image: image3
      },
      {
        role: "Unisex",
        image: image10
      }
    ]
  },
  {
    name: "BS WHITE HOODIES",
    role: "Unisex",
    image: image16,
    variants: [
      {
        role: "Unisex",
        image: image21
      }
    ]
  },
  {
    name: "BS WHITE POLO SHIRTS",
    role: "Unisex",
    image: image9,
    variants: [
      {
        role: "Unisex",
        image: image19
      },
      {
        role: "Unisex",
        image: image23
      },
      {
        role: "Unisex",
        image: image15
      }
    ]
  },
  {
    name: "BS OVERSIZED STREET SHIRTS",
    role: "Unisex",
    image: image4,
    variants: [
      {
        role: "Unisex",
        image: image7
      }
    ]
  },
  {
    name: "BS SHORT SLEEVES U NECK",
    role: "Women",
    image: image8,
    variants: [
      {
        role: "Women",
        image: image11
      }
    ]
  },
  {
    name: "BS BLACK RW-MADE INSPIRED SHIRT",
    role: "Male",
    image: image17,
    variants: [
      {
        role: "Male",
        image: image22
      }
    ]
  },
  {
    name: "BS TURTLENECK/ ROLL NECK",
    role: "Female",
    image: image18,
    variants: [
      {
        role: "Female",
        image: image20
      }
    ]
  },
  {
    name: "BS SWEATSHIRTS/ PULLOVERS",
    role: "Unisex",
    image: image1,
    variants: [
      {
      role: "Unisex",
      image: image5
    }
    ]
  },
  {
    name: "BS T-SHIRTS",
    role: "Unisex",
    image: image6
  },
  {
    name: "BS ALL COLOR LONG SKIRTS",
    role: "Women",
    image: image13
  },
];