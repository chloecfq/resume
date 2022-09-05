import { InfoType, TitileView } from './titile-view';

export interface Work {
    name: string,
    description: string,
    keyword: string
}

export interface Works {
    company: string,
    projects: Work[]
}


export const WorkingView = (props: { works: Works[] }) => {
    return (
        <div className='flex flex-col w-full print:mb-0 print:block'>
            <TitileView title='工作经验' type={InfoType.working}></TitileView>
            {props.works.map((work, index) => (
                <div key={'work' + index} className='text-gray-600 text-sm mt-6 print:mt-4 print:flow-root'>
                    <p className='text-lg font-medium text-gray-700 print:mt-1'>{work.company}</p>
                    {work.projects.map((project, index) => (
                        <div className='mt-3 print:mt-2' key={'project' + index}>
                            <p className='text-base font-medium'>{project.name}</p>
                            {project.keyword.length > 0 && <div className='mt-2 flex-row'>
                                <span className='bg-whitse border rounded-full w-1 h-1 items-center'></span>
                                <span className='ml-2 font-sans italic'>{project.keyword}</span>
                            </div>
                            }
                            <div className='mt-2 text-justify whitespace-pre-line flex-wrap'>{project.description}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}