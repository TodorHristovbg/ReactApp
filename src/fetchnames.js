async function fetchUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch Users');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error fetching Users:', err);
      return [];
    }
  }
  
  export default fetchUsers;    