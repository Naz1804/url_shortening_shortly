import person from '../assets/illustration-working.svg'

export default function Header() {
    return (
        <main className="font-poppins flex flex-col-reverse md:flex-row items-center mt-8 md:mt-16">
            <div className='md:mr-auto max-w-[450px] text-center md:text-left mt-8 md:mt-0'>
                <h1 className='text-4xl xs:text-5xl md:text-6xl/12 font-bold'>More than just shorter links</h1>
                <p className='text-sm xs:text-base md:text-lg font-medium mt-2 text-grayish-violet'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='mt-4 md:mt-8 px-9 py-3 rounded-3xl bg-cyan text-white hover:opacity-75'>Get Started</button>
            </div>
            <div className='flex justify-center md:justify-end'>
                <img src={person} alt='person-working' className='object-contain w-full sm:w-[85%]'/>
            </div>
        </main>
    )
}