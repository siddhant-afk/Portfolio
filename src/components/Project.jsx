import Card from "./Card";



function Project() {

    const projects = [
        {
            title: "Crack Detection",
            description: "A research project that involves training a deep learning model (CNN) to detect cracks in concrete surfaces.",
            url : "https://github.com/siddhant-afk/Crack-Detection"
        },
        {
            title: "Bulletin Feed",
            description: "A personalized news feed application that recommends articles based on user preference and location.",
            url : "https://github.com/siddhant-afk/Bulletin-Feed"
        },

        {
            title: "Autism Detection",
            description: "This project aims to explore the potential and feasibility of predicting whether a person is suffering from autism spectrum disorder (ASD).",
            url : "https://github.com/siddhant-afk/Autism-Detection"
        },
      
    ]


    return (
        <section className="projects">
            <div className="projects-heading">
                <hr />
                <h1 className="text-center text-2xl font-bold ">Some things I've built</h1>
                <hr />
            </div>

            <div className="project-display">
                {projects.map(project => {

                    return <Card title = {project.title} description = {project.description}></Card>

                })}


            </div>

        </section>
    )
}

export default Project;