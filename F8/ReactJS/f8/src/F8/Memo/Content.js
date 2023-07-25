import { memo } from "react";

//Use toan tu === de so sanh component co change khong

function Content({count}) {
    console.log("re-render content");
    return (
        <h2>Hello ae {count}</h2>
    )
}

export default memo(Content);