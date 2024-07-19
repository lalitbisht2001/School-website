import { useEffect, useState } from "react";
import Home from "./Components/Home";
import Counter from "./Pages/Counter/Counter";
import Boy from "./Pages/Client/Boy-box";
import Cource from "./Pages/Expert/Cource";
import product1 from "/product1.png";
import product2 from "/product2.png";
import product3 from "/product3.png";
import Feedback from "./Pages/Feedback/Feedback";
import feed1 from "/feed1.png";
import feed2 from "/feed2.png";
import feed3 from "/feed3.png";
import Teacher from "./Pages/Teacher/Teacher";
import teacher1 from "/teacher1.png";
import teacher2 from "/teacher2.png";
import teacher3 from "/teacher3.png";
import teacher4 from "/teacher4.png";
import Footer from "./Pages/Footer/Footer";
function App() {

  const [count, setCount] = useState(1500);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);
  }, [])

  const counts = [
    {
      total: count,
      des: "Happy Customers",
    },
    {
      total: "150K",
      des: "Monthly Visitors",
    },
    {
      total: "15",
      des: "Counter Worldwide",
    },
    {
      total: "100+",
      des: "Top Partners",
    }
  ];

  const cources = [
    {
      photo: product1,
      type: "Training Courses",
      topic: "Get Quality Education",
      para: `We focus on ergonomics and meeting 
      you where you work.It's only a 
      keystroke away.`,
      price: "$6.48",
      btn: "",
    },
    {
      photo: product2,
      type: "2,769 online courses	",
      topic: "Our Popular Courses",
      para: `We focus on ergonomics and meeting 
      you where you work. It's only a 
      keystroke away.`,
      price: "$6.48",
      btn: "",
    },
    {
      photo: product3,
      type: "Expert instruction",
      topic: "Most Popular Courses",
      para: `We focus on ergonomics and meeting 
      you where you work. It's only a 
      keystroke away.`,
      price: "$6.48",
      btn: "",
    }
  ];

  const feedback = [
    {
      para: `Slate helps you see 
      how many more days 
      you need to work to 
      reach your financial 
      goal for the month 
      and year.`,
      photo: feed1,
      name: "Regina Miles",
      designation: "Designer",
    },
    {
      para: `Slate helps you see 
      how many more days 
      you need to work to 
      reach your financial 
      goal for the month 
      and year.`,
      photo: feed2,
      name: "Rahana",
      designation: "Editior",
    },
    {
      para: `Slate helps you see 
      how many more days 
      you need to work to 
      reach your financial 
      goal for the month 
      and year.`,
      photo: feed3,
      name: "Jonas Will",
      designation: "Artist",
    },
    {
      para: `Slate helps you see 
      how many more days 
      you need to work to 
      reach your financial 
      goal for the month 
      and year.`,
      photo: feed3,
      name: "Andrew Bill",
      designation: "Designer",
    }
  ];

  const Teach = [
    {
      photo: teacher1,
      name : "Julian Jameson",
      profe : "Profession",
    },
    {
      photo: teacher2,
      name : "Julian Jameson",
      profe : "Profession",
    },
    {
      photo: teacher3,
      name : "Julian Jameson",
      profe : "Profession",
    },
    {
      photo: teacher4,
      name : "Julian Jameson",
      profe : "Profession",
    },
  ];
  return (
    <div>
      <Home />
      <Counter counts={counts} />
      <Boy />
      <Cource cources={cources} />
      <Feedback feedback={feedback}/>      
      <Teacher teacher={Teach}/>
      <Footer/>
    </div>
  )
}

export default App;
