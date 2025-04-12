# flyout


```bash
cmake/
    custom/
        config.js   // Renamed from config.js.demo
    flyout/
        current.js.in
        flyout.js
        ltd-icon.svg
```


```bash
out/
    html/
        zh-tw/
            master/
                current.js
            latest/
                current.js
        config.js
        flyout.js
        ltd-icon.svg
```

### For Sphinx-based Projects


Add `current.js`, `../../config.js`, and `../../flyout.js` files

```html
{% extends "!layout.html" %}

{% block extrahead %}
    <script type="text/javascript" src="{{ pathto('current.js', 1) }}"></script>
    <script type="text/javascript" src="{{ pathto('../../config.js', 1) }}"></script>
    <script type="text/javascript" src="{{ pathto('../../flyout.js', 1) }}"></script>
{{ super() }}
{% endblock %}
```
