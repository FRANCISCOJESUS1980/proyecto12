import './Videos.css'

const Videos = () => {
  return (
    <div className='videos-container'>
      <h1>🎥 Videos Explicativos</h1>
      <p>Explora estos videos sobre Dragon Ball:</p>
      <div className='video-list'>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15299.mp4'
          title='Goku vs Vegeta Maligno'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15272.mp4'
          title='Goku contra Buu pequeño'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15270.mp4'
          title='Gohan vs Cell'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15268.mp4'
          title='Goku contra Vegeta'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15297.mp4'
          title='Estalla el duelo'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/15200/15273.mp4'
          title='Goku vs Friezzer'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://v1.ecartelera.com/video/600/680.mp4'
          title='Trailer pelicula Bola de Dragon'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Videos
