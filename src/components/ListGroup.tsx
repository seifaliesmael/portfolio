import { useState } from "react";

// We want to pass in items as an array and a heading string
// We also want an impure function that handles item selection
// We use TypeScript interfaces for this
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

// Props should be treated as immutable, while State is mutable.

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    // Hook -> built-in react features
    // lets react know that this data can change over time.
    const [selectedIndex, setSelectedIndex] = useState(-1); 
    // arr[0] will be the variable, arr[1] will be the updater function

    return (
        // Denotes opening/closing a fragment
        <>
            <h1> {heading} </h1>
            {items.length == 0 && <p> No item found </p>} {/* If no message found, render message here, if not, proceed downwards. */}
            <ul className="list-group">
                {/* We use map because we don't actually have iteration in jsx. */}
                {/* Each item in a list should have a unique key */}
                {items.map ((item, index) => (
                    <li 
                    key={item} 
                    className={ selectedIndex == index ? 'list-group-item active' : 'list-group-item'} 
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}> {item} </li>
                ))} {/*Essentially a lambda */}
            </ul>
        </>
    );
}

export default ListGroup;

// Left off at 44:57