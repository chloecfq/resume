import { InfoView, SkillView, TagsView } from '../../components/info-view';
import { WorkingView } from '../../components/working-view';
import dataJson from '../../public/resume/data.json';

const HHomePage = (props) => {
    return (
        <div className='flex justify-center bg-white print:mb-0 print:block font-black'>
            <div className='max-w-screen min-h-screen my-12 mx-24 print:mb-4 print:mx-8 print:mt-4'>
                <div className='flex lg:flex-row flex-col print:flex-col print:mx-0'>
                    <div className='flex flex-col text-gray-700'>
                        <div className='text-3xl font-light'>{dataJson.name}</div>
                        <div className='text-sm font-semibold text-blue-900 mt-2'>{dataJson.career}</div>
                        <div className='text-sm font-semibold mt-2'>{dataJson.school}
                            <span id='text' className='ml-3 text-xs'>{dataJson.educationTime}</span>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col'>
                        <div className='flex flex-row'>
                            <div className='text-gray-600 mt-4 md:ml-14 ml-2 font-light print:ml-0'>{dataJson.baseInfoTitle}</div>
                            <div className='flex flex-row'>
                                <div className='h-28 border-r border-gray-300 mt-4 ml-4'></div>
                                <InfoView infoList={dataJson.baseInfo}></InfoView>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-gray-600 mt-4 md:ml-14 ml-2 font-light'>{dataJson.contactTitle}</div>
                            <div className='flex flex-row'>
                                <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                                <InfoView infoList={dataJson.contactInfo}></InfoView>
                            </div>
                        </div>
                        <div className='print:hidden hidden xl:block'><TagsView tags={dataJson.tags}></TagsView></div>
                    </div>
                </div>
                <div className='print:hidden flex lg:flex-row flex-col print:flex-col print:mx-0'>
                    <div className='lg:block hidden lg:w-1/2 w-full'>                   
                         <SkillView skill={dataJson.skill} horizontal={true} tags={dataJson.codingSkills}></SkillView>
                    </div>
                    <div className='flex lg:w-1/2 w-full print:w-full'>
                        <WorkingView works={dataJson.works}></WorkingView>
                    </div>
                    <div className='lg:hidden block lg:w-1/2 w-full'>
                        <SkillView skill={dataJson.skill} horizontal={true} tags={dataJson.codingSkills}></SkillView>
                    </div>
                </div>
                <div className='hidden mx-8 print:mx-0 print:block'>
                    <SkillView skill={[dataJson.skill[0]]} tags={[]} horizontal={false}></SkillView>
                    <WorkingView works={dataJson.works}></WorkingView>
                    <SkillView skill={dataJson.skill.slice(1, dataJson.skill.length)} tags={[]} horizontal={false}></SkillView>
                </div>
            </div>
        </div>
    )
}


export default HHomePage