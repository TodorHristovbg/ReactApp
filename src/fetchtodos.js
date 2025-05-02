async function fetchTodos() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!res.ok) throw new Error('Failed to fetch todos');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error fetching todos:', err);
      return [];
    }
  }
  
  export default fetchTodos;