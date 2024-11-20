
export enum InfoType {
    'field' = 'field', // 专业 默认图标
    'evaluation' = 'evaluation', // 评价
    'working' = 'working', // 工作经验,
    'skill' = 'skill', // 技能
    'responsible' = 'responsible', // 职责
    'tags' = 'tags' // 开发语言
}


export const TitileView = (props: { type: InfoType, title: string }) => {
    let svgicon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
    </svg>
    switch (props.type) {
        case InfoType.skill: {
            svgicon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            break
        }
        case InfoType.evaluation: {
            svgicon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            break
        }
        case InfoType.working: {
            svgicon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            break
        }
        case InfoType.responsible: {
            svgicon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            break
        }
        case InfoType.tags: {
            svgicon = <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1492" width="24" height="24"><path d="M864 280.224V192a32 32 0 0 0-32-32H160a32 32 0 0 0-32 32v88.224h736z m-736 64V864a32 32 0 0 0 32 32h672a32 32 0 0 0 32-32v-86.592a32 32 0 1 1 64 0V864a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h672a96 96 0 0 1 96 96v120.224a32 32 0 0 1-32 32H128z" fill="#2c2c2c" p-id="1493"></path><path d="M595.84 437.088a32 32 0 0 1 60.16 21.856l-109.44 288a32 32 0 0 1-60.16-21.856l109.44-288zM744.192 469.408a32 32 0 1 1 47.616-42.816l126.432 140.64a32 32 0 0 1 0 42.784l-126.432 140.64a32 32 0 0 1-47.616-42.784l107.232-119.232-107.2-119.232zM406.24 469.408a32 32 0 1 0-47.584-42.816l-126.464 140.64a32 32 0 0 0 0 42.784l126.464 140.64a32 32 0 0 0 47.584-42.784l-107.2-119.232 107.2-119.232z" fill="#2c2c2c" p-id="1494"></path></svg>
            break
        }
    }
    return (
        <div className='w-5/6 border-b-2 border-dashed'>
            <div className='flex flex-row mt-6 mb-2 mr-14 print:mr-0 print:mt-6'>
                {svgicon}
                <span className='text-gray-500 text-base font-medium ml-2'>{props.title}</span>
            </div>
        </div>
    )
}