module.exports = function(element) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>React Study</title>
  <script src="/bower_components/react/react.js"></script>
  <script src="/bower_components/react/react-dom.js"></script>
  <script src="/bower_components/babel-browser/browser.js"></script>
  <script src="/bower_components/jquery/dist/jquery.min.js"></script>
  <script src="/bower_components/marked/marked.min.js"></script>
</head>
<body>
  ${element}
  <script type="text/babel" src="/js/comment-box.js"></script>
</body>
</html>
`;
};
