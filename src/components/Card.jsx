import image from '../assets/katie-zeferes.png'
import star from '../assets/star.png'

export default function Card(){
    return (
        <div className='card'>
            <img src={image} className='card--image'/>
            <div className='card--ratingContainer'>
                <img src={star} className='card--star'/>
                <p>5.0</p>
                <p>(6)</p>
                <p>USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}