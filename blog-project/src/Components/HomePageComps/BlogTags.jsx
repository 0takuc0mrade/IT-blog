import { useState } from 'react';

export default function BlogTags() {
  const tags = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Solidity' },
    { id: 3, name: 'Rust' },
    { id: 4, name: 'Blockchain' },
    { id: 5, name: 'Decentralization' },
    { id: 6, name: 'DAOs' },
    { id: 7, name: 'Web3' },
    { id: 8, name: 'Crypto' },
    { id: 9, name: 'NFTs' },
    { id: 10, name: 'DeFi' },
    { id: 11, name: 'DApps' },
  ];
  const [selectedTag, setSelectedTag] = useState(0);
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((item, index) => (
        <ul
          key={item.id}
          className={`${
            index === selectedTag ? 'bg-gray-700 text-white' : null
          } "bg-gray-200 rounded-2xl px-2 py-1 text-sm sm:text-base md:px-3 md:py-2 lg:text-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:shadow-md hover:scale-105`}
          onClick={() => setSelectedTag(index)}
        >
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}
