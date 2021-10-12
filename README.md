# Tooltip-directive

**Version 1.00**

A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface. With this package you can create tooltips with just a directive.

## Usage

### Vue 3

```javascript
import { createApp } from "vue"
import App from "./App.vue"
import directive from "tooltip-directive"
const app = createApp(App)
app.directive("tooltip", directive)
app.mount("#app")
```

Then, you can use the directive in any component

```HTML
<template>
  <button v-tooltip="{text: 'Informative text', position: 'up'}"></button>
</template>
```

## Contributors

- Sebastián Castañeda - <sebis.dev@gmail.com>

## License & copyright ©

- Sebastián Castañeda
