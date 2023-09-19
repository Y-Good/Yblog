import {ReactElement} from "react";

interface iconProps {
    name: string;
    size?: number;
    onClick?: () => void;
}

function Icon(props: iconProps): ReactElement {
    const {name, onClick, size} = props;
    const handleClick = () => onClick?.();
    return <span>
        <i className={`iconfont ${name}`} style={{fontSize: `${size}px`}} onClick={handleClick}></i>
    </span>;
}

export default Icon;
