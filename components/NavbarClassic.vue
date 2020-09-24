<template>
<!-- Set a margin-top on main content equal to navbar's width (default 5 rem) on desktop only -->
		
  <nav class="navbar">
		<NuxtLink to="/" class="logo">
    	<img :src="logo.img" :alt="logo.alt" class="logo__img" />
		</NuxtLink>

		<button class="burger-menu" :class="{ 'burger-menu--sidebar-open': sidebarOpen }" @click="toggleSidebar">
			<div class="burger-menu__line burger-menu__line--top"></div>
			<div class="burger-menu__line burger-menu__line--middle"></div>
			<div class="burger-menu__line burger-menu__line--bottom"></div>
		</button>
  </nav>
</template>

<script>
export default {
  name: 'NavbarClassic',
  props: {
    logo: {
      // { img, alt }
      type: Object,
      required: true,
    },

    links: {
			// { icon, label, to }
      type: Array,
      required: true,
    },
	},

	computed: {
		sidebarOpen() {
			return this.$store.state.sidebarOpen
		}
	},

	methods: {
		toggleSidebar() {
			this.$store.commit('toggleSidebar')
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	--transition-speed: 400ms;

	height: 5rem;
	background: var(--clr-sec-dark);
	position: fixed;
	width: 100%;
	top: 0;
	display: flex;
	justify-content: space-between;
}

.burger-menu {
	position: relative;
	width: 5rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	border: 0;
	background: none;
	outline: none;

	&--sidebar-open {
		& > .burger-menu__line--middle {
			opacity: 0;
		}

		& > .burger-menu__line--top {
			transform: translate(-50%, -50%) rotate(45deg);
			top: 50%;
		}

		& > .burger-menu__line--bottom {
			transform: translate(-50%, -50%) rotate(-45deg);
			top: 50%;
		}
	}

	&__line {
		height: 5px;
		width: 60%;
		background: var(--clr-sec);
		border-radius: 99px;
		transition: var(--transition-speed) ease;
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;

		&--top {
			top: 33%;
		}
		&--middle {
			top: 50%;
			opacity: 1;
		}
		&--bottom {
			top: 67%;
		}
	}
}

.logo {
	max-height: 100%;
	width: 5rem;
	padding: 0.5rem;

	&__img {
		max-height: 100%;
	}
}
</style>