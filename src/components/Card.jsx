import star from '../assets/star.png'

export default function Card(props){

    return (
        <div className='card'>
            <img src={props.img} className='card--image'/>
            <div className='card--ratingContainer'>
                <img src={star} className='card--star'/>
                <p>{props.rating.toFixed(1)}</p>
                <p className='grey'>({props.reviewCount})</p>
                <p className='grey'>{props.country}</p>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}