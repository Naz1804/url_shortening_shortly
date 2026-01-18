import Details from "./components/Details"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Header from "./components/Header"
import Navber from "./components/Navbar"
import shortenLink from './api'
import SearchBar from "./components/SearchBar"
import { useState } from "react"


function App() {
    const [originalLink, setOriginalLink] = useState('')
    const [links, setLinks] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const handleShorten = async () => {
        try {
            const result = await shortenLink(originalLink)
            const newLink = {
                original: originalLink,
                shortened: result.shortUrl,
                shortCode: result.shortCode,
                isCopied: false
            }
            setLinks(prev => [...prev, newLink])
            setOriginalLink('')
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('invalid')
        }
    }

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link.shortened)
        .then(() => {
            const updatedLinks = links.map((l) => {
              if (l.shortened === link.shortened) {
                return { ...l, isCopied: true };
              }
              return l;
            });
            setLinks(updatedLinks);
        })
    };

    return (
        <div className="w-full h-full pt-12">
            <div className="max-w-[1440px] mx-auto px-6 xs:px-10 lg:px-24 relative">
                <Navber />
                <Header originalLink={originalLink} setOriginalLink={setOriginalLink} handleShorten={handleShorten} errorMessage={errorMessage} />
                <SearchBar originalLink={originalLink} setOriginalLink={setOriginalLink} handleShorten={handleShorten} errorMessage={errorMessage}/>
            </div>
            <div className="bg-light-gray mt-[8.5rem]" id="feature">
                <Details links={links} copyToClipboard={copyToClipboard}/>
            </div>
            <div className="bg-dark-blue bg-sm-boost sm:bg-boost bg-cover bg-no-repeat" id="price">
                <GetStarted />
            </div>
            <div className="bg-black" id="resource">
                <Footer />
            </div>
        </div>
    )
}

export default App