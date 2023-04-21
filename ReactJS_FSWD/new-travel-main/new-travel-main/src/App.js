import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Herosection from './Components/Herosection';
import Cart from './Components/Cart';
import firstimage from "./Asset/Images/Swami.jpg"
import img2 from "./Asset/Images/2_Mumbai.png"
import img3 from "./Asset/Images/3_Bali.png"
import img4 from "./Asset/Images/4_GreatBarrier.png"
import img5 from "./Asset/Images/5_BiggDaddy.png"
import img6 from "./Asset/Images/6_image.png"
import img7 from "./Asset/Images/7_image.png"
import img8 from "./Asset/Images/8_image.jpg"
import img9 from "./Asset/Images/9_image.png"
import img10 from "./Asset/Images/10_image.png"
import img11 from "./Asset/Images/11_image.png"
import img12 from "./Asset/Images/12_image.png"
import Footer from './Components/Footer';
import Products from './Components/Products';
import Resources from './Components/Resources';
import Blog from './Components/Blog';
import Contact from "./Components/Contact";


function App() {




  const  data=[
    {
        id:1,
        Title:"Shree Swaminarayan Mandir",
        location:"Pune,India",
        image:firstimage,
        fees:'₹500',
        description:"It has 23 Samrans, including 7 giant ones, which are a treat to the eye. There are 109 torans to beautify the Mandir, and 140 carved pillars form the base of the Shree Swaminarayan temple. There are more than 10000 carvings on the temple's walls and pillars, signifying the Indian and Maharashtrian culture at its best."
        
        
    },
    {
        id:2,
        Title:"Gateway of India",
        location:"Mumbai,India",
        image:img2,
        fees:'₹700',
        description:"The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India."
        
    },
    {
        id:3,
        Title:"InterContinental Bali Resort",
        location:"Indonesia",
        image:img3,
        fees:'₹1500',
        description:"Bali is a beautiful island province of Indonesia, located in the westernmost end of the Lesser Sunda Islands, lying between Java to the west and Lombok to the east. It is a popular travel destination known for its stunning beaches, volcanic mountains, rice paddies, lush forests, and unique Hindu culture. "
        
        
    },
    {
        id:4,
        Title:"Great Barrier Reef",
        location:"Australia",
        image:img4,
        fees:'₹900',
        description:"The Great Barrier Reef is the world's largest coral reef system, located in the Coral Sea off the coast of Australia. It is composed of over 2,900 individual reefs and 900 islands."
        
    },
    {
        id:5,
        Title:"Big Daddy Casino",
        location:"Goa,India",
        image:img5,
        fees:'₹400',
        description:"Big Daddy operates out of a 24-year-old refurbished ship that’s split into five levels. On the ground floor is the largest gaming hall, stuffed with roulette tables, electronic stadiums and every gambling activity known to man."
        
    },
    {
        id:6,
        Title:"Keral Tourism",
        location:"Keral,India",
        image:img6,
        fees:'₹300',
        description:"Kerala is a state in the southwestern region of India, known for its diverse culture, natural beauty, and vibrant traditions. Located along the Malabar Coast, Kerala is often referred to as the God's Own Country for its lush green landscapes, pristine beaches, serene backwaters, and scenic hill stations."
        
    },
    {
        id:7,
        Title:"Burj Khalifa",
        location:"Dubai",
        image:img7,
        fees:'₹1300',
        description:"The Burj Khalifa is a skyscraper located in Dubai, United Arab Emirates, and is currently the tallest building in the world, standing at a height of 828 meters (2,716 feet)."
        
    },
    {
        id:8,
        Title:"Dubai Frame",
        location:"Dubai",
        image:img8,
        fees:'₹1500',
        description:"The Dubai Frame is a landmark attraction in Dubai, United Arab Emirates, located in the Zabeel Park neighborhood. It is a 150-meter-high, 93-meter-wide structure in the shape of a frame, resembling a picture frame or window."
        
    },
    {
        id:9,
        Title:"Baros Maldives",
        location:"Maldives",
        image:img9,
        fees:'₹1500',
        description:"Baros Maldives is a luxury resort located in the North Male Atoll of the Maldives, a popular destination for tourists seeking beautiful beaches, turquoise waters, and serene natural surroundings. The resort is situated on a private island and is surrounded by a beautiful coral reef, making it a popular spot for snorkeling and diving enthusiasts."
        
    },
    {
        id:10,
        Title:"Cheval Blanc Randheli",
        location:"Maldives",
        image:img10,
        fees:'₹2000',
        description:"Cheval Blanc Randheli is a luxury resort located in the Noonu Atoll of the Maldives, known for its stunning natural beauty and pristine beaches. The resort is situated on a private island and features 45 villas, each designed to offer guests the ultimate in comfort and luxury."
        
    },
    {
        id:11,
        Title:"Manali",
        location:"Manali,India",
        image:img11,
        fees:'₹500',
        description:"Manali is a popular hill station located in the Indian state of Himachal Pradesh. Situated at an altitude of 2,050 meters above sea level, it is surrounded by snow-capped mountains, beautiful valleys, and lush green forests. Manali is a popular tourist destination, known for its scenic beauty, adventure sports, and cultural attractions.."
        
    },
    {
        id:12,
        Title:"Lion point",
        location:"Lonavala,India",
        image:img12,
        fees:'₹500',
        description:"Lonavla is a scenic hill station located in the Indian state of Maharashtra, about 64 km from Mumbai. It is situated at an altitude of 622 meters above sea level and is surrounded by beautiful valleys, hills, and waterfalls"
        
    },
]





  return (
    <BrowserRouter>
   <Routes>
        <Route path="/" element={[<Navbar />,<Herosection/>,<Cart data={data}/>,<Footer/>]}/>
        <Route path="/home" element={[<Navbar />,<Herosection/>,<Cart data={data}/>,<Footer/>]}/>
          <Route path="products" element={[<Navbar />,<Products data={data}/>,<Footer/>]}/>
          <Route path="resources" element={[<Navbar />,<Resources/>,<Footer/>]}/>
          <Route path="contact" element={[<Navbar />,<Contact/>,<Footer/>]}/>
          <Route path="blog" element={[<Navbar />,<Blog/>,<Footer/>]}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
