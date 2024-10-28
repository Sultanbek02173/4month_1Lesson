
const Cancel = (props) => {
    const {setNum} = props
    const cancel = () => {
        setNum(0)
    }
    return (
        <div>
           <button onClick={cancel}>Cancel</button> 
        </div>
    );
}

export default Cancel;
