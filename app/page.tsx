import Form from "./form";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="h-screen flex items-center bg-landing-clouds h-screen pt-20 bg-cover">
        <div className='flex flex-col mx-auto '>
          <h1 className='text-center pb-12 text-7xl'>BEN'S WEATHER</h1>
          <Form />
        </div>
      </div>
    </>
  )
}
