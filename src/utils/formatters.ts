export const formatNumber = (value: number | null): string => {
  if (value === null) return 'Unknown';
  return value.toLocaleString();
};

export const formatTemperature = (kelvin: number | null): string => {
  if (kelvin === null) return 'Unknown';
  const celsius = kelvin - 273.15;
  return `${kelvin}K (${celsius.toFixed(2)}°C)`;
};