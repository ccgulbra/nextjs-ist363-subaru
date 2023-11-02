import { Fragment} from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return <Fragment>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
}

export default Layout; 