import { cn } from '@/utils/style'

interface OverlayProps {
  active: boolean
}

export function Overlay({ active }: OverlayProps) {
  return <div className={cn('fixed inset-0 z-40 h-screen w-screen bg-gray-900/60', active ? 'flex' : 'hidden')}></div>
}
