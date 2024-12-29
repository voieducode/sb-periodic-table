import React from 'react';
import { Element } from '../types/element';
import { formatNumber, formatTemperature } from '../utils/elementUtils';
import { X } from 'lucide-react';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

export const ElementDetails: React.FC<ElementDetailsProps> = ({ element, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{element.name}</h2>
            <p className="text-6xl font-bold text-gray-800 mb-4">{element.symbol}</p>
            <p className="text-lg mb-2">Atomic Number: {element.number}</p>
            <p className="text-lg mb-2">Atomic Mass: {element.atomic_mass}</p>
            <p className="text-lg mb-2">Category: {element.category}</p>
            <p className="text-lg mb-2">Block: {element.block}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Properties</h3>
            <p className="mb-2">Phase: {element.phase}</p>
            <p className="mb-2">Density: {formatNumber(element.density)} g/cm³</p>
            <p className="mb-2">Melting Point: {formatTemperature(element.melt)}</p>
            <p className="mb-2">Boiling Point: {formatTemperature(element.boil)}</p>
            <p className="mb-2">Electron Configuration: {element.electron_configuration}</p>
            <p className="mb-2">Discovered by: {element.discovered_by}</p>
          </div>
        </div>

        {element.image && (
          <div className="mt-6">
            <img 
              src={element.image.url} 
              alt={element.image.title}
              className="w-full max-h-64 object-contain rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-2">{element.image.attribution}</p>
          </div>
        )}
      </div>
    </div>
  );
};