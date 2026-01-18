
export default function List({links, copyToClipboard}) {
    const truncateLink = (link) => {
        const maxLength = 25
        if (link.length <= maxLength) {
          return link;
        }
        return link.substring(0, maxLength) + '....';
    }
   
    return (
        <div className="font-poppins mb-16">
            {links.map((link, index) => (
                <div key={index} className="w-full flex flex-col md:flex-row items-start md:items-center bg-white rounded-md mb-4 gap-3">
                       <p className="mx-3 md:mx-6 mt-3 md:mb-3 text-xs xs:text-base">{truncateLink(link.original)}</p>

                   <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto px-3 md:px-6 py-3 gap-3 md:ml-auto 
                   border-t-2 border-light-gray md:border-0">
                       <p className="text-cyan text-sm xs:text-base">{link.shortened}</p>
                       <button onClick={() => copyToClipboard(link)} 
                       className={`${link.isCopied ? "bg-dark-blue" : "bg-cyan"} text-white px-6 py-2 rounded-lg text-sm md:ml-4 hover:opacity-75`}
                       >{link.isCopied ? "Copied!" : "Copy"}</button>

                       <a href={`https://shorturl-api-w0c5.onrender.com/api/stats/${link.shortCode}`}
                       target="_blank" rel="noopener noreferrer" className="text-dark-blue text-xs underline hover:opacity-75">
                          View Stats
                       </a>
                   </div>
                </div>
            ))}
        </div>
    )
}