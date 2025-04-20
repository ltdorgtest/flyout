# Distributed under the OSI-approved BSD 3-Clause License.
# See accompanying file LICENSE.txt for details.

cmake_minimum_required(VERSION 3.25)
project(demo-flyout NONE)


set(LANGUAGE_LIST
    en-us
    ja-jp
    ko-kr
    ru-ur
    zh-cn
    zh-tw)

set(VERSION_LIST
    master
    3.10 3.9 3.8 3.7 3.6 3.5 3.4 3.3 3.2 3.1 3.0
    2.2
    2.1
    2.0)

foreach(LANGUAGE ${LANGUAGE_LIST})
    foreach(VERSION ${VERSION_LIST})
        set(CURRENT_LANGUAGE  "${LANGUAGE}")
        set(CURRENT_VERSION   "${VERSION}")
        configure_file(
            "${CMAKE_SOURCE_DIR}/index.html.in"
            "${CMAKE_SOURCE_DIR}/demo/${LANGUAGE}/${VERSION}/index.html"
            @ONLY)
        configure_file(
            "${CMAKE_SOURCE_DIR}/ltd-current.js.in"
            "${CMAKE_SOURCE_DIR}/demo/${LANGUAGE}/${VERSION}/ltd-current.js"
            @ONLY)
    endforeach()
endforeach()
