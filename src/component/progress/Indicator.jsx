import React from 'react'
import { Sparkles } from 'lucide-react';

const Indicator = () => {
    const percentage = 78;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return (
        <div className="relative w-30 h-30">
            <svg width="120" height="120" viewBox="0 0 100 100">
                <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
                />
            
                <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#9d174d"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 50 50)"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles fill='#9d174d' color='#e5e7eb'/>
            </div>
        </div>
        )
}

export default Indicator