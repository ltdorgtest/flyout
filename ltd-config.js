"use strict";

var CONFIG_OPTIONS = {
  CONFIG_LANGUAGES: [
    ["en-us", "English"],
    ["de-de", "Deutsch"],
    ["fr-fr", "Français"],
    ["ja-jp", "日本語"],
    ["ko-kr", "한국인"],
    ["ru-ru", "Русский"],
    ["zh-cn", "简体中文"],
    ["zh-tw", "繁體中文"],
  ],
  CONFIG_VERSIONS: [
    ["master",    "master"],
    ["latest",    "latest"],
    ["stable",    "stable"],
    ["4.19",      "4.19"],
    ["4.18",      "4.18"],
    ["4.17",      "4.17"],
    ["4.16",      "4.16"],
    ["4.15",      "4.15"],
    ["4.14",      "4.14"],
    ["4.13",      "4.13"],
    ["4.12",      "4.12"],
    ["4.11",      "4.11"],
    ["4.10",      "4.10"],
    ["4.9",       "4.9"],
    ["4.8",       "4.8"],
    ["4.7",       "4.7"],
    ["4.6",       "4.6"],
    ["4.5",       "4.5"],
    ["4.4",       "4.4"],
    ["4.3",       "4.3"],
    ["4.2",       "4.2"],
    ["4.1",       "4.1"],
    ["4.0",       "4.0"],
    ["rolling",   "Rolling (dev)"],
    ["jazzy",     "Jazzy (latest)"],
    ["iron",      "Iron (EOL)"],
    ["humble",    "Humble"],
    ["galactic",  "Galactic (EOL)"],
    ["foxy",      "Foxy (EOL)"],
    ["eloquent",  "Eloquent (EOL)"],
    ["dashing",   "Dashing (EOL)"],
    ["crystal",   "Crystal (EOL)"],
    ["3.29",      "3.29"],
    ["3.28",      "3.28"],
    ["3.27",      "3.27"],
    ["3.26",      "3.26"],
    ["3.25",      "3.25"],
    ["3.24",      "3.24"],
    ["3.23",      "3.23"],
    ["3.22",      "3.22"],
    ["3.21",      "3.21"],
    ["3.20",      "3.20"],
    ["3.19",      "3.19"],
    ["3.18",      "3.18"],
    ["3.17",      "3.17"],
    ["3.16",      "3.16"],
    ["3.15",      "3.15"],
    ["3.14",      "3.14"],
    ["3.13",      "3.13"],
    ["3.12",      "3.12"],
    ["3.11",      "3.11"],
    ["3.10",      "3.10"],
    ["3.9",       "3.9"],
    ["3.8",       "3.8"],
    ["3.7",       "3.7"],
    ["3.6",       "3.6"],
    ["3.5",       "3.5"],
    ["3.4",       "3.4"],
    ["3.3",       "3.3"],
    ["3.2",       "3.2"],
    ["3.1",       "3.1"],
    ["3.0",       "3.0"],
    ["newline",   "newline"],       /* Newline */
    ["2.29",      "2.29"],
    ["2.28",      "2.28"],
    ["2.27",      "2.27"],
    ["2.26",      "2.26"],
    ["2.25",      "2.25"],
    ["2.24",      "2.24"],
    ["2.23",      "2.23"],
    ["2.22",      "2.22"],
    ["2.21",      "2.21"],
    ["2.20",      "2.20"],
    ["2.19",      "2.19"],
    ["2.18",      "2.18"],
    ["2.17",      "2.17"],
    ["2.16",      "2.16"],
    ["2.15",      "2.15"],
    ["2.14",      "2.14"],
    ["2.13",      "2.13"],
    ["2.12",      "2.12"],
    ["2.11",      "2.11"],
    ["2.10",      "2.10"],
    ["2.9",       "2.9"],
    ["2.8",       "2.8"],
    ["2.7",       "2.7"],
    ["2.6",       "2.6"],
    ["2.5",       "2.5"],
    ["2.4",       "2.4"],
    ["2.3",       "2.3"],
    ["2.2",       "2.2"],
    ["2.1",       "2.1"],
    ["2.0",       "2.0"],
  ],
  CONFIG_PROJECTS: [
    ["Home",    "https://www.ltdorgtest.org"],
    ["Crowdin", "https://ltdorgtest.crowdin.com/demo-docs-l10n"],
    ["GitHub",  "https://github.com/ltdorgtest/demo-docs-l10n"],
    ["GitCode", "https://gitcode.com/ltdorgtest/demo-docs-l10n"],
    ["GitFlic", "https://gitflic.ru/project/ltdorgtest/demo-docs-l10n"],
  ]
};
