const modules = import.meta.glob('../components/**/*.jsx', { eager: true });

const components = {};

// Store components using their folder path as the key
Object.keys(modules).forEach((filePath) => {
  const componentPath = filePath
    .replace(/^..\/components\//, '') // Remove base path
    .replace(/\.jsx$/, ''); // Remove extension

  components[componentPath] = modules[filePath].default;
});

/**
 * Function to get a component dynamically based on a path
 * @param {string} path - Path to the component (e.g., 'layout/Navbar')
 * @returns {React.Component|null} - The requested component or null
 */
export const getComponent = (path) => components[path] || null;

export default components;
