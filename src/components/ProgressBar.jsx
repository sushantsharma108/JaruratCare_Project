import React from 'react'

const ProgressBar = ({ percentage }) => {
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="flex items-center justify-center w-2/5 bg-slate-300 rounded-full">
                <div
                    style={{ width: `${percentage}%` }}
                    className="flex items-center justify-center rounded-full bg-green-600"
                >
                    {" "}
                    <span className={`${percentage === 0 || percentage === 100 ? "text-neutral-950" : "text-white"}`}>{percentage}%</span>
                </div>
            </div>
        </div>
    );
};



export default ProgressBar
