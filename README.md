<!-- markdownlint-disable MD033 MD026 MD024 -->
<h1>searchable</h1>
<h5>- a tiny, vanilla/plain JavaScript table search</h5>

Makes any table with **class="searchable"** searchable. Click the search button to filter table rows in real-time as you type.

Just include the JavaScript+CSS and it works automatically. No function calls needed.

<h2>Related Projects</h2>

**[sortable](https://github.com/tofsjonas/sortable)** - makes tables sortable with similar simplicity.

<h2>Demo</h2>

<https://tofsjonas.github.io/searchable/>

<h2>Table of Contents</h2>

<!-- TOC -->

- [Features](#features)
- [Installation](#installation)
  - [CDN jsDelivr](#cdn-jsdelivr)
  - [Local files](#local-files)
- [Usage](#usage)
- [Configuration](#configuration)
  - [Button Position](#button-position)
  - [Custom Button Icon](#custom-button-icon)
    - [Per table](#per-table)
    - [Globally](#globally)
  - [Input Styling](#input-styling)
    - [Per table](#per-table)
    - [Globally](#globally)
  - [Placeholder](#placeholder)
    - [Per table](#per-table)
    - [Globally](#globally)
  - [Empty State Message](#empty-state-message)
    - [Per table](#per-table)
    - [Globally](#globally)
- [How It Works](#how-it-works)

<!-- /TOC -->

## Features

- **1.46K** minified (830 bytes gzipped)
- **Real-time search** - filter as you type (case-insensitive)
- **Works with dynamic tables** - JavaScript generated content supported
- **Lightning fast** - handles large tables smoothly
- **Zero dependencies** - vanilla JavaScript only
- **Auto-initialization** - just add the class
- **Customizable** - button position, icons, styling
- **Modern browsers** - requires CSS `:has()` support [(Chrome 105+, Firefox 121+, Safari 15.4+)](https://caniuse.com/css-has)

## Installation

### CDN (jsDelivr)

```html
<link href="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.js"></script>
```

### Local files

Copy files from `dist/` and link locally:

```html
<link href="/assets/searchable.css" rel="stylesheet" />
<script src="/assets/searchable.min.js"></script>
```

## Usage

Add `class="searchable"` to any table with `<thead>` and `<tbody>`:

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
```

A search button appears automatically. Click it to show/hide the search input.

## Configuration

### Button Position

```html
<table class="searchable sb-left"></table>
<!-- left -->
<table class="searchable"></table>
<!-- right (default) -->
```

### Custom Button Icon

#### Per table

```html
<table class="searchable" data-sb-icon="🔍"></table>
<table class="searchable" data-sb-icon="Search"></table>
```

#### Globally

```css
.searchable::before {
  content: 'anything you want' !important;
}
```

### Input Styling

#### Per table

```html
<table class="searchable" data-sb-input-class="form-control"></table>
```

#### Globally

Using HTML

```html
<script
  data-sb-input-class="form-control bg-warning etc"
  src="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.js"
></script>
```

Using CSS

```css
.searchable thead input {
  background: purple;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}
```

### Placeholder

#### Per table

```html
<table class="searchable" data-sb-placeholder="Search..."></table>
```

#### Globally

```html
<script
  data-sb-placeholder="Placeholder for all searchable inputs"
  src="https://cdn.jsdelivr.net/gh/tofsjonas/searchable@latest/dist/searchable.min.js"
></script>
```

### Empty State Message

#### Per table

```html
<table class="searchable" data-sb-empty="No matches found"></table>
```

#### Globally

```css
.searchable thead::after {
  content: 'Nothing here, move along' !important;
}
```

## How It Works

Uses event delegation and CSS `:has()` pseudo-class. The search input is created dynamically and filters rows by hiding non-matching content in real-time.
