describe("for adding and removing lists", () => {
  const addIndex = () => {
    if (savedTasks.length < 1) {
      return size;
    }
    return savedTasks[savedTasks.length - 1].index + 1;
  }

  const addTask = (book) => {
    savedTasks.push(book);
    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
    size += 1;
  }

  

})