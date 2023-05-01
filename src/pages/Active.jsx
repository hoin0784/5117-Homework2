import { useState } from 'react';
import TodoList from '@/components/TodoList/TodoList';
import Header from '@/components/Header/Header';

// filter types
const filters = ['all', 'active', 'completed'];

export default function Active() {
  const [filter, setFilter] = useState(filters[1]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

