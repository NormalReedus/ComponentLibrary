# VueJS / NuxtJS Component Library

## About

All of the following components are responsive and works with a simple, customizable theme in light and dark mode

### Theme

The theme colors are stored in the CSS variables:

- `--txt-clr`
- `--pri-clr`
- `--sec-clr`
- `--acc-clr`

The light / dark theme is toggled with the `theme-{light/dark}` class on your root element

### Data

The components are designed to be dynamic if they depend on any project-specific data. This data will be passed into the component through `props`. For example, links will be passed into navigation components and dynamically rendered out. Documentation on the data format of passed props can be read from the component.

## Components

### List
The following components have been implemented:
- Navbar
- NavbarClassic

### About components
#### Navbar
This is a stylized navbar with Font Awesome icons, that works well for PWAs, mobile and non-classic websites.
#### NavbarClassic
The classic navbar also consists of a sidebar component for smaller screens, that will have to be used together with the nav.