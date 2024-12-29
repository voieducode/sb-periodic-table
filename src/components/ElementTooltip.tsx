import React from 'react';
import { Element } from '../types/element';

interface ElementTooltipProps {
  element: Element;
  position: { x: number; y: number };
}

export const ElementTooltip: React.FC<ElementTooltipProps> = ({ element, position }) => {
  return (
    <div
      className="fixed z-50 bg-white rounded-lg shadow-xl p-4 w-64"
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
      }}
    >
      <h3 className="text-lg font-bold mb-1">{element.name}</h3>
      <p className="text-sm mb-1">Atomic Number: {element.number}</p>
      <p className="text-sm mb-1">Mass: {element.atomic_mass}</p>
      <p className="text-sm">Phase: {element.phase}</p>
    </div>
  );
};