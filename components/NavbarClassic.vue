<template>
<!-- Set a margin-top on main content equal to navbar's width (default 5 rem) on desktop only -->
		
  <nav class="navbar">
		<NuxtLink to="/" class="logo">
    	<img :src="logo.img" :alt="logo.alt" class="logo__img" />
		</NuxtLink>

		<ul class="navbar-nav">
			<li class="nav-item" v-for="link of links" :key="link.to" >
				<NuxtLink :to="link.to" class="nav-link">
					{{ link.label }}
				</NuxtLink>
			</li>
		</ul>

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

	&-nav {
		@media only screen and (max-width: $xs-width - 1) {
			display: none;
		}

		width: 100%;
		list-style: none;

    padding: 0;
    margin: 0;
    display: flex;
		align-items: center;
		justify-content: flex-end;
		font-weight: 500;
	}
}

.nav-item {
	margin: 0 1.5rem;
}

.nav-link {
	text-decoration: none;
	color: var(--clr-pri);

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: var(--clr-sec);

		transition: width var(--transition-speed) ease;
	}
}

.nuxt-link-exact-active:not(.logo)::after {
	content: '';
	display: block;
	width: 100%;
	height: 2px;
	background: var(--clr-sec);
}

.burger-menu {
	@media only screen and (min-width: $xs-width) {
		display: none;
	}

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