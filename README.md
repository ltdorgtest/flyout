# flyout


Copy and rename `config.js.tmp` to `cmake/custom/` directory. 


```bash
cmake/
    custom/
        ltd-config.js       # Renamed from config.js.tmp
    flyout/
        ltd-config.js.tmp
        ltd-current.js.in
        ltd-flyout.js
        ltd-icon.svg
```


```bash
out/
    html/
        zh-tw/
            master/
                ltd-current.js
            latest/
                ltd-current.js
        ltd-config.js
        ltd-flyout.js
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
