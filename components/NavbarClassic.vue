<template>
<!-- Set a margin-top on main content equal to navbar's width (default 5 rem) on desktop only -->
  <nav class="navbar">
		<div class="burger-menu">
			<div class="burger-menu__graphics"></div>
			<div class="burger-menu__graphics"></div>
			<div class="burger-menu__graphics"></div>
		</div>
    <img class="logo" :src="logo.img" :alt="logo.alt" />
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
}
</script>

<style lang="scss" scoped>
.navbar {
	height: 5rem;
	background: var(--clr-sec-dark);
	position: fixed;
	width: 100%;
	top: 0;
	display: flex;
	justify-content: space-between;
}

.burger-menu {
	width: 5rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	&__graphics {
		height: 4px;
		width: 100%;
		background: var(--clr-sec);
		border-radius: 99px;
		margin: 5px 0;
	}
}

.logo {
	max-height: 100%;
	padding: 0.5rem;
}
</style>