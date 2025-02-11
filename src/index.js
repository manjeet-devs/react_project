const modules = import.meta.glob('./**/*.jsx', { eager: true });

const components = {};

Object.keys(modules).forEach((filePath) => {
  // Remove `./` prefix and `.jsx` suffix
  const componentPath = filePath.replace(/^\.\/(.*)\.jsx$/, '$1');

  // Store the module reference using its full path as key
  components[componentPath] = modules[filePath].default;
});

/**
 * Function to get a component dynamically based on path
 * @param {string} path - Path of the component (e.g., 'layout/Navbar')
 * @returns {React.Component} - The requested component
 */
export const getComponent = (path) => {
  return components[path] || null;
};

export default components;
