import star from '/assets/star.png'

export default function Card(props){

    let badgeText

    if (props.openSpots == 0){
        badgeText = 'SOLD OUT'
    } else if (props.location.toLowerCase() == 'online'){
        badgeText = 'ONLINE'
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={'/assets/' + props.coverImg} className='card--image'/>
            <div className='card--ratingContainer'>
                <img src={star} className='card--star'/>
                <p>{props.stats.rating.toFixed(1)}</p>
                <p className='grey'>({props.stats.reviewCount})</p>
                <p className='grey'>{props.location}</p>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}