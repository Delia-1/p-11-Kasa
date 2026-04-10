import { memo } from "react"
const Tag = memo(({tag}) => {

return (
    <div className="tag">
        <p className="tag__text">{tag}</p>
    </div>
)
})
export default memo(Tag)