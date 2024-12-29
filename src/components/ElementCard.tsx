import React from 'react';
import { Element } from '../types/element';
import { getCategoryColor } from '../utils/elementUtils';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
  onMouseEnter: (element: Element, event: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({
  element,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className={`
        ${getCategoryColor(element.category)}
        w-16 h-16 p-1 rounded-lg
        flex flex-col items-center justify-center
        transition-all duration-200 transform hover:scale-105
        cursor-pointer relative
      `}
      onClick={() => onClick(element)}
      onMouseEnter={(e) => onMouseEnter(element, e)}
      onMouseLeave={onMouseLeave}
      style={{ gridColumn: element.xpos, gridRow: element.ypos }}
    >
      <span className="text-xs text-gray-600">{element.number}</span>
      <span className="text-lg font-bold">{element.symbol}</span>
      <span className="text-xs truncate">{element.name}</span>
    </button>
  );
};
