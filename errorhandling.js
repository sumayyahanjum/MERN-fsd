// Error Handling Demo
// Author https://nagvbt.github.io/

try {
  let result = JSON.parse("invalid JSON");
  throw('');
} catch (error) {
  console.log("Error caught:", error.message);
}
