<template>
  <div class="menu-container" ref="menuContainer">
    <transition-group :name="transition" @enter="setMenuHeight">
      <a
        v-for="item of aMenu.items"
        :key="item.label"
        href="#"
        class="menu-item"
        @click="onClick(item.to, item.action)"
      >
        <span class="icon-btn btn--bg">
          <fa :icon="item.icon" aria-hidden="true" focusable="false" />
        </span>
        {{ item.label }}
        <span class="icon-right" v-if="item.to">
          <fa icon="angle-right" aria-hidden="true" focusable="false" />
        </span>
      </a>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',
  data() {
    return {
      aMenu: this.menu,
      transitionToggle: false,
    }
  },
  props: {
    menu: Object,
  },
  computed: {
    transition() {
      return this.transitionToggle ? 'menu-pri' : 'menu-sec'
    },
  },
  methods: {
    setMenuHeight() {
      const height = this.$refs.menuContainer.offsetHeight
      this.$emit('setMenuHeight', height + 'px')
    },

    onClick(to, action) {
      this.transitionToggle = !this.transitionToggle

      if (to) {
        this.aMenu = to
      } else if (action) {
        action()
      }
    },
  },
  mounted() {
    this.setMenuHeight()
  },
}
</script>

<style lang="scss" scoped>
.btn--bg {
  --btn-width: calc(var(--menu-item-height) * 0.8);
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
  left: 0;
  right: 0;
  padding-left: inherit;
  padding-right: inherit;
  position: absolute;
}

.menu-pri-enter {
  position: absolute !important;
  transform: translateX(110%) !important;
}
.menu-pri-enter-active {
  transform: translateX(0%);
  transition: all var(--transition-speed) ease !important;
}
.menu-pri-leave {
  // position: absolute !important;
}
.menu-pri-leave-active {
  transform: translateX(-110%) !important;
  transition: all var(--transition-speed) ease !important;
}

.menu-sec-enter {
  position: absolute !important;
  transform: translateX(-110%) !important;
}
.menu-sec-enter-active {
  transform: translateX(0%);
  transition: all var(--transition-speed) ease !important;
}
.menu-sec-leave {
  transform: translateX(0%) !important;
  transition: all var(--transition-speed) ease !important;
}
.menu-sec-leave-active {
  transform: translateX(110%) !important;
  transition: all var(--transition-speed) ease !important;
}

.menu-item {
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: all var(--transition-speed) ease;
  padding: 0.5rem;

  &:hover {
    background-color: var(--clr-sec-half);
  }
}

.icon-btn {
  margin-right: 0.5rem;
}

.icon-right {
  margin-left: auto;
  --btn-width: calc(var(--menu-item-height) * 0.8);
  width: var(--btn-width);
  height: var(--btn-width);
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 50%;
    width: 50%;
  }
}

a {
  color: var(--clr-txt);
  text-decoration: none;
}
</style>