import { env } from 'process';
import VHomePage from './templete/vbase';


const HomePage = (props) => {
    const horizontal = env.horizontal
    return (
        // horizontal ? <HHomePage></HHomePage> :
        <VHomePage></VHomePage>
    )
}


export default HomePage
