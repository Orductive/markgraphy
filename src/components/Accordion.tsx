import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={item.id} className={`border-b border-gray-400 ${index === 0 ? 'border-t' : ''}`}>
          <button
            onClick={() => toggle(item.id)}
            className="w-full py-4 flex justify-between items-center focus:outline-none group"
          >
            <span className="text-2xl md:text-3xl font-display uppercase text-[var(--color-accent)] group-hover:text-red-500 transition-colors tracking-wide">
              {item.title}
            </span>
            <span className="text-white group-hover:text-[var(--color-accent)] transition-colors">
              {openId === item.id ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
            </span>
          </button>
          
          <div 
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              openId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-white text-sm md:text-base leading-relaxed pb-6 pr-8 max-w-lg">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
