import { IconType } from 'react-icons'

interface CoreCapabilityProps {
  icon: IconType
  title: string
  description: string
}

export default function CoreCapability({
  icon: Icon,
  title,
  description,
}: CoreCapabilityProps) {
  return (
    <div className="group rounded-xl2 border border-stroke/70 bg-surface p-6 text-center shadow-soft transition hover:border-mint/60 hover:bg-surface/80">
      <Icon aria-hidden="true" className="mx-auto h-10 w-10 text-mint" />
      <h3 className="mt-4 font-medium text-text">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  )
}
