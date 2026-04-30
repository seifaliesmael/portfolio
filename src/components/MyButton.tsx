interface Props {
    content: string;
    id: number;
    onButtonClick?: (id: number) => void;
}
const MyButton = ({content, id, onButtonClick} : Props) => {
  return (
    <button type="button" className="btn btn-primary"
    onClick={() => onButtonClick?.(id)}
    > {content} </button>
  )
}

export default MyButton