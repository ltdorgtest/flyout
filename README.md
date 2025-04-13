# flyout



### How it works

In the source directory, the files should be organized as follows:

```bash
cmake/
    custom/
        ltd-config.js       # Modified from config.js.tmp
        layout.html         # For Sphinx-based projects to include flyout JS files
    flyout/                 # Added as the submodule
        ltd-config.js.tmp
        ltd-current.js.in
        ltd-flyout.js
        ltd-icon.svg
```

The copied and configured files should be placed in the output build directory like this:

```bash
out/
    repo/
        book/                   # The book directory
            book.toml
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

### 1. Copy and Configure Flyout Files

- Copy `ltd-config.js` file to the root of the builder directory.
- Copy `ltd-flyout.js` file to the root of the builder directory.
- Copy `ltd-icon.svg` file to the root of the builder directory.
- Configure `ltd-current.js` file to the version subdir of the builder directory.

```bash
out/
    repo/
        docs/                   # The config directory
            source/
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

Before running the build process in `sphinx_build_docs.cmake`, make sure to copy and configure the required JavaScript files into the target output directory.

<details><summary>Click to expand the code blocks</summary>

```cmake
message(STATUS "Copying 'ltd-config.js' file to the root of the builder directory...")
file(MAKE_DIRECTORY "${PROJ_OUT_BUILDER_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_CUSTOM_DIR}/ltd-config.js"
    "${PROJ_OUT_BUILDER_DIR}/ltd-config.js")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_CUSTOM_DIR}/ltd-config.js")
message("To:   ${PROJ_OUT_BUILDER_DIR}/ltd-config.js")
message("")
restore_cmake_message_indent()


message(STATUS "Copying 'ltd-flyout.js' file to the root of the builder directory...")
file(MAKE_DIRECTORY "${PROJ_OUT_BUILDER_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_FLYOUT_DIR}/ltd-flyout.js"
    "${PROJ_OUT_BUILDER_DIR}/ltd-flyout.js")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-flyout.js")
message("To:   ${PROJ_OUT_BUILDER_DIR}/ltd-flyout.js")
message("")
restore_cmake_message_indent()


message(STATUS "Copying 'ltd-icon.svg' file to the root of the builder directory...")
file(MAKE_DIRECTORY "${PROJ_OUT_BUILDER_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_FLYOUT_DIR}/ltd-icon.svg"
    "${PROJ_OUT_BUILDER_DIR}/ltd-icon.svg")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-icon.svg")
message("To:   ${PROJ_OUT_BUILDER_DIR}/ltd-icon.svg")
message("")
restore_cmake_message_indent()


file(READ "${LANGUAGES_JSON_PATH}" LANGUAGES_JSON_CNT)
if (NOT LANGUAGE STREQUAL "all")
    set(LANGUAGE_LIST "${LANGUAGE}")
endif()
foreach(_LANGUAGE ${LANGUAGE_LIST})
    get_json_value_by_dot_notation(
        IN_JSON_OBJECT      "${LANGUAGES_JSON_CNT}"
        IN_DOT_NOTATION     ".${_LANGUAGE}.langtag"
        OUT_JSON_VALUE      _LANGTAG)


    message(STATUS "Configuring 'ltd-current.js' file to the builder directory...")
    set(CURRENT_VERSION     "${VERSION}")
    set(CURRENT_LANGUAGE    "${_LANGTAG}")
    file(MAKE_DIRECTORY "${PROJ_OUT_BUILDER_DIR}/${_LANGTAG}/${VERSION}")
    configure_file(
        "${PROJ_CMAKE_FLYOUT_DIR}/ltd-current.js.in"
        "${PROJ_OUT_BUILDER_DIR}/${_LANGTAG}/${VERSION}/ltd-current.js")
    remove_cmake_message_indent()
    message("")
    message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-current.js.in")
    message("To:   ${PROJ_OUT_BUILDER_DIR}/${_LANGTAG}/${VERSION}/ltd-current.js")
    message("")
    restore_cmake_message_indent()

    #[[ ... ]]
endforeach()
```

</details>

### 2. Include Flyout Files in Template Files

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

### 1. Copy and Configure Flyout Files

- Copy `ltd-config.js` file to the grandparentdir of the book directory.
- Copy `ltd-flyout.js` file to the grandparentdir of the book directory.
- Copy `ltd-icon.svg` file to the root of the renderer directory.
- Configure `ltd-current.js` file to the book directory.

```bash
out/
    repo/
        book/                   # The book directory
            src/
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

在 `mdbook_build_docs.cmake` 中進行建置之前，將所需的 JavsScript 檔案複製/調配到目的地目錄：

<details><summary>Click to expand the CMake implementation</summary>

```cmake
message(STATUS "Copying 'ltd-config.js' file to the grandparentdir of the book directory...")
get_filename_component(BOOK_PARENT_DIR "${PROJ_OUT_REPO_BOOK_DIR}" DIRECTORY)
get_filename_component(BOOK_GRANDPARENT_DIR "${BOOK_PARENT_DIR}" DIRECTORY)
file(MAKE_DIRECTORY "${BOOK_GRANDPARENT_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_CUSTOM_DIR}/ltd-config.js"
    "${BOOK_GRANDPARENT_DIR}/ltd-config.js")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_CUSTOM_DIR}/ltd-config.js")
message("To:   ${BOOK_GRANDPARENT_DIR}/ltd-config.js")
message("")
restore_cmake_message_indent()


message(STATUS "Copying 'ltd-flyout.js' file to the grandparentdir of the book directory...")
get_filename_component(BOOK_PARENT_DIR "${PROJ_OUT_REPO_BOOK_DIR}" DIRECTORY)
get_filename_component(BOOK_GRANDPARENT_DIR "${BOOK_PARENT_DIR}" DIRECTORY)
file(MAKE_DIRECTORY "${BOOK_GRANDPARENT_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_FLYOUT_DIR}/ltd-flyout.js"
    "${BOOK_GRANDPARENT_DIR}/ltd-flyout.js")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-flyout.js")
message("To:   ${BOOK_GRANDPARENT_DIR}/ltd-flyout.js")
message("")
restore_cmake_message_indent()


message(STATUS "Copying 'ltd-icon.svg' file to the root of the renderer directory...")
file(MAKE_DIRECTORY "${PROJ_OUT_RENDERER_DIR}")
file(COPY_FILE
    "${PROJ_CMAKE_FLYOUT_DIR}/ltd-icon.svg"
    "${PROJ_OUT_RENDERER_DIR}/ltd-icon.svg")
remove_cmake_message_indent()
message("")
message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-icon.svg")
message("To:   ${PROJ_OUT_RENDERER_DIR}/ltd-icon.svg")
message("")
restore_cmake_message_indent()


file(READ "${LANGUAGES_JSON_PATH}" LANGUAGES_JSON_CNT)
if (NOT LANGUAGE STREQUAL "all")
    set(LANGUAGE_LIST "${LANGUAGE}")
endif()
foreach(_LANGUAGE ${LANGUAGE_LIST})
    get_json_value_by_dot_notation(
        IN_JSON_OBJECT      "${LANGUAGES_JSON_CNT}"
        IN_DOT_NOTATION     ".${_LANGUAGE}.langtag"
        OUT_JSON_VALUE      _LANGTAG)


    message(STATUS "Configuring 'ltd-current.js' file to the book directory...")
    set(CURRENT_VERSION     "${VERSION}")
    set(CURRENT_LANGUAGE    "${_LANGTAG}")
    file(MAKE_DIRECTORY "${PROJ_OUT_REPO_BOOK_DIR}")
    configure_file(
        "${PROJ_CMAKE_FLYOUT_DIR}/ltd-current.js.in"
        "${PROJ_OUT_REPO_BOOK_DIR}/ltd-current.js")
    remove_cmake_message_indent()
    message("")
    message("From: ${PROJ_CMAKE_FLYOUT_DIR}/ltd-current.js.in")
    message("To:   ${PROJ_OUT_REPO_BOOK_DIR}/ltd-current.js")
    message("")
    restore_cmake_message_indent()

    #[[ ... ]]
endforeach()
```

</details>

### 2. Include JavaScript Files for Flyout via Environment Variable

To include the JavaScript files required for the flyout menu, we can use the `MDBOOK_OUTPUT__HTML__ADDITIONAL_JS` environment variable, which is equivalent to the `[output.html.additional-js]` configuration in `book.toml`.

According to the [mdBook Documentation](https://rust-lang.github.io/mdBook/format/configuration/renderers.html#html-renderer-options), we can define additional JavaScript files in `book.toml` like this:

```toml
[output.html]
additional-js = [ "ltd-current.js", "../../ltd-config.js", "../../ltd-flyout.js" ]
```

As described in the [Environment Variables](https://rust-lang.github.io/mdBook/format/configuration/environment-variables.html) section, we can set the same configuration using its equivalent environment variable:

```bash
export MDBOOK_OUTPUT__HTML__ADDITIONAL_JS='["ltd-current.js","../../ltd-config.js","../../ltd-flyout.js"]'
```

To avoid overwriting the existing `output.html.additional-js` list specified in the upstream project, you can use [Dasel](https://daseldocs.tomwright.me/) to read itlist from `book.toml`:

```bash
dasel --file book.toml --read toml --write json "output.html.additional-js"
```

After inserting the required flyout files, assign the modified list to the `MDBOOK_OUTPUT__HTML__ADDITIONAL_JS` environment variable:

<details><summary>Click to expand the CMake implementation</summary>

```cmake
block(PROPAGATE ADDITIONAL_JS)
    execute_process(
        COMMAND ${Dasel_EXECUTABLE}
                --file book.toml
                --read toml
                --write json
                "output.html.additional-js"
        WORKING_DIRECTORY ${PROJ_OUT_REPO_BOOK_DIR}
        RESULT_VARIABLE RES_VAR
        OUTPUT_VARIABLE OUT_VAR OUTPUT_STRIP_TRAILING_WHITESPACE
        ERROR_VARIABLE  ERR_VAR ERROR_STRIP_TRAILING_WHITESPACE)
    if (RES_VAR EQUAL 0)
        set(JS_JSON_ARR "${OUT_VAR}")
    else()
        set(JS_JSON_ARR "[]")
    endif()
    set(FLYOUT_JS_LIST)
    list(APPEND FLYOUT_JS_LIST "current.js")
    list(APPEND FLYOUT_JS_LIST "../../config.js")
    list(APPEND FLYOUT_JS_LIST "../../flyout.js")
    foreach(FLYOUT_JS ${FLYOUT_JS_LIST})
        string(JSON JS_JSON_LEN LENGTH "${JS_JSON_ARR}")
        string(JSON JS_JSON_ARR SET "${JS_JSON_ARR}" ${JS_JSON_LEN} "\"${FLYOUT_JS}\"")
    endforeach()
    set(ADDITIONAL_JS "${JS_JSON_ARR}")
endblock()
set(ENV_MDBOOK_OUTPUT__HTML__ADDITIONAL_JS "${ADDITIONAL_JS}")
```

</details>
