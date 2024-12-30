import React from 'react';

const DefaultExportInfo = () => {
  return (
    <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>Understanding Default Export</h2>
      <p>
        <strong>What is Default Export?</strong><br />
        A default export allows a module to export a single primary entity, such as a function, 
        class, or object. It enables the import of the entity without using curly braces.
      </p>
      <p>
        <strong>Why Use Default Export?</strong><br />
        Default exports are convenient when a file contains one main component or function that 
        will be commonly used. It simplifies the import statement and allows you to rename the 
        imported component during import if needed.
      </p>
      <p>
        Example of exporting and importing a default export:
      </p>
      <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        {/* In the component file */}
        export default MyComponent;

        {/* In the importing file */}
        import AnyName from './MyComponent';
      </pre>
    </div>
  );
};

export default DefaultExportInfo;