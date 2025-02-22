import Bottombar from '../Bottombar';
import { Outlet } from 'react-router-dom';
import './index.scss'


const Layout = () => {
    return (<>
    
        <Outlet />
        <Bottombar />
    </>
        
    )

}

export default Layout;