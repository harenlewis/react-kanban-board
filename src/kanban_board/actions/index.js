export const TOGGLE_PROJECT_MODAL = "TOGGLE_PROJECT_MODAL"

export const toggleProjectModal = (showModal) => ({
    type: TOGGLE_PROJECT_MODAL,
    payload: {
        showModal,
    }
});