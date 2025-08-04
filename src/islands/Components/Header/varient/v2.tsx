import { HeaderProps } from "../index.tsx";

export function HeaderCompenentV2 (param: HeaderProps  ){
    return(
        <div className="container w-full bg-primary-bg flex justify-around items-center">
            <div>
                Moni<span className="text-accent hover:text-accent-hover">Text</span>
            </div>
            <div className="flex flex-wrap flex-row sm:flex-col md:flex-row text-primary-text">
                {
                    Object.entries(param.links).map(
                        ([label, href], i) =>  <a href={href} key={i} className="btn border border-secondary-bg">{label}</a>
                    )
                }
            </div>
        </div>
    )
}
