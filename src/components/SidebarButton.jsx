function SidebarButton(props){

 
    return(
        <li className={props.isSelected? "active-exp" : undefined} onClick={props.onClick} >{props.children}</li>
    )
}

export default SidebarButton;