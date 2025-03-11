export const styles = {
  container: "relative",
  wrapper: (isOpen: boolean, error?: string) => `
    relative flex items-center min-h-[56px] w-full rounded-lg border 
    ${isOpen ? 'border-blue-600' : error ? 'border-red-500' : 'border-gray-200'} 
    bg-white transition-colors cursor-pointer
    hover:border-gray-400 focus-within:border-blue-600
  `,
  tagsContainer: "flex flex-wrap gap-2 p-3 flex-1",
  errorText: "mt-1.5 text-sm text-red-500"
}; 