import { useEffect, useState } from 'react';
import HHomePage from './templete/hbase';
import VHomePage from './templete/vbase';


const HomePage = (props) => {

    const [isMobile, setIsMoblie] = useState(true)
    useEffect(() => {
        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            // 当前设备是移动设备
            setIsMoblie(true)
        }
    }, [])

    return (
        // horizontal ? <HHomePage></HHomePage> :
        // <div>
        //     <div className='hidden print:block'><VHomePage></VHomePage></div>
        //     <div className='block print:hidden'><HHomePage></HHomePage></div>
        // </div>
        isMobile ? <VHomePage></VHomePage> : <HHomePage></HHomePage>
        // <VHomePage></VHomePage>
    )
}


export default HomePage
