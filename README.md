# Flyout Navigation Menu

## Table of Contents

## How it works

In the source directory, the files should be organized as follows:

```bash
cmake/
    custom/
        ltd-config.js       # Modified from cmake/flyout/ltd-config.js
        layout.html         # For Sphinx-based projects to include flyout JS files
        head.hbs            # For mdBook-based projects to include flyout JS files
    flyout/                 # Added as the submodule
        ltd-config.js
        ltd-current.js.in
        ltd-flyout.js
        ltd-icon.svg
```

The configured files should be placed in the output build directory like this:

```bash
out/
    html/                       # The root of the renderer directory
        zh-cn/                  # The language subdir of the renderer directory
            master/             # The renderer directory
                ltd-current.js
            latest/
                ltd-current.js
        zh-tw/
            master/
                ltd-current.js
            latest/
                ltd-current.js
        ltd-config.js
        ltd-flyout.js
        ltd-icon.svg
```

## Sphinx-based Projects

### 1. Configure Flyout Files

- Configure `ltd-icon.svg` file to the root of the builder directory.
- Configure `ltd-config.js` file to the root of the builder directory.
- Configure `ltd-flyout.js` file to the root of the builder directory.
- Configure `ltd-current.js` file to the version subdir of the builder directory.

```bash
out/
    repo/
        docs/                   # The config directory
            _templates/         # The templates directory
                layout.html
            source/             # The source directory
                index.rst
            conf.py
    html/                       # The root of the builder directory
        zh-cn/                  # The language subdir of the builder directory
            master/             # The version subdir of the builder directory
                ltd-current.js
            latest/
                ltd-current.js
        zh-tw/
            master/
                ltd-current.js
            latest/
                ltd-current.js
        ltd-config.js
        ltd-flyout.js
        ltd-icon.svg
```

### 2. Include Flyout Files in Template Files

See: https://www.sphinx-doc.org/en/master/development/html_themes/templating.html

To include the JavaScript files needed for the flyout functionality, update your `layout.html` as follows:

```html
{% extends "!layout.html" %}

{% block extrahead %}
<script type="text/javascript" src="{{ pathto('ltd-current.js', 1) }}"></script>
<script type="text/javascript" src="{{ pathto('../../ltd-config.js', 1) }}"></script>
<script type="text/javascript" src="{{ pathto('../../ltd-flyout.js', 1) }}"></script>
{{ super() }}
{% endblock %}
```

## mdBook-based Projects

### 1. Configure Flyout Files

- Configure `ltd-icon.svg` file to the root of the renderer directory.
- Configure `ltd-config.js` file to the root of the renderer directory.
- Configure `ltd-flyout.js` file to the root of the renderer directory.
- Configure `ltd-current.js` file to the version subdir of the renderer directory.

```bash
out/
    repo/
        book/                   # The book directory
            theme/              # The theme directory
                head.hbs
            src/                # The src directory
                SUMMARY.md
            book.toml
    html/                       # The root of the renderer directory
        zh-cn/                  # The language subdir of the renderer directory
            master/             # The version subdir of the renderer directory
                ltd-current.js
            latest/
                ltd-current.js
        zh-tw/
            master/
                ltd-current.js
            latest/
                ltd-current.js
        ltd-config.js
        ltd-flyout.js
        ltd-icon.svg
```

### 2. Include JavaScript Files for Flyout via Handlebars

See: https://rust-lang.github.io/mdBook/format/theme/index.html

To include the JavaScript files needed for the flyout functionality, update your `head.hbs` as follows:

```hbs
<script type="text/javascript" src="{{ path_to_root }}ltd-current.js"></script>
<script type="text/javascript" src="{{ path_to_root }}../../ltd-config.js"></script>
<script type="text/javascript" src="{{ path_to_root }}../../ltd-flyout.js"></script>
```
