import { InfoView, SkillView } from '../../components/info-view';
import { WorkingView } from '../../components/working-view';
import dataJson from '../../public/resume/data.json';

const VHomePage = (props: { print?: boolean }) => {
    const print = props.print;
    return (
        <div className='flex justify-center print:mb-0 print:block'>
            {/* <div className='mt-10 max-w-5xl min-h-screen mb-8 print:mb-0'></div> */}
            <div className=' mt-10 sm:max-w-5xl max-w-xl min-h-screen mb-8 print:mb-4'>
                <div className='flex flex-col sm:flex-row mx-8 print:mx-0'>
                    <div className='flex flex-col text-gray-600'>
                        <div className='text-3xl font-light'>{dataJson.name}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.career}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.school}
                            <span id='text' className='ml-3 text-xs'>{dataJson.educationTime}</span>
                        </div>
                    </div>
                    <div className='text-gray-500 mt-4 ml-2 sm:ml-12 print:ml-4 font-light'>{dataJson.baseInfoTitle}</div>
                    <div className='flex-row flex'>
                        <div className='h-20 border-l sm:border-l border-gray-300 mt-4 ml-2'></div>
                        <InfoView infoList={dataJson.baseInfo}></InfoView>
                    </div>
                    <div className='text-gray-500 mt-4 ml-2 sm:ml-12 print:ml-4 font-light'>{dataJson.contactTitle}</div>
                    <div className='flex flex-row'>
                        <div className='h-20 border-l sm:border-l border-gray-300 mt-4 ml-2'></div>
                        <InfoView infoList={dataJson.contactInfo}></InfoView>
                    </div>
                </div>
                <div className='flex flex-col mx-8 print:mx-0 print:block'>
                    <SkillView skill={[dataJson.skill[0]]} horizontal={false}></SkillView>
                    <WorkingView works={dataJson.Works}></WorkingView>
                    <SkillView skill={dataJson.skill.slice(1, dataJson.skill.length)} horizontal={false}></SkillView>
                </div>
            </div>
        </div>
    )
}


export default VHomePage
