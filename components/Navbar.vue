<template>
	<nav class="navbar">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a href="" class="nav-link">
					<fa class="link-icon" icon="cat" aria-hidden="true" focusable="false" />
					<span class="link-text">Cats</span>
				</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">
					<fa class="link-icon" icon="dog" aria-hidden="true" focusable="false" />
					<span class="link-text">Dogs</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style lang="scss" scoped>
.navbar {
	// margin-right: 5rem;
	padding: 1rem;
	width: 5rem;
	height: 100vh;
	position: fixed;
	background: var(--sec-clr);

	&:hover {
		width: 16rem;

		.link-text {
			display: block;
		}
	}

	.navbar-nav {
		list-style: none;
		height: 100%;

		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.nav-item {
		width: 100%;

		&:last-child {
			margin-top: auto;
		}
	}

	.nav-link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--txt-clr);
		text-decoration: none;

		.link-icon {
			min-width: 2rem;
			margin: 0 1.5rem;
		}
	}

	.link-text {
		display: none;
		margin-left: 1rem;
	}


}

</style>