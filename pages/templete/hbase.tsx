import { InfoView, SkillView, TagsView } from '../../components/info-view';
import { WorkingView } from '../../components/working-view';
import dataJson from '../../public/resume/data.json';

const HHomePage = (props) => {
    return (
        <div className='flex justify-center print:mb-0 print:block'>
            <div className='max-w-screen min-h-screen m-12 print:mb-4 print:mx-8 print:mt-4'>
                <div className='flex flex-row print:flex-col print:mx-0'>
                    <div className='flex flex-col text-gray-600'>
                        <div className='text-3xl font-light'>{dataJson.name}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.career}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.school}
                            <span id='text' className='ml-3 text-xs'>{dataJson.educationTime}</span>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='text-gray-500 mt-4 ml-14 font-light print:ml-0'>{dataJson.baseInfoTitle}</div>
                        <div className='flex flex-row'>
                            <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                            <InfoView infoList={dataJson.baseInfo}></InfoView>
                        </div>
                        <div className='text-gray-500 mt-4 ml-14 font-light'>{dataJson.contactTitle}</div>
                        <div className='flex flex-row'>
                            <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                            <InfoView infoList={dataJson.contactInfo}></InfoView>
                        </div>
                        <div className='print:hidden'><TagsView tags={dataJson.tags}></TagsView></div>
                    </div>
                </div>
                <div className='print:hidden flex flex-row print:flex-col print:mx-0'>
                    <SkillView skill={dataJson.skill} horizontal={true}></SkillView>
                    <div className='flex w-1/2 print:w-full print:block'>
                        <WorkingView works={dataJson.Works}></WorkingView>
                    </div>
                </div>
                <div className='hidden mx-8 print:mx-0 print:block'>
                    <SkillView skill={[dataJson.skill[0]]} horizontal={false}></SkillView>
                    <WorkingView works={dataJson.Works}></WorkingView>
                    <SkillView skill={dataJson.skill.slice(1, dataJson.skill.length)} horizontal={false}></SkillView>
                </div>
            </div>
        </div>
    )
}


export default HHomePage