function Dice(props) {

    const lockedDice = {
        backgroundColor: props.isHeld ? '#7895B2' : '#E8DFCA',
        color: props.isHeld ? '#E8DFCA' : '#7895B2',
        boxShadow: props.isHeld ? 
        '#AEBDCA25 0px 50px 100px -20px, #AEBDCA30 0px 30px 60px -30px, #AEBDCA35 0px -2px 6px 0px inset' :
        '#7895b225 0px 50px 100px -20px, #7895b230 0px 30px 60px -30px, #7895b235 0px -2px 6px 0px inset'
      }

    
    return(
    <div className="dice" style={lockedDice} onClick={props.onClick}>
        <h2 className="dice--no">{props.number}</h2>
    </div>
)}

export default Dice