"use client"

interface ErrorPageProps {
    error:Error;
    reset:()=>void;
}

export default function ErrorPage({
    error,
    reset
}:ErrorPageProps) {
  return (
    <div>
        <h1>An error occured</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Retry</button>
    </div>
  )
}
