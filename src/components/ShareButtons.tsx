"use client"

import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = encodeURIComponent(url)
  const shareText = encodeURIComponent(title)

  const twitterHref = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`

  return (
    <div className="mt-3 flex gap-4 text-muted">
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="transition-colors hover:text-mint"
      >
        <FaXTwitter className="h-5 w-5" />
      </a>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="transition-colors hover:text-mint"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
    </div>
  )
}

