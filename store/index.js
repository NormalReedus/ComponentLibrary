export const state = () => ({
	darkMode: false,

	sidebarOpen: false,
})

export const mutations = {
	toggleDarkMode(state) {
		state.darkMode = !state.darkMode
	},

	toggleSidebar(state) {
		state.sidebarOpen = !state.sidebarOpen
	}
}