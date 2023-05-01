// Referenced from Professor Kluver's code

const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function addNewTodo(authToken, todo) {
  const result = await fetch(backend_base + "/todo", {
    'method': 'POST',
    'headers': {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({ text: todo.text, userId: todo.userId })
  })
  return;
}


