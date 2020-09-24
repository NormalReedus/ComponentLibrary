<template>
  <div>
		<NavbarClassicSidebar :links="navLinks"/>

    <NavbarClassic :logo="logo" :links="navLinks" />

		<main>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est sunt vel tempora illum ipsa magni commodi quibusdam, perferendis laboriosam cupiditate suscipit! Adipisci harum nam facere sint aspernatur nihil dignissimos eligendi, quo ad ullam iusto mollitia blanditiis non saepe eum ut incidunt tempora ex corporis soluta vel necessitatibus. Explicabo labore quia ipsa reprehenderit cum eveniet obcaecati, eos iure, sequi nisi sapiente deserunt repellendus dolorum ipsam, excepturi quam accusamus dicta perspiciatis! Odit tempore perferendis dicta nostrum ipsum laudantium quidem ducimus ex dolor hic illo neque nemo illum saepe nulla consectetur nisi dignissimos porro at, vero maxime eligendi vitae, sapiente in. Obcaecati iste, mollitia culpa eum nisi sit, assumenda optio nihil nesciunt aliquam suscipit autem laudantium omnis ipsa reiciendis error in similique porro asperiores laboriosam soluta aliquid. Vitae officiis suscipit nulla iure cumque aliquam facilis laboriosam tempora aperiam, non ipsum aliquid quod, consectetur, dignissimos ipsam. Aspernatur, praesentium magni facilis harum tempore mollitia sunt voluptatibus eum voluptas dolor nulla accusamus sint fugiat illo ipsum laboriosam numquam quidem sit alias vitae asperiores incidunt. Vel sunt eligendi nesciunt. Rem, voluptatibus nemo doloribus illo quam repellendus voluptates. Totam ratione tenetur nam, laboriosam, reprehenderit quo placeat optio recusandae enim nobis, veritatis debitis nisi. Commodi quasi nam praesentium?
		</main>
  </div>
</template>

<script>
const img = require('@/assets/placeholders/insta.png')

export default {
	data() {
		return {
			logo: {
				img,
				alt: 'instagram-logo'
			},

			navLinks: [
				{ to: '/', icon: 'home', label: 'Home'},
				{ to: '/404', icon: 'skull', label: '404'},
			]
		}
	},

	computed: {
		sidebarOpen() {
			return this.$store.state.sidebarOpen
		}
	}
}
</script>

<style lang="scss">
main {
	margin-top: 5rem;
}
</style>
