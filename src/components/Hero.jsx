import grid from '/assets/grid.png'

export default function Hero(){
    return(
        <div className='hero'>
            <img src={grid} className='hero--grid'/>
            <h1>Online experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts. All without leaving home.</p>
        </div>
    )
}