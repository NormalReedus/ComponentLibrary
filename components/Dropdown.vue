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

    <div
      v-if="menuOpen"
      class="dropdown-menu"
      :style="{ height: menuHeight }"
      ref="dropdownMenu"
    >
      <transition name="menu-pri" @enter="setMenuHeight">
        <div class="menu-container" v-if="activeMenu === 'main'">
          <a href="#" class="menu-item" @click="activeMenu = 'settings'">
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

      <transition name="menu-sec" @enter="setMenuHeight">
        <div class="menu-container" v-if="activeMenu === 'settings'">
          <a href="#" class="menu-item" @click="activeMenu = 'main'">
            <span class="icon-btn btn--bg">
              <fa icon="cogs" aria-hidden="true" focusable="false" />
            </span>

            Main
            <span class="icon-right">
              <fa icon="angle-right" aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a href="#" class="menu-item" @click="activeMenu = 'main'">
            <span class="icon-btn btn--bg">
              <fa icon="cogs" aria-hidden="true" focusable="false" />
            </span>

            Main
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
      menuHeight: null,
    }
  },
  props: {},
  computed: {},
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    setMenuHeight(menuEl) {
      const height = menuEl.offsetHeight
      this.menuHeight = height + 'px'
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  --transition-speed: 500ms;
  --border-radius: 8px;
  --menu-item-height: 50px;

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
    box-sizing: content-box;
    position: absolute;
    // top: 120%;
    top: 58px;
    width: 300px;
    // transform: translateX(-45%);
    right: 0;
    background-color: var(--clr-sec-dark);
    border: 1px solid var(--clr-sec);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
    transition: height var(--transition-speed) ease;
    // remove:
    height: var(--menu-item-height);
  }
}

.btn--bg {
  --btn-width: calc(var(--menu-item-height) * 0.8);
  // height: 3rem;
  // width: 3rem;
  height: var(--btn-width);
  width: var(--btn-width);
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
  position: absolute;
}

.menu-pri-enter {
  // position: absolute !important;
  transform: translateX(-110%) !important;
}
.menu-pri-enter-active {
  transform: translateX(0%);
  transition: all var(--transition-speed) ease;
}
.menu-pri-leave {
  // position: absolute !important;
}
.menu-pri-leave-active {
  transform: translateX(-110%);
  transition: all var(--transition-speed) ease;
}

.menu-sec-enter {
  // position: absolute !important;
  transform: translateX(110%) !important;
}
.menu-sec-enter-active {
  transform: translateX(0%);
  transition: all var(--transition-speed) ease;
}
.menu-sec-leave {
  // position: absolute !important;
}
.menu-sec-leave-active {
  transform: translateX(110%);
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

.icon-btn {
  margin-right: 0.5rem;
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