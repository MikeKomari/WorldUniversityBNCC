export default function getColumnCount() {
  if (window.innerWidth >= 1280) return 4; // xl:grid-cols-4
  if (window.innerWidth >= 768) return 3; // md:grid-cols-3
  return 2; // Default to 2 columns on smaller screens
}
