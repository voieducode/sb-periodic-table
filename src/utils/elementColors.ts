export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'noble gas': 'bg-purple-200 hover:bg-purple-300',
    'diatomic nonmetal': 'bg-yellow-200 hover:bg-yellow-300',
    'alkali metal': 'bg-red-200 hover:bg-red-300',
    'alkaline earth metal': 'bg-orange-200 hover:bg-orange-300',
    'metalloid': 'bg-green-200 hover:bg-green-300',
    'polyatomic nonmetal': 'bg-blue-200 hover:bg-blue-300',
    'post-transition metal': 'bg-indigo-200 hover:bg-indigo-300',
    'transition metal': 'bg-pink-200 hover:bg-pink-300',
    'lanthanide': 'bg-teal-200 hover:bg-teal-300',
    'actinide': 'bg-cyan-200 hover:bg-cyan-300',
    'unknown': 'bg-gray-200 hover:bg-gray-300'
  };
  return colors[category] || 'bg-gray-200 hover:bg-gray-300';
};