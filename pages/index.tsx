import { env } from 'process';
import HHomePage from './templete/hbase';


const HomePage = (props) => {
    const horizontal = env.horizontal
    return (
        // horizontal ? <HHomePage></HHomePage> :
        // <div>
        //     <div className='hidden print:block'><VHomePage></VHomePage></div>
        //     <div className='block print:hidden'><HHomePage></HHomePage></div>
        // </div>
        <HHomePage></HHomePage>
    )
}


export default HomePage
