function renderComment(comment) {
  const div = document.createElement('div');
  div.innerHTML = comment;
  return div;
}