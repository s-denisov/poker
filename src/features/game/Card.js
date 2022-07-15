export function Card(props) {
    let cardColor = ["hearts", "diamonds"].includes(props.suit) ? "red" : "black";
    if (props.faceDown) {
        return <img width={100} height={140} src="card-back.png" alt="face down card"/>
    }
    return (
        <div style={{borderStyle: "solid", borderWidth: 1, borderColor: "black", width: 100, height: 140, padding: 10, fontSize: 50, boxSizing: "border-box", position: "relative", fontWeight: "bold", color: cardColor}}>
            {props.number}
            <img width={50} height={50} src={props.suit + ".png"} alt={props.suit} style={{position: "absolute", bottom: 10, right: 10}} />
        </div>
    )
}