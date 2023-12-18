/**
 * The Hero component serves as the introductory section for the application.
 * It comprises a header structure with logo and a GitHub button.
 * Utilizing flexbox for layout arrangement, this component is responsive and adjusts well across various screen sizes.
 * 
 * Additionally, a descriptive subheading ('desc') the purpose of the application—
 * to simplify reading by providing clear and concise summaries of lengthy articles.
 * 
 */


export default function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <div className='w-28 object-contain logo'> SummarAI </div>

      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/Stephenice/AI_Articles_Summarize", "_blank")
        }
        className='black_btn'
      >
        GitHub
      </button>
    </nav>

    <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden' />
      <span className='blues_gradient '>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
      Simplify your reading with Summize, an open-source article summarizer
      that transforms lengthy articles into clear and concise summaries
    </h2>
  </header>
  )
}
