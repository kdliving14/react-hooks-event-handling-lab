// Code Keypad Component Here
function handleChange(event)
{
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div><input type="password" 
                    id="keypad"
                    onChange={handleChange}/>
        </div>
    )
}

export default Keypad;