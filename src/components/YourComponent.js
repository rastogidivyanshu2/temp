import React, { useState } from 'react';

const YourComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', details: 'Details for Item 1' },
    { id: 2, name: 'Item 2', details: 'Details for Item 2' },

  ]);

  const [activeItemId, setActiveItemId] = useState(null);

  const toggleDropdown = (itemId) => {
    setActiveItemId(prevId => (prevId === itemId ? null : itemId));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <div onClick={() => toggleDropdown(item.id)}>
            {item.name} {/* Display item name */}
            <span style={{ transform: activeItemId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼ {/* Dropdown sign element */}
            </span>
          </div>
          {activeItemId === item.id && (
            <div
              style={{
                position: 'relative',
                left: 0,
                top: '100%',
                width: '100%', // Set the same width as your component
                // Additional styling for the dropdown div
                border: '1px solid #ccc',
                background: '#fff',
                padding: '10px',
                zIndex: 1,
              }}
            >
              {/* Display item details */}
              {item.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
