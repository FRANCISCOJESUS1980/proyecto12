/*import './Loader.css'

export default function DragonBallLoader() {
  return (
    <div className='db-loader-container'>
      <div className='goku-container'>
        <div className='goku'>
          <div className='hair-container'>
            <div className='hair-spike'></div>
            <div className='hair-spike'></div>
            <div className='hair-spike'></div>
            <div className='hair-spike'></div>
            <div className='hair-spike'></div>
            <div className='hair-back'></div>
          </div>

          <div className='face'>
            <div className='eyes'></div>
            <div className='mouth'></div>
          </div>

          <div className='body'>
            <div className='gi-top'>
              <div className='gi-symbol'>悟</div>
            </div>
            <div className='belt'></div>
            <div className='gi-bottom'></div>
          </div>

          <div className='arms'>
            <div className='arm-left'></div>
            <div className='arm-right'></div>
            <div className='hands'>
              <div className='hand-left'></div>
              <div className='hand-right'></div>
            </div>
          </div>

          <div className='legs'>
            <div className='leg-left'></div>
            <div className='leg-right'></div>
          </div>
        </div>
      </div>

      <div className='kamehameha-effects'>
        <div className='energy-charge'></div>
        <div className='energy-ball'></div>
        <div className='energy-beam'>
          <div className='beam-core'></div>
          <div className='beam-pulse'></div>
        </div>
        <div className='energy-particles'></div>
      </div>

      <div className='aura-container'>
        <div className='aura-inner'></div>
        <div className='aura-outer'></div>
        <div className='aura-sparks'></div>
      </div>
    </div>
  )
}*/
import loaderGif from '../../../public/assets/imagenes/goku.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader-container'>
      <img src={loaderGif} alt='Cargando...' className='loader-gif' />
    </div>
  )
}

export default Loader
