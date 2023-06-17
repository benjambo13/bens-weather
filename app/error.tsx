'use client'

export default function Error({ error, reset } : { error: Error, reset: () => void}): JSX.Element {
  return (
    <div>
      <p>This ain't loading up: {error.message}</p>
      <button onClick={() => reset()}>Reload</button>
    </div>
  )
}