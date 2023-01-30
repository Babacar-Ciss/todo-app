import { create } from "zustand";
import { nanoid } from "nanoid";
import { persist, createJSONStorage } from "zustand/middleware";

const Store = create(
	persist(
		(set, get) => ({
			theme: "light",
			toggleTheme: () =>
				set({
					theme:
						get().theme === "light"
							? (get().theme = "dark")
							: get().theme === "dark"
							? (get().theme = "light")
							: null,
				}),

			// Initial State of the todos
			todos: [
				{
					id: nanoid(),
					isActive: false,
					todoDescription: "Complete online JavaScript course",
				},
				{
					id: nanoid(),
					isActive: false,
					todoDescription: "Jog around the park 3x",
				},
				{
					id: nanoid(),
					isActive: true,
					todoDescription: "10 minutes meditation",
				},
				{ id: nanoid(), isActive: true, todoDescription: "Read for 1 hour" },
				{ id: nanoid(), isActive: true, todoDescription: "Pick up groceries" },
				{
					id: nanoid(),
					isActive: false,
					todoDescription: "Complete Todo App on Frontend Mentor",
				},
			],

			// Delete all complete Todos
			clearAllCompleteTodos: () =>
				set({
					todos: get().todos.filter((todo) => todo.isActive === true),
				}),

			// Add one Todo
			addOneTodo: (newTodo) =>
				set({
					todos: [...get().todos, newTodo],
				}),

			// Delete one Todo
			deleteOneTodo: (indexToDelete) =>
				set({
					todos: get().todos.filter((todo) => todo.id !== indexToDelete),
				}),

			// Toggle one Todo is active or complete
			ToggleTodoChecked: (idToToggle) =>
				set({
					todos: get().todos.map((todo) =>
						todo.id === idToToggle
							? { ...todo, isActive: !todo.isActive }
							: todo
					),
				}),

			// Creating a state for different view
			view: "All",
			setView: (viewName) => set({ view: viewName }),
		}),
		{
			name: "todo-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);

export default Store;
