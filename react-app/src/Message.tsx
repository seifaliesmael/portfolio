// PascalCase is recommended for React
function Message () {
    
    const name = 'Seif';

    if (name)
        return <h1> Hello {name} </h1>;
    else
        // This is JSX syntax (JS XML) which gets compiled into JS at runtime
        return <h1> Hello World </h1>; 
}

export default Message; // makes the function public so we can access it outside