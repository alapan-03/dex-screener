// import React, { useState } from 'react';

// function ExpandableMenu() {
//   const [expanded, setExpanded] = useState(false);

//   const toggleMenu = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="expandable-menu">
//       <button className="menu-button" onClick={toggleMenu}>
//         {expanded ? 'Hide Menu' : 'Show Menu'}
//       </button>
//       {expanded && (
//         <ul className="menu-items">
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ExpandableMenu;

import React, { useState } from 'react';

function ExpandableMenu({ initiallyExpanded }) {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-menu">
      <button className="menu-button" onClick={toggleMenu}>
        {expanded ? 'Hide Menu' : 'Show Menu'}
      </button>
      {expanded && (
        <ul className="menu-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default ExpandableMenu;
