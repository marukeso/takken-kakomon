import { VFC } from 'react'

export const Loading: VFC = () => {
  return (
    <div className="mx-auto flex h-full items-center justify-center space-x-3">
      <div className="h-2 w-2 animate-ping rounded-full bg-primary"></div>
      <div className="animation-delay-200 h-2 w-2 animate-ping rounded-full bg-primary"></div>
      <div className="animation-delay-400 h-2 w-2 animate-ping rounded-full bg-primary"></div>
    </div>
  )
}
