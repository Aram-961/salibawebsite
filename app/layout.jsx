import Nav from "@/components/Nav";
import Footer from "@components/Footer";

import '@/styles/globals.css'

export const metadata = {
    title: 'Saliba Dairies',
    description: 'No Description yet'
}


const RootLayout = ({ children }) => {
    return (
        <html lang='eng'>
            <body>
                <div>
                    <div>
                        <Nav />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}

export default RootLayout;