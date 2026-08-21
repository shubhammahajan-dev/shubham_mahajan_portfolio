export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full ${className}`}>
      {children}
    </div>
  )
}
