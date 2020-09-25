<template>
  <nav class="sidebar" :class="{ 'sidebar--open': sidebarOpen }">
		<ul class="sidebar-nav">
			<li v-for="link of links" :key="link.to" class="nav-item" :class="{ 'nav-item--shown': sidebarOpen }">
				<NuxtLink :to="link.to" class="nav-link">
					{{ link.label }}
				</NuxtLink>
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
	@media only screen and (min-width: $xs-width) {
		display: none;
	}

	--transition-speed: 400ms;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: var(--clr-sec-dark);

	transition: var(--transition-speed) ease;
	clip-path: circle(0% at 94% -7%);

	&--open {
		clip-path: circle(110% at 94% -7%);
	}

	&-nav {
		list-style: none;
		height: 80%;
		padding: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
}

.nav-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	transform: translateX(50%);
	opacity: 0;
	transition: var(--transition-speed) ease;

	&--shown {
		transform: translateX(0);
		opacity: 1;
	}
}

.nav-link {
	text-decoration: none;
	font-weight: 600;
	font-size: 2rem;
	color: var(--clr-pri);
}

.nuxt-link-exact-active:not(.logo)::after {
	content: '';
	display: block;
	width: 100%;
	height: 2px;
	background: var(--clr-sec);
}
</style>