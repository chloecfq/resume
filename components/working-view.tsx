import { InfoType, TitileView } from './titile-view';

export interface Work {
    company: string,
    project: string,
    description: string,
    keyword: string
}


export const WorkingView = (props: { works: Work[] }) => {
    return (
        <div className='flex flex-col w-full print:mb-0 print:block'>
            <TitileView title='工作经验' type={InfoType.working}></TitileView>
            {props.works.map((work, index) => (
                <div key={'work' + index} className='text-gray-600 text-sm mt-3 mb-2 print:flow-root'>
                    <p className='text-lg font-medium text-gray-700'>{work.company}</p>
                    <p className='mt-2 text-base'>{work.project}</p>
                    {work.keyword.length > 0 && <div className='mt-2 flex-row'>
                        <span className='bg-whitse border rounded-full w-1 h-1 items-center'></span>
                        <span className='ml-2 font-sans'>{work.keyword}</span>
                    </div>
                    }
                    <div className='mt-2 text-justify whitespace-pre-line print:block'>{work.description}</div>
                </div>
            ))}
        </div>
    )
}