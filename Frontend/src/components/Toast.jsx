import React from 'react';

export default function Toast({ message }) {
  return (
    <div className="fixed right-6 bottom-6 bg-black/85 text-white px-4 py-2 rounded-md shadow-lg">
      {message}
    </div>
  );
}
