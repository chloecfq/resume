import HHomePage from './templete/hbase';


const HomePage = (props) => {
    return (
        // horizontal ? <HHomePage></HHomePage> :
        // <div>
        //     <div className='hidden print:block'><VHomePage></VHomePage></div>
        //     <div className='block print:hidden'><HHomePage></HHomePage></div>
        // </div>
        <HHomePage></HHomePage>
        // <VHomePage></VHomePage>
    )
}


export default HomePage
