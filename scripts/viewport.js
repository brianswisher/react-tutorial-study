module.exports = function(content) {
  return `
  <div id="content">
    ${content || "loading..."}
  </div>
`;
};
