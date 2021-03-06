<template>
  <!-- Set a margin-left on main content equal to navbar's width (default 5 rem) on desktop only -->
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <NuxtLink to="/" class="nav-link">
          <img class="logo__img" :src="logo.img" :alt="logo.alt" />
        </NuxtLink>
        <fa
          class="navbar__icon"
          icon="angle-double-right"
          aria-hidden="true"
          focusable="false"
        />
      </li>

      <li v-for="link of links" :key="link.to" class="nav-item">
        <NuxtLink :to="link.to" class="nav-link">
          <fa
            class="nav-link__icon"
            :icon="link.icon"
            aria-hidden="true"
            focusable="false"
          />
          <span class="nav-link__label">{{ link.label }}</span>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <a role="button" class="nav-link" @click="toggleDarkMode">
          <fa
            class="nav-link__icon"
            :icon="darkModeIcon"
            aria-hidden="true"
            focusable="false"
          />
          <span class="nav-link__label">{{ darkModeLabel }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
    darkModeIcon() {
      return this.$store.state.darkMode ? 'moon' : 'sun'
    },
    darkModeLabel() {
      return this.$store.state.darkMode ? 'Light Mode' : 'Dark Mode'
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  --transition-speed: 200ms;

  position: fixed;
  background: var(--clr-sec);
  transition: width var(--transition-speed) ease;
  overflow: hidden;

  &-nav {
    list-style: none;
    height: 100%;

    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__icon {
    min-width: 2rem;
    min-height: 2rem;
    // margin: 0 1.5rem;
    transition: var(--transition-speed) ease;
    color: var(--clr-sec);
    transform: rotate(0deg);

    align-self: center;
    justify-self: center;
  }

  &:hover {
    .logo {
      justify-content: space-evenly;

      &__img {
        display: block;
      }
    }

    .navbar__icon {
      transform: rotate(180deg);
      // margin-left: auto;
    }
  }
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
  text-decoration: none;
  color: var(--clr-sec-light);
  transition: var(--transition-speed) ease;
  font-weight: 600;

  &:hover {
    background: var(--clr-sec-dark);

    & > .nav-link__icon {
      color: var(--clr-sec-light);
    }
  }

  &__icon {
    min-width: 2rem;
    min-height: 2rem;
    margin: 0 1.5rem;
    color: var(--clr-sec-dark);
    transition: color var(--transition-speed) ease;
  }
}

.nav-link__label {
  display: none;
  margin-left: 1rem;
  font-size: 1.2rem;
  white-space: nowrap;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  width: 100%;
  background: var(--clr-sec-dark);
  color: var(--clr-txt);

  &__img {
    max-height: 4rem;
    // margin-left: auto;
    // margin-right: auto;
    display: none;
    // margin-left: 1rem;
    font-size: 1.2rem;
    white-space: nowrap;
  }
}

@media only screen and (max-width: $xs-width) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .logo {
    display: none;
  }

  .nav-link {
    justify-content: center;
  }
}
@media only screen and (min-width: $xs-width) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 16rem;

      .nav-link__label {
        display: inline;
        transition: opacity var(--transition-speed);
      }
    }
  }
}
</style>