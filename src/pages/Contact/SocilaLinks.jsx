import { Linkedin, Github, Twitter } from 'lucide-react'

const SocialLinks = () => {
  return (
    <nav className='social-links'>
      <a
        href='https://linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <Linkedin className='icon' />
      </a>
      <a
        href='https://github.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
      >
        <Github className='icon' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
      >
        <Twitter className='icon' />
      </a>
    </nav>
  )
}

export default SocialLinks
