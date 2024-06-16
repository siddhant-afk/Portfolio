import image from "../assets/self-img.jpeg"

function About(){

    return(
        <section className="about">
             <div className="section-heading">

             <h1 className="text-2xl font-bold"><span>About Me</span></h1> 
             <hr />
             </div>
        
            

            <div className="about-content">
            <img src={image} alt="" />
            <p>I am a skilled software engineer with a passion for creating efficient and innovative solutions. With expertise in a wide range of technologies and frameworks, I strive to deliver high-quality code and contribute to the success of projects.I am a collaborative team player who enjoys working in cross-functional environments, leveraging my strong problem-solving abilities to overcome challenges and achieve goals. I believe in the power of open communication, knowledge sharing, and continuous learning to drive personal and professional growth.
            My technical stack includes: <br /> <br />

            <div className="skills">
             <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                
                
             </ul>
             <ul>
             <li>HTML5/CSS3</li>
                <li>C++</li>
                <li>Java</li>
             </ul>
            </div>
           

            </p>
            </div>
            
        </section>
    )
}

export default About;