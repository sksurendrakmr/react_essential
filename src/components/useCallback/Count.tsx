import React from "react";

type CountProps = {
    text: string;
    count: number;
};
const Count: React.FC<CountProps> = ({ text, count }) => {
    return (
        <div>
            {text} - {count}
        </div>
    );
};

export default React.memo(Count)
