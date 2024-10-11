import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage, label }) {
    return (
        <div className="progress_bar_container">
            <label className="progress_bar_label">{label}</label>
            <div className="progress_bar">
                <div
                    className="progress_fill"
                    style={{ width: `${percentage}%` }}
                >
                    <span>{percentage}%</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
