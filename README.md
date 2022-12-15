# TwicPics Components + React

This project is a demonstration project of [TwicPics Components](https://github.com/TwicPics/components/blob/main/documentation/react.md) using [React.js](https://reactjs.org/).

## How to build

### Using npm

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run preview
```

### Using yarn

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn preview
```

## Overview

<div id='what-is-twicpics'/>

### What is [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components)?

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is a **Responsive Image Service Solution** (SaaS) that enables **on-demand responsive image generation**.

With [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components), developers only deal with high-resolution versions of their media while end-users receive **optimized, perfectly sized, device-adapted** versions **delivered from a server close to them**.

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) acts as an **image proxy**. It requests your master image, be it on your own web server, cloud storage or DAM, then generates a **device-adapted** version with **best-in-class compression**, delivered directly to the end-user from the **closest delivery point** available.

<div id='what-is-twicpics-components'/>

### What is TwicPics Components?

TwicPics Components is a **collection of web components** that make it dead easy to unleash the power of [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) in your own projects.

Basically, TwicPics components replace `img` and `video` tags. They greatly and transparently optimize your CLS by providing LQIP (Low-Quality Image Placeholders) and Lazy Loading out of the box.

Simply replace this:

```html
<img src="https://assets.twicpics.com/examples/football.jpg" />
```

With this:

```html
<TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
```

Thanks to the open source [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) Components, delivering responsive images in your [React.js](https://reactjs.org/) projects has never been easier.

## TwicPics configuration

<div id='create-an-account'/>

### Requirement

The only requirement is to have a TwicPics account.
If you don't already have one, you can easily [create your own TwicPics account for free](https://account.twicpics.com/signup).

### Configuring `@twicpics/components`

An example of configuration is set within `index.jsx` file.

All you have to do is set your configuration options to the desired values ([see documentation](https://github.com/TwicPics/components/blob/main/documentation/react.md#setup-options)).

## Examples

All the examples proposed in this project are located in the `lib` directory.
Feel free to inspire yourself from these different use cases to unleash the power of [TwicPics](https://www.twicpics.com/) in your own projects.

## Questions and feedback

Fell free to submit an [issue](https://github.com/TwicPics/components/issues) or to ask us anything by dropping an email at [support@twic.pics](mailto:support@twic.pics).

## Licence

[![License][license-image]][license-url]

[license-image]: https://img.shields.io/npm/l/@twicpics/components.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/twicpics/components/master/LICENSE
