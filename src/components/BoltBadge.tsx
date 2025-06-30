import React from 'react';

interface BoltBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BoltBadge: React.FC<BoltBadgeProps> = ({ 
  variant = 'light', 
  className = '' 
}) => {
  const isDark = variant === 'dark';
  
  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-4 right-4 z-50 hover:scale-105 transition-transform duration-200 ${className}`}
    >
      <div className="relative w-20 h-20">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="transform hover:rotate-6 transition-transform duration-300"
        >
          {/* Outer white circle */}
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="white"
            stroke="#000000"
            strokeWidth="3"
          />
          
          {/* Inner black circle for the "b" logo */}
          <circle
            cx="40"
            cy="40"
            r="22"
            fill="#000000"
          />
          
          {/* The "b" logo - styled exactly like the image */}
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontSize="24"
            fontWeight="900"
            fill="white"
            fontFamily="Arial Black, Arial, sans-serif"
          >
            b
          </text>
          
          {/* Curved text "POWERED BY BOLT.NEW" around the top */}
          <defs>
            <path
              id="top-arc"
              d="M 15 40 A 25 25 0 0 1 65 40"
            />
            <path
              id="bottom-arc"
              d="M 65 40 A 25 25 0 0 1 15 40"
            />
          </defs>
          
          {/* Top text "POWERED BY" */}
          <text
            fontSize="7"
            fontWeight="700"
            fill="#000000"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.5"
          >
            <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
              POWERED BY
            </textPath>
          </text>
          
          {/* Bottom text "BOLT.NEW" */}
          <text
            fontSize="7"
            fontWeight="700"
            fill="#000000"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.5"
          >
            <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
              BOLT.NEW
            </textPath>
          </text>
        </svg>
        
        {/* Subtle shadow */}
        <div 
          className="absolute inset-0 rounded-full bg-black opacity-10 blur-sm"
          style={{ transform: 'scale(0.95) translateY(2px)' }}
        />
      </div>
    </a>
  );
};