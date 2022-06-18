import React from "react";

type CountProps = {
    text: string;
    count: number;
};
export const Count: React.FC<CountProps> = ({ text, count }) => {
    return (
        <div>
            {text} - {count}
        </div>
    );
};
