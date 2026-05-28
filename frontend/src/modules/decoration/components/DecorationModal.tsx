type Props = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export function DecorationModal({
  children,
  open,
  onClose
}: Props) {
  if (!open) return null

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center
        justify-center
      "
    >
      <div
        className="
          absolute inset-0
          bg-black/60
          backdrop-blur-sm
        "
        onClick={onClose}
      />

      <div
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
        "
      >
        {children}
      </div>
    </div>
  )
}