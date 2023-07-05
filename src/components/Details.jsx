import info from "../info"
import List from "./List"

export default function Details({links, copyToClipboard}) {
    return (
        <section className="font-poppins pt-[8rem] pb-24 max-w-[1440px] mx-auto px-6 xs:px-10 lg:px-24">
            <List links={links} copyToClipboard={copyToClipboard} />

            <div className="mx-auto max-w-[25rem] text-center">
                <h3 className="font-bold text-3xl">Advanced Statistics</h3>
                <p className="font-medium text-sm text-grayish-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className="flex flex-col sm:flex-row mt-16 gap-8 sm:gap-6 justify-center relative">
            <div className="z-[0] bg-cyan w-2 sm:w-[50%] h-1/2 sm:h-2 md:h-3 absolute left-1/2 sm:top-[50%] -translate-x-1/2"></div>
                {info.map(item => (
                    <div key={item.id} className={`bg-white rounded-lg p-6 sm:w-[330px] pt-12 relative ${item.name} h-full`}>
                        <div className="w-[4rem] h-[4rem] bg-dark-blue rounded-[50%] flex justify-center items-center 
                        absolute top-0 left-1/2 sm:left-[26%] lg:left-[16%] transform -translate-x-1/2 -translate-y-1/2">
                            <img src={item.image} alt="image" className="object-contain p-4"/>
                        </div>
                        <h5 className="font-bold text-base md:text-lg text-center sm:text-left">{item.title}</h5>
                        <p className="font-medium text-xs md:text-sm text-grayish-violet text-center sm:text-left">{item.paragraph}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}