import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

export const useTodos = create(persist(
    set=>({
        tasks: ['Eat Breakfast', 'Take a shower'],
        newTasks: [],
        setTasks: task => set({tasks: task}),
        setNewTask: newTask => set({newTasks: newTask}),

    }),
    {
        name: 'Todo',
        storage: createJSONStorage(() => sessionStorage),
    }
    )
)
