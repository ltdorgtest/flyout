# Distributed under the OSI-approved BSD 3-Clause License.
# See accompanying file LICENSE.txt for details.

cmake_minimum_required(VERSION 3.25)
project(demo-flyout NONE)


set(LANGTAG_LIST
    en-us   #[[ English             ]]
    # ja-jp   #[[ Japanese            ]]
    # ko-kr   #[[ Korean              ]]
    # ru-ur   #[[ Russian             ]]
    # zh-cn   #[[ Simplified Chinese  ]]
    zh-tw   #[[ Traditional Chinese ]]
    )

set(VERSION_LIST
    master stable latest
    # 3.10 3.9 3.8 3.7 3.6 3.5 3.4 3.3 3.2 3.1 3.0
    # 2.2 2.1 2.0
    )

set(SUBDIR_LIST
    "about"
    "projects"
    "blogs"
    "faqs"
    )

# set(DEMO_ROOT_DIR       "${CMAKE_SOURCE_DIR}/demo")
# set(LTD_CONFIG_JS_PATH  "${DEMO_ROOT_DIR}/ltd-config.js")
# set(LTD_FLYOUT_JS_PATH  "${DEMO_ROOT_DIR}/ltd-flyout.js")

# configure_file(
#     "${CMAKE_SOURCE_DIR}/ltd-config.js"
#     "${DEMO_ROOT_DIR}/ltd-config.js"
#     COPYONLY)

# configure_file(
#     "${CMAKE_SOURCE_DIR}/ltd-flyout.js"
#     "${DEMO_ROOT_DIR}/ltd-flyout.js"
#     COPYONLY)

# configure_file(
#     "${CMAKE_SOURCE_DIR}/ltd-icon.svg"
#     "${DEMO_ROOT_DIR}/ltd-icon.js"
#     COPYONLY)

# foreach(LANGTAG ${LANGTAG_LIST})
#     foreach(VERSION ${VERSION_LIST})
#         set(CURRENT_LANGUAGE    "${LANGTAG}")
#         set(CURRENT_VERSION     "${VERSION}")
#         set(LTD_CURRENT_JS_PATH "${DEMO_ROOT_DIR}/${CURRENT_LANGUAGE}/${CURRENT_VERSION}")
#         foreach(SUBDIR ${SUBDIR_LIST})
#             configure_file(
#                 "${CMAKE_SOURCE_DIR}/index.html.in"
#                 "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/${SUBDIR}/index.html"
#                 @ONLY)
#         endforeach()
#         configure_file(
#             "${CMAKE_SOURCE_DIR}/index.html.in"
#             "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/index.html"
#             @ONLY)
#         configure_file(
#             "${CMAKE_SOURCE_DIR}/ltd-current.js.in"
#             "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/ltd-current.js"
#             @ONLY)
#     endforeach()
# endforeach()


set(DEMO_ROOT_DIR "${CMAKE_SOURCE_DIR}/demo")

configure_file(
    "${CMAKE_SOURCE_DIR}/ltd-config.js"
    "${DEMO_ROOT_DIR}/ltd-config.js"
    COPYONLY)

configure_file(
    "${CMAKE_SOURCE_DIR}/ltd-flyout.js"
    "${DEMO_ROOT_DIR}/ltd-flyout.js"
    COPYONLY)

configure_file(
    "${CMAKE_SOURCE_DIR}/ltd-icon.svg"
    "${DEMO_ROOT_DIR}/ltd-icon.svg"
    COPYONLY)

foreach(LANGTAG ${LANGTAG_LIST})
    foreach(VERSION ${VERSION_LIST})

        set(LTD_CONFIG_JS_PATH  "${DEMO_ROOT_DIR}/ltd-config.js")
        set(LTD_FLYOUT_JS_PATH  "${DEMO_ROOT_DIR}/ltd-flyout.js")
        set(LTD_CURRENT_JS_PATH "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/ltd-current.js")

        set(CURRENT_LANGUAGE    "${LANGTAG}")
        set(CURRENT_VERSION     "${VERSION}")
        set(CURRENT_DIRECTORY   "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}")
        file(RELATIVE_PATH LTD_CONFIG_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_CONFIG_JS_PATH}")
        file(RELATIVE_PATH LTD_FLYOUT_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_FLYOUT_JS_PATH}")
        file(RELATIVE_PATH LTD_CURRENT_JS_PATH_REL "${CURRENT_DIRECTORY}" "${LTD_CURRENT_JS_PATH}")
        configure_file(
            "${CMAKE_SOURCE_DIR}/index.html.in"
            "${CURRENT_DIRECTORY}/index.html"
            @ONLY)
        configure_file(
            "${CMAKE_SOURCE_DIR}/ltd-current.js.in"
            "${CURRENT_DIRECTORY}/ltd-current.js"
            @ONLY)
        message(STATUS "---------------------------------------------------------")
        message(STATUS "CURRENT_LANGUAGE        = ${CURRENT_LANGUAGE}")
        message(STATUS "CURRENT_VERSION         = ${CURRENT_VERSION}")
        message(STATUS "CURRENT_DIRECTORY       = ${CURRENT_DIRECTORY}")
        message(STATUS "LTD_CONFIG_JS_PATH_REL  = ${LTD_CONFIG_JS_PATH_REL}")
        message(STATUS "LTD_FLYOUT_JS_PATH_REL  = ${LTD_FLYOUT_JS_PATH_REL}")
        message(STATUS "LTD_CURRENT_JS_PATH_REL = ${LTD_CURRENT_JS_PATH_REL}")

        # foreach(SUBDIR ${SUBDIR_LIST})
        #     set(CURRENT_DIRECTORY   "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/${SUBDIR}")
        #     file(RELATIVE_PATH LTD_CONFIG_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_CONFIG_JS_PATH}")
        #     file(RELATIVE_PATH LTD_FLYOUT_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_FLYOUT_JS_PATH}")
        #     file(RELATIVE_PATH LTD_CURRENT_JS_PATH_REL "${CURRENT_DIRECTORY}" "${LTD_CURRENT_JS_PATH}")
        #     configure_file(
        #         "${CMAKE_SOURCE_DIR}/index.html.in"
        #         "${CURRENT_DIRECTORY}/index.html"
        #         @ONLY)
        #     set(CURRENT_LANGUAGE  "${LANGTAG}")
        #     set(CURRENT_VERSION   "${VERSION}")
        #     configure_file(
        #         "${CMAKE_SOURCE_DIR}/ltd-current.js.in"
        #         "${CURRENT_DIRECTORY}/ltd-current.js"
        #         @ONLY)
        #     message(STATUS "CURRENT_DIRECTORY       = ${CURRENT_DIRECTORY}")
        #     message(STATUS "LTD_CONFIG_JS_PATH_REL  = ${LTD_CONFIG_JS_PATH_REL}")
        #     message(STATUS "LTD_FLYOUT_JS_PATH_REL  = ${LTD_FLYOUT_JS_PATH_REL}")
        #     message(STATUS "LTD_CURRENT_JS_PATH_REL = ${LTD_CURRENT_JS_PATH_REL}")
        #     message(STATUS "CURRENT_LANGUAGE        = ${CURRENT_LANGUAGE}")
        #     message(STATUS "CURRENT_VERSION         = ${CURRENT_VERSION}")
        # endforeach()

    endforeach()
endforeach()


# set(DEMO_ROOT_DIR       "${CMAKE_SOURCE_DIR}/demo")
# set(LTD_CONFIG_JS_PATH  "${DEMO_ROOT_DIR}/ltd-config.js")
# set(LTD_FLYOUT_JS_PATH  "${DEMO_ROOT_DIR}/ltd-flyout.js")
# set(LTD_CURRENT_JS_PATH "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/ltd-current.js")

# set(CURRENT_DIRECTORY   "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}")
# file(RELATIVE_PATH LTD_CONFIG_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_CONFIG_JS_PATH}")
# file(RELATIVE_PATH LTD_FLYOUT_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_FLYOUT_JS_PATH}")
# file(RELATIVE_PATH LTD_CURRENT_JS_PATH_REL "${CURRENT_DIRECTORY}" "${LTD_CURRENT_JS_PATH}")
# message(STATUS "CURRENT_DIRECTORY       = ${CURRENT_DIRECTORY}")
# message(STATUS "LTD_CONFIG_JS_PATH_REL  = ${LTD_CONFIG_JS_PATH_REL}")
# message(STATUS "LTD_FLYOUT_JS_PATH_REL  = ${LTD_FLYOUT_JS_PATH_REL}")
# message(STATUS "LTD_CURRENT_JS_PATH_REL = ${LTD_CURRENT_JS_PATH_REL}")
# foreach(SUBDIR ${SUBDIR_LIST})
#     set(CURRENT_DIRECTORY   "${DEMO_ROOT_DIR}/${LANGTAG}/${VERSION}/${SUBDIR}")
#     file(RELATIVE_PATH LTD_CONFIG_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_CONFIG_JS_PATH}")
#     file(RELATIVE_PATH LTD_FLYOUT_JS_PATH_REL  "${CURRENT_DIRECTORY}" "${LTD_FLYOUT_JS_PATH}")
#     file(RELATIVE_PATH LTD_CURRENT_JS_PATH_REL "${CURRENT_DIRECTORY}" "${LTD_CURRENT_JS_PATH}")

#     message(STATUS "CURRENT_DIRECTORY       = ${CURRENT_DIRECTORY}")
#     message(STATUS "LTD_CONFIG_JS_PATH_REL  = ${LTD_CONFIG_JS_PATH_REL}")
#     message(STATUS "LTD_FLYOUT_JS_PATH_REL  = ${LTD_FLYOUT_JS_PATH_REL}")
#     message(STATUS "LTD_CURRENT_JS_PATH_REL = ${LTD_CURRENT_JS_PATH_REL}")
# endforeach()
