interface Props {
    name: string;
    page: string;
    isActive:boolean,
    onTriggerPage: (page:string) => void;
}
const NavButton = ({name, page, isActive, onTriggerPage} : Props) => {
  return (
        <li>
            <a onClick={() => onTriggerPage(page)} className={isActive ? "active" : ""} style={{cursor: "pointer"}}> {name} 
            </a>
        </li>
  )
}

export default NavButton