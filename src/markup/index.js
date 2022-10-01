export function createMarkup(data) {
  return data
    .map(
      ({ value, id, checked }) => `<li class="item ${
        checked ? 'checked' : ''
      }" data-id="${id}">
  <input type="checkbox" class="btndelete checkbox"></input><p class="text">${value}</p>
  <button type="button" class="button btndelete">x</button>
</li>`
    )
    .join('');
}
