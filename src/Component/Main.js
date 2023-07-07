import React, {useState} from 'react'
import InnerPage from './InnerPage'
import { SiRollsroyce, SiMercedes, SiMaserati, SiFerrari, SiAudi, SiBmw, SiBentley, SiLandrover } from "react-icons/si";
import SingleItem from './SingleItem';
function Main() {
    const menus = [
        {
            id : 1,
            icon : <SiRollsroyce/>,
            name : 'Rolls Royce',
            desc : "Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom. Rolls-Royce Motor Cars Limited is the exclusive manufacturer of Rolls-Royce branded motor cars since 2003.",
            bg : 'bg-rr'
        },
        {
            id : 2,
            icon : <SiMercedes/>,
            name : 'Mercedes',
            desc : "Mercedes-Benz commonly referred to as Mercedes, is a German luxury automotive brand headquartered in Stuttgart, Baden-Württemberg, Germany.Mercedes-Benz produces consumer luxury vehicles and commercial vehicles. Its first Mercedes-Benz-badged vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.",
            bg : 'bg-mer'
        },
        {
            id : 3,
            icon : <SiMaserati/>,
            name : 'Maserati',
            desc : "Maserati is an Italian luxury vehicle manufacturer. Established on 1 December 1914, in Bologna, Italy, the company's headquarters are now in Modena, and its emblem is a trident. The company has been owned by Stellantis since 2021. Maserati was initially associated with Ferrari. In May 2014, due to ambitious plans and product launches, Maserati sold a record of over 3,000 cars in one month. This caused them to increase production of the Quattroporte and Ghibli models. In addition to the Ghibli and Quattroporte, Maserati offers the Maserati GranTurismo and the Maserati Levante (the first ever Maserati SUV). Maserati has placed a production output cap at 75,000 vehicles globally.",
            bg : 'bg-mar'
        },
        {
            id : 4,
            icon : <SiFerrari/>,
            name : 'Ferrari',
            desc : "Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.",
            bg : 'bg-fer'
        },
        {
            id : 5,
            icon : <SiAudi/>,
            name : 'Audi',
            desc : "Audi AG , commonly referred to as Audi, is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.",
            bg : 'bg-aud'
        },
        {
            id : 6,
            icon : <SiBmw/>,
            name : 'BMW',
            desc : "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.",
            bg : 'bg-bmw'
        },
        {
            id : 7,
            icon : <SiBentley/>,
            name : 'Bentley',
            desc : "Bentley Motors Limited is a British manufacturer and marketer of luxury cars and SUVs, and a subsidiary of the Volkswagen Group since 1998 and consolidated under VW's premium brand arm Audi since 2022.",
            bg : 'bg-ben'
        },
        {
            id : 8,
            icon : <SiLandrover/>,
            name : 'Landrover',
            desc : "Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover (JLR), since 2008 a subsidiary of India's Tata Motors. JLR currently builds Land Rovers in Brazil, China, India, Slovakia, and the United Kingdom. The Land Rover name was created in 1948 by the Rover Company for a utilitarian 4WD off-roader; yet today Land Rover vehicles comprise solely upmarket and luxury sport utility cars.",
            bg : 'bg-lan'
        },
    ]
    const [req, setReq] = useState(0)
    const [newData, setNewData] = useState({})
    const getItem = (id, req) => {
        setNewData(menus.filter(menu => {
            return menu.id === id
        }))
        setReq(req)
        // return newData
    }
    console.log(newData)
  return (
    <div className='Main'>
        {
        req === 0?
        <h1>Car Brandz</h1>
        :
        <div className="">
            <h1>Selected Brand</h1>
            <div className="BtnCon">
            <button onClick={()=>{setReq(0)}} className='BackBtn'>Back</button>
            </div>
        </div>

        
    }
        {
            req === 0 ?
            <div className="menus">
        {
            menus.map((menu)=>{
                return(
                    <InnerPage id={menu.id} name={menu.name} desc={menu.desc} icon={menu.icon} bg={menu.bg} fun={getItem} />
                    )
                })
        }
        </div>
        :
        // <div className="menus">
                //    {
            newData.map((nd)=>{
                return(
                    <SingleItem data={nd} />
                    )
                })
        }
        {/* </div> */}
        {/* } */}
    </div>
  )
}

export default Main