export const TOGGLE_PROJECT_MODAL = "TOGGLE_PROJECT_MODAL"
export const toggleProjectModal = (showModal) => ({
    type: TOGGLE_PROJECT_MODAL,
    payload: {
        showModal,
    }
});

export const REORDER_PROJECTS = "REORDER_PROJECTS"
export const reorderProjects = (dragData) => ({
    type: REORDER_PROJECTS,
    payload: {
        dragData,
    }
});