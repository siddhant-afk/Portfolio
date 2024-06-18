import { FaGithub } from "react-icons/fa"
function Card(props){

    return(
         <div className="card">
           <a href={props.url}><FaGithub className="text-3xl github-logo"></FaGithub> <br /></a> 
            <h1 className="text-3xl font-bold">{props.title}</h1> <br />
            <p>{props.description}</p>
         </div>
    )
}

export default Card;