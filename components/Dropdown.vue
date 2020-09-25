<template>
  <li class="dropdown">
    <a href="#" class="dropdown__btn btn--bg" @click="toggleMenu">
      <fa
        class="dropdown__icon"
        icon="angle-down"
        aria-hidden="true"
        focusable="false"
      />
    </a>

    <div v-if="menuOpen" class="dropdown-menu">
      <transition name="menu" mode="" duration="500">
        <div class="menu-container" v-if="activeMenu === 'main'">
          <a href="#" class="menu-item">
            <!-- pass in left and right icon names and render with FA -->
            <span class="icon-btn btn--bg">
              <fa icon="cogs" aria-hidden="true" focusable="false" />
            </span>
            <!-- pass in text -->
            Settings
            <span class="icon-right">
              <fa icon="angle-right" aria-hidden="true" focusable="false" />
            </span>
          </a>
        </div>
      </transition>

      <transition name="menu" mode="" duration="500">
        <div class="menu-container" v-if="activeMenu !== 'main'">
          <a href="#" class="menu-item">
            <!-- pass in left and right icon names and render with FA -->
            <span class="icon-btn btn--bg">
              <fa icon="cogs" aria-hidden="true" focusable="false" />
            </span>
            <!-- pass in text -->
            Settings
            <span class="icon-right">
              <fa icon="angle-right" aria-hidden="true" focusable="false" />
            </span>
          </a>
        </div>
      </transition>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      menuOpen: false,
      activeMenu: 'main', // Pass in menus with name (array of menu-objects with names and arrays of list-items with leftIcon, rightIcon, text and potential link to other menu or event)
    }
  },
  props: {},
  computed: {},
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  --transition-speed: 500ms;
  --border-radius: 8px;

  position: relative;

  &__btn {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background: var(--clr-sec);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    // height: 50%;
    // width: 50%;
  }

  &-menu {
    position: absolute;
    top: 120%;
    width: 300px;
    // transform: translateX(-85%);
    right: 0;
    background-color: var(--clr-sec-dark);
    border: 1px solid var(--clr-sec);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
  }
}

.btn--bg {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: var(--clr-sec);

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 50%;
    width: 50%;
  }
}

.menu-container {
  width: 100%;
}

.menu-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-enter-active {
  transform: translateX(0%);
  transition: all var(--transition-speed) ease;
}
.menu-leave {
  position: absolute;
}
.menu-leaver-active {
  transform: translateX(-110%);
  transition: all var(--transition-speed) ease;
}

.menu-item {
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--transition-speed) ease;
  padding: 0.5rem;

  &:hover {
    background-color: var(--clr-sec);
  }
}

.icon-right {
  margin-left: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--clr-txt);
  text-decoration: none;
}
</style>