import { useState } from "react";
import SidebarButton from "./SidebarButton";
function Experience() {


    const [company,selectCompany] = useState("Vivadiant");
    
    function handleClick(company){
        console.log(company);
        selectCompany(company);
    

    }

    function handleSelect(c){
        console.log("I'm a fucking idiot"+c)
    }

    const content = {
        "Vivadiant" : {   
            company : "Vivadiant Private Limited",
            title : "Data Engineer Intern",
            startDate : "June 2023",
            endDate : "August 2023",
            description : ["I interned as a Data Engineer at Vivadiant, a startup where I got the opportunity to work with the founder’s team and hold the unique responsibility of developing the company’s product.",
               "Scraped financial data from various sources and making financial models using this data.",
               "Contributed to the development of Vivadiant’s data infrastructure and technology stack.",
               "Developed APIs using the Django REST Framework."

            ],
        },
        "King Faisal University" :{   
            company : "King Faisal University",
            title : "Research Intern",
            startDate : "January 2023",
            endDate : "April 2024",
            description : ["Spearheaded a groundbreaking research project in collaboration with esteemed university peers, faculty members, and an internationally renowned professor, resulting in significant contributions to the field.",
                "Expertly handled a massive dataset comprising over 40,000 intricate crack images, showcasing exceptional data management and analytical skills.",
                "Demonstrated unparalleled proficiency in building and training cutting-edge models for the precise detection and classification of crack severity, achieving remarkable accuracy rates surpassing 99%.",
                "Pioneered the development of custom models that have not only proven highly effective but have also set a new standard in the domain of crack severity analysis."

            ],
        },
    }

    return (
        <div className="experience">
            <div className="experience-heading">
                <hr />
                <h1 className="text-2xl font-bold text-center">Where I've worked</h1>
                <hr />

            </div>

            <div className="list-group">
                <ul className="font-bold sidebar">
                    <SidebarButton isSelected = {company === "Vivadiant"}  onClick={() =>handleClick("Vivadiant")} >Vivadiant</SidebarButton>
                    <SidebarButton isSelected = {company === "King Faisal University"} onClick={() =>handleClick("King Faisal University")}>King Faisal University</SidebarButton>
                
                </ul>

                <div className="exp-content">
                    <h1 className="text-xl font-bold">{content[company].title}<span> @ {content[company].company}</span></h1>

                    <ul>
                    {content[company].description.map(content =>{
                        return <li>{content}</li>
                    })}
                    </ul>
                  
                </div>
            </div>


        </div>
    )
}

export default Experience;