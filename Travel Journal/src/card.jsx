import divider from './assets/divider.png'

function Card(props) {
    return(
<div className='card'>
    <div className='card--flex'>
        <div className='card--innerflex'>
            <img src={`./${props.imageUrl}`} alt='photo' className='card--img' />
        </div>
        <div className='card--innerflex'>
            <div className='card--locationbox'>
                <h4>📍 {props.location}</h4>
                <h1 className='card--title'>{props.title}</h1>
            </div>
            <p className='card--description'>{props.description}</p>
            <h3 className='card--plus'>👉 {props.plus}</h3>
        </div>
    </div>
    <div className='divider--box'>
        <img src={divider} alt='divider' className='divider' />
    </div>
</div>
    )
}

export default Card