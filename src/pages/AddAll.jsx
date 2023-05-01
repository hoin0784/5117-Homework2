import Header from '@/components/Header/Header';
import { useState } from 'react';
import TodoList from '@/components/TodoList/TodoList';

// filter types// filter types
const filters = ['all', 'active', 'completed'];

export default function AddAll() {

  // Set the first initial value to 'All'
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

