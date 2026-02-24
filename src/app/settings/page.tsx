import type { Metadata } from 'next'
import SettingsClient from './SettingsClient'

export const metadata: Metadata = {
  title: 'Settings',
  description: 'User settings',
  robots: { index: false },
}

export default function SettingsPage() {
  return <SettingsClient />
}

