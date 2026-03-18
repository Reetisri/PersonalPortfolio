export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <div className="mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-violet-300" />
      {subtitle ? <p className="mt-4 max-w-2xl text-violet-300/90">{subtitle}</p> : null}
    </div>
  )
}

