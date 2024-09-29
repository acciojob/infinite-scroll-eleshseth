//your code here!

//your code here!
document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.getElementById('infi-list');
  let itemCount = 0;  // Initial number of list items

  // Function to add new list items
  function addListItems(num) {
    for (let i = 0; i < num; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Item ${itemCount + 1}`;
      listContainer.appendChild(listItem);
      itemCount++;
    }
  }

  // Add 10 list items initially
  addListItems(10);

  // Infinite scroll functionality
  listContainer.addEventListener('scroll', () => {
    // Check if user has scrolled to the bottom of the list
    if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight) {
      // Add 2 more list items
      addListItems(2);
    }
  });
});

