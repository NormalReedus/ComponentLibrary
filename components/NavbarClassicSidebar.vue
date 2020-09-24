<template>
  <nav class="sidebar" :class="{ 'sidebar--open': sidebarOpen }">
		<ul class="sidebar-nav">
			<li v-for="link of links" :key="link.to" class="nav-item">
				{{ link.to }}
			</li>
		</ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarClassicSidebar',
  props: {
    links: {
			// { icon, label, to }
      type: Array,
      required: true,
    },
	},

	data() {
		return {
			
		}
	},

	computed: {
		sidebarOpen() {
			return this.$store.state.sidebarOpen
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
	--transition-speed: 400ms;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: var(--clr-sec-dark);
	color: var(--clr-pri);

	transition: var(--transition-speed) ease;
	clip-path: circle(0% at 94% -7%);

	&--open {
		clip-path: circle(110% at 94% -7%);
	}

	&-nav {
		list-style: none;
		height: 100%;
		padding: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

		// Move:
		font-weight: 600;
		font-size: 2rem;
	}
}
</style>