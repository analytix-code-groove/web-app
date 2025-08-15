import { IconType } from 'react-icons'

interface Step {
  icon: IconType
  title: string
  description: string
}

interface StepTimelineProps {
  steps: Step[]
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <ol className="relative border-l border-stroke/50 pl-6 space-y-8">
      {steps.map(step => {
        const Icon = step.icon
        return (
          <li key={step.title} className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-mint text-bg">
              <Icon className="h-3 w-3" aria-hidden="true" />
            </span>
            <h3 className="font-medium text-text">{step.title}</h3>
            <p className="mt-1 text-sm text-muted">{step.description}</p>
          </li>
        )
      })}
    </ol>
  )
}
