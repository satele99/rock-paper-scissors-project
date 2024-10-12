const fs = require('fs');

test('Site should build without errors', () => {
  const path = 'C:\Users\satel\repos\rock-paper-scissors-project\index.html'; // Adjust this path depending on where your site generates files.
  expect(fs.existsSync(path)).toBe(true); // This checks if the index.html file exists after build.
});
