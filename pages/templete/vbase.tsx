import { InfoView, SkillView } from '../../components/info-view';
import { WorkingView } from '../../components/working-view';
import dataJson from '../../public/resume/data.json';

const VHomePage = (props: { print?: boolean }) => {
    return (
        <div className='flex flex-col max-w-screen w-screen sm:max-w-5xl sm:justify-center align-center items-start print:mb-0 print:block mx-2'>
            {/* <div className='mt-10 max-w-5xl min-h-screen mb-8 print:mb-0'></div> */}
            <div className='sm:max-w-5xl max-w-screen flex flex-col min-h-screen my-8 mx-4 sm:m-8 print:mb-4'>
                <div className='flex flex-col sm:flex-row sm:mx-8 print:mx-4'>
                    <div className='flex flex-col text-gray-600 ml-4 sm:ml-0'>
                        <div className='text-3xl font-light'>{dataJson.name}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.career}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.school}
                            <span id='text' className='ml-3 text-xs'>{dataJson.educationTime}</span>
                        </div>
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                        <div className='text-gray-500 mt-4 ml-4 sm:ml-14 font-light print:ml-4'>{dataJson.baseInfoTitle}</div>
                        <div className='flex flex-row'>
                            <div className='h-28 border-r border-gray-300 mt-4 ml-4'></div>
                            <InfoView infoList={dataJson.baseInfo}></InfoView>
                        </div>
                        <div className='text-gray-500 mt-4 ml-4 sm:ml-14 print:ml-4 font-light'>{dataJson.contactTitle}</div>
                        <div className='flex flex-row'>
                            <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                            <InfoView infoList={dataJson.contactInfo}></InfoView>
                        </div>
                    </div>
                </div>
                <div className='sm:mx-8 mx-2 print:mx-0 print:block'>
                    <SkillView skill={[dataJson.skill[0]]} horizontal={false}></SkillView>
                    <WorkingView works={dataJson.Works}></WorkingView>
                    <SkillView skill={dataJson.skill.slice(1, dataJson.skill.length)} horizontal={false}></SkillView>
                </div>
            </div>
        </div>
    )
}


export default VHomePage
