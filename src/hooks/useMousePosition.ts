import { useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updatePosition = useCallback((event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  return { position, updatePosition };
};