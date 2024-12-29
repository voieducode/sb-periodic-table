import React, { useState } from 'react';
import { ElementCard } from './components/ElementCard';
import { ElementDetails } from './components/ElementDetails';
import { ElementTooltip } from './components/ElementTooltip';
import { elements } from './data/periodicTableData';
import type { Element } from './types/element';

function App() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const handleElementHover = (element: Element, event: React.MouseEvent) => {
    setHoveredElement(element);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Periodic Table of Elements</h1>
      
      <div className="grid grid-cols-18 gap-1 max-w-7xl mx-auto">
        {elements.map((element) => (
          <ElementCard
            key={element.number}
            element={element}
            onClick={handleElementClick}
            onMouseEnter={handleElementHover}
            onMouseLeave={() => setHoveredElement(null)}
          />
        ))}
      </div>

      {selectedElement && (
        <ElementDetails
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      )}

      {hoveredElement && !selectedElement && (
        <ElementTooltip
          element={hoveredElement}
          position={mousePosition}
        />
      )}
    </div>
  );
}

export default App;