
export default function SearchBar({originalLink, setOriginalLink, handleShorten, errorMessage}) {
    
    return (
        <div className="absolute w-full max-w-[1440px] px-6 xs:px-10 lg:px-24 
        left-[50%] top-[126%] xs:top-[125%] sm:top-[120%] md:top-[136%] xl:top-[127%] 
        transform -translate-x-1/2 -translate-y-1/2">
            <div className='w-full font-poppins bg-dark-blue bg-sm-shorten sm:bg-shorten bg-cover rounded-lg 
            flex flex-col md:flex-row items-center p-6 xs:p-8 md:p-12 gap-4 relative'>

                <input className={`w-full px-5 py-3 rounded-lg outline-none
                border-2 ${errorMessage == "invalid" && "border-red placeholder:text-red"}`} placeholder='Shorten a link here...' 
                type="url" value={originalLink} onChange={(e) => setOriginalLink(e.target.value)}/>

                {errorMessage == "invalid" && <span className="text-xs text-red italic self-start md:absolute top-[70%] transform md:translate-y-1/2"
                >{errorMessage}</span>}

                <button className='w-full md:max-w-[10rem] 
                px-5 py-3 rounded-lg bg-cyan text-white 
                hover:opacity-75 md:ml-4' onClick={handleShorten}>Shorten It!</button>
            </div>
        </div>
    )
}