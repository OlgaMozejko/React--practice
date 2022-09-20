import starphoto from './assets/star.png'


function Card(props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./${props.coverImg}`} alt='photo' className='photo--card' />
            <div className='card--flexbox'>
                <img src={starphoto} alt='stars' className='card--stars' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.rate_howmany}) ⁕  </span>
                <span className='gray'> {props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>from {props.price}€</span> / person</p>
        </div>
    )
}

export default Card