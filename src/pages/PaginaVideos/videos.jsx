import './Videos.css'

const Videos = () => {
  const videos = [
    {
      src: 'https://v1.ecartelera.com/video/15200/15299.mp4',
      title: 'Goku vs Vegeta Maligno'
    },
    {
      src: 'https://v1.ecartelera.com/video/15200/15272.mp4',
      title: 'Goku contra Buu pequeño'
    },
    {
      src: 'https://v1.ecartelera.com/video/15200/15270.mp4',
      title: 'Gohan vs Cell'
    },
    {
      src: 'https://v1.ecartelera.com/video/15200/15268.mp4',
      title: 'Goku contra Vegeta'
    },
    {
      src: 'https://v1.ecartelera.com/video/15200/15297.mp4',
      title: 'Estalla el duelo'
    },
    {
      src: 'https://v1.ecartelera.com/video/15200/15273.mp4',
      title: 'Goku vs Friezzer'
    },
    {
      src: 'https://v1.ecartelera.com/video/600/680.mp4',
      title: 'Trailer película Bola de Dragón'
    }
  ]

  return (
    <div className='videos-container'>
      <h1>🎥 Videos Explicativos</h1>
      <p>Explora estos videos sobre Dragon Ball:</p>
      <div className='video-list'>
        {videos.map((video, index) => (
          <div key={index} className='video-item'>
            <iframe
              src={video.src}
              title={video.title}
              allowFullScreen
            ></iframe>
            <p className='video-title'>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
