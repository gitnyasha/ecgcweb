import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return(
        <>
            <Head>
                <title>ECGC</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta 
                    name="description" 
                    content="ECGC"
                />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="ECGC"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="ECGC"
                ></meta>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;