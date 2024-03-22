import { ElementType, HTMLAttributes, useMemo, useState } from "react"

interface IProps extends HTMLAttributes<HTMLOrSVGElement> {
    as?: ElementType;
    content?: string,
    length?: number
  }
const ReadMore = ({ as: HtmlTag = 'p', content, length = 100 , ...orderProps }: IProps) => {

    const isShowButton = useMemo(() => (content?.length || 0) > length, [length, content?.length])

    const [isReadMore, setIsReadMore] = useState(isShowButton);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    if(!content) {
        return <></>
    }

    return (
        <div className="w-full">
            <HtmlTag { ...orderProps }>
                { 
                    isShowButton && isReadMore ? (content.slice(0, length) + '...') : content
                }
            </HtmlTag>
            {
                isShowButton &&
                <div
                    onClick={toggleReadMore}
                    className="text-xs text-primary font-medium cursor-pointer mt-1"
                >
                    {isReadMore ? "Read more" : "Show less"}
                </div>
            }
        </div>
        
    )
}

export default ReadMore