import { InfoType, TitileView } from './titile-view';
export interface Info {
    name: string,
    content: string,
    key: string,
    type?: string,
    color?: string,
}
export interface SkillProps {
    skill: Skill[],
    horizontal?: boolean,
}

export interface Skill {
    title: string,
    infoType: string,
    fields: string[]
}

export const InfoView = (props: { infoList: Info[] }) => {
    return (
        <div className='ml-2 print:ml-2 mt-4'>
            {props.infoList.map(info => (
                <div className='flex flex-row text-gray-600 mb-1 text-sm' key={info.key}>
                    <div className=''>{info.name}：</div>
                    {info.type && <a href={(info.type === 'link' ? '' : info.type + ':') + info.content} target="_blank">
                        <div className='' style={info.color && { color: info.color }}>
                            {info.content}
                        </div>
                    </a>}
                    {!info.type && <div className=''>
                        {info.content}
                    </div>}
                </div>
            ))}
        </div>
    )
}

export const TagsView = (props: { tags: string[] }) => {
    return (
        <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-6 ml-16">
            {props.tags.map((tag, index) => (
                <div className="transform scale-110 -rotate-6 translate-x-10 text-gray-500" key={'tag' + index}>{tag}</div>
            ))}
        </div>
    )
}

export const SkillView = (props: SkillProps) => {
    return (
        props.horizontal ?
            <div className='flex flex-col w-1/2 print:w-full pr-8 mb-4'>
                {props.skill.map((s, index) => (
                    <div key={'skill' + index}>
                        <TitileView title={s.title} type={InfoType[s.infoType]}></TitileView>
                        <div className='mt-3'>
                            {s.fields.map((val, index) => (
                                <div className='flex flex-row text-gray-600' key={'field' + index}>
                                    <span className='h-1 w-1 rounded-full self-center bg-gray-600'></span>
                                    <span className='ml-2 text-sm mt-1'>{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> : <div className='flex flex-col w-full pr-8 mb-4 print:mb-1 print:block'>
                {props.skill.map((s, index) => (
                    <div key={'skill' + index}>
                        <TitileView title={s.title} type={InfoType[s.infoType]}></TitileView>
                        <div className='mt-3'>
                            {s.fields.map((val, index) => (
                                <div className='flex flex-row text-gray-600' key={'field' + index}>
                                    <span className='h-1 w-1 rounded-full self-center bg-gray-600'></span>
                                    <span className='ml-2 text-sm mt-1'>{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    )
}
