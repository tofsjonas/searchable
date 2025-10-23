<!-- markdownlint-disable MD033 MD026 -->
<h1>searchable</h1>
<h5>- a tiny, vanilla/plain JavaScript table search</h5>

Makes any table with **class="searchable"**, well, searchable. The CSS adds a button that, when clicked, inserts a search input at the top of the table. Then you can just start typing to filter rows.

Just include the JavaScript+CSS and it will work. No function calls are needed, everything is handled by **eventListeners**.

(If you use tables, check out <https://github.com/tofsjonas/sortable>, a tiny table _sorter_.)

<h2>Demo</h2>

You can find a simple demo on <https://tofsjonas.github.io/searchable/>

<h2>Table of Contents</h2>

<!-- TOC -->

- [Factoids](#factoids)
- ["Installation"](#installation)
  - [link to jsDelivr](#link-to-jsdelivr)
  - [copy file to assets folder](#copy-file-to-assets-folder)
- [Basic Usage](#basic-usage)
- [Configuration](#configuration)
  - [Button Position](#button-position)
  - [Custom Button Icon](#custom-button-icon)
  - [Custom Input Classes](#custom-input-classes)
- [How It Works](#how-it-works)

<!-- /TOC -->

## Factoids

- **1.65K** minified. (908 bytes gzipped)

- Works with **JavaScript generated tables**. (since we are using an eventListener)

- **Lightning fast**. Works great even with large tables.

- Requires **thead** and **tbody**.

- NOT tested with React, Angular, Vue, etc.

- Works with [Svelte](https://svelte.dev/)!

## "Installation"

There are two ways to use searchable:

### link to jsDelivr

```html
<table class="searchable">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>Electronics</td>
    </tr>
    <tr>
      <td>Coffee Mug</td>
      <td>$12</td>
      <td>Kitchen</td>
    </tr>
  </tbody>
</table>
<link href="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.js"></script>
```

⚠️ _If you are concerned about bugs, I recommend using version numbers instead of "latest"._

### copy file to assets folder

Same as above, but link to your own files from the `dist` directory

```html
...
<link href="/assets/searchable.min.css" rel="stylesheet" />
<script src="/assets/searchable.min.js"></script>
...
```

## Basic Usage

Simply add `class="searchable"` to any table with proper `<thead>` and `<tbody>` structure:

```html
<table class="searchable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Marketing</td>
    </tr>
  </tbody>
</table>
```

A search button will automatically appear. Click it to show/hide the search input field.

## Configuration

You can customize the search functionality using data attributes:

### Button Position

Control where the search button appears using `data-sb-pos`:

```html
<!-- Button on top-left (default) -->
<table class="searchable" data-sb-pos="top left"></table>
<!-- Button on top-right -->
<table class="searchable" data-sb-pos="top right"></table>
```

### Custom Button Icon

Change the search button icon using `data-sb-icon`:

```html
<table class="searchable" data-sb-icon="🔍">
  <table class="searchable" data-sb-icon="⚲">
    <table class="searchable" data-sb-icon="ᯤ"></table>
  </table>
</table>
```

### Custom Input Classes

Style the search input field using `data-sb-input-class`:

```html
<table class="searchable" data-sb-input-class="m-2 p-2 bg-blue-100 border border-blue-300 rounded-lg"></table>
```

This is particularly useful when using CSS frameworks like Tailwind CSS.

## How It Works

- **Event-driven**: Uses a single click event listener on the document
- **Auto-detection**: Automatically detects clicks on `.searchable` tables
- **Dynamic input**: Creates search input on demand, removes it when not needed
- **Real-time filtering**: Filters table rows as you type
- **Lightweight**: No dependencies, vanilla JavaScript only
