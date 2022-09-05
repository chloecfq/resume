import React from 'react';
import { InfoView, SkillView, TagsView } from '../components/info-view';
import { WorkingView } from '../components/working-view';
import dataJson from '../public/resume/data.json'

const HomePage = (props) => {
    return (
            <div className='mt-10 ml-28 mr-28 min-h-screen mb-8'>
                <div className='flex flex-row'>
                    <div className='flex flex-col text-gray-600'>
                        <div className='text-3xl font-light'>{dataJson.name}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.career}</div>
                        <div className='text-sm font-extralight mt-2'>{dataJson.school}
                          <span id='text' className='ml-3 text-xs'>{dataJson.educationTime}</span>
                        </div>
                    </div>
                    <div className='text-gray-500 mt-4 ml-14 font-light'>{dataJson.baseInfoTitle}</div>
                    <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                    <InfoView infoList={dataJson.baseInfo}></InfoView>
                    <div className='text-gray-500 mt-4 ml-14 font-light'>{dataJson.contactTitle}</div>
                    <div className='h-20 border-r border-gray-300 mt-4 ml-4'></div>
                    <InfoView infoList={dataJson.contactInfo}></InfoView>
                    <TagsView tags={dataJson.tags}></TagsView>
                </div>
                <div className='flex flex-row'>
                    <SkillView skill={dataJson.skill}></SkillView>
                    <WorkingView works={dataJson.Works}></WorkingView>
                </div>
            </div>
    )
}


export default HomePage
