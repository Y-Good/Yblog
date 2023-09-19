import React, {ReactElement} from "react";

interface TagProps {
    label: string;
    onClick?: () => void;
}

function Tag(props: TagProps): ReactElement {
    const {label, onClick} = props;
    const cursor = onClick != null ? 'cursor-pointer' : null;
    return <div className={`py-2 px-4 bg-[#f4f4f4] text-xs ${cursor}`} onClick={() => onClick?.()}>
        {label}
    </div>;
}

export default Tag;
