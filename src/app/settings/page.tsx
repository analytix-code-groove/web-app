import type { Metadata } from 'next'
import SettingsClient from './SettingsClient'

export const metadata: Metadata = {
  title: 'Settings | Analytix Code Groove',
  description: 'User settings',
}

export default function SettingsPage() {
  return <SettingsClient />
}

