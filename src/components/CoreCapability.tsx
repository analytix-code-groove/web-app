import { IconType } from 'react-icons'

interface CoreCapabilityProps {
  icon: IconType
  title: string
  description: string
}

export default function CoreCapability({ icon: Icon, title, description }: CoreCapabilityProps) {
  return (
    <div className="flex items-start space-x-4">
      <Icon aria-hidden="true" className="h-8 w-8 text-mint flex-shrink-0" />
      <div>
        <h3 className="font-medium text-text">{title}</h3>
        <p className="mt-1 text-muted">{description}</p>
      </div>
    </div>
  )
}
