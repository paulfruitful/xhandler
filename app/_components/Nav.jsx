import React from 'react';

const Nav = () => {
  return (
    <div className="flex w-full items-center p-6 bg-black text-white shadow-lg justify-center">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill='white'
        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk text-white"
        width={24}
        height={24}
      >
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
      <span className="text-xl mx-1 font-bold">Handler</span>
    </div>
  );
};

export default Nav;

/* Refactoring Explanation:
- Removed the redundant inline style `style={{ color: 'white' }}` from the SVG element.
  The `text-white` class already handles the text color, making the inline style unnecessary.
- Maintained the existing class names as they appear to be utility classes (likely from Tailwind CSS)
  and fulfill styling requirements.
- No other significant changes were made as the code was already relatively clean and functional.
*/