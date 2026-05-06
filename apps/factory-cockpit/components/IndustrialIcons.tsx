import type { ReactNode } from 'react'

type IconProps = {
  className?: string
}

type IconBaseProps = IconProps & {
  children: ReactNode
}

function IconBase({ children, className = 'industrial-icon' }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9.5 20v-6h5v6" />
    </IconBase>
  )
}

export function MapIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6.5 8 4l8 2 5-2v13.5L16 20l-8-2-5 2V6.5Z" />
      <path d="M8 4v14" />
      <path d="M16 6v14" />
    </IconBase>
  )
}

export function ListChecksIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m4 6 1.5 1.5L8 5" />
      <path d="M11 6h9" />
      <path d="m4 12 1.5 1.5L8 11" />
      <path d="M11 12h9" />
      <path d="m4 18 1.5 1.5L8 17" />
      <path d="M11 18h9" />
    </IconBase>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </IconBase>
  )
}

export function BoxesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2 4 6l8 4 8-4-8-4Z" />
      <path d="M4 6v8l8 4 8-4V6" />
      <path d="M12 10v8" />
    </IconBase>
  )
}

export function FlaskIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M10 2h4" />
      <path d="M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2" />
      <path d="M8.5 14h7" />
    </IconBase>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </IconBase>
  )
}

export function SettingsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z" />
    </IconBase>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </IconBase>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </IconBase>
  )
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-4.9" />
    </IconBase>
  )
}

export function AlertTriangleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 4 3 20h18L12 4Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </IconBase>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  )
}

export function GaugeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 16a8 8 0 1 1 15 0" />
      <path d="M12 12l4-2" />
      <path d="M12 12v.01" />
    </IconBase>
  )
}

export function FileCodeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
      <path d="M14 2v5h5" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 13 2 2-2 2" />
    </IconBase>
  )
}

export function GitBranchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8" />
      <path d="M18 8v8" />
      <path d="M6 8v8a4 4 0 0 0 4 4h6" />
    </IconBase>
  )
}

export function BotIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 4v4" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9 16h6" />
    </IconBase>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m9 6 6 6-6 6" />
    </IconBase>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </IconBase>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  )
}
