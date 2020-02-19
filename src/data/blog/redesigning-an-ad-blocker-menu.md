---
title: Redesigning an ad blocker menu for UX and a11y
description: I take a look at a popular ad blocker extension's menu to see how it can be improved for usability and accessibility.
date: 2020-02-18
image:
  path: /twenty-twenty.jpg
  alt: ''
  width: 1200
  height: 900
  caption: ''
---

<!-- TODO:
- replace above image
- update title and/or file name?
-->

## Introduction

## Understanding the existing menu
For each button in the menu, I read the text contained in its hover tooltip, and the description of its intended functionality in the extension's documentation.

Some terminology:
Permanent: the setting will be preserved until it is disabled
Temporary: the setting will be preseved until the page is reloaded

| Icon                                                                                                                                                             | Tooltip                                                                                            | Functionality                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Blue line and circle style power symbol.](./assets/redesigning-an-ad-blocker-menu/icon-button-power.png)                                                       | Click to disable [ad blocker] for this site. Ctrl+click to disable [ad blocker] only on this page. | Clicking this button will permanently turn off the extension for the current site. Pressing the ctrl or cmd key while clicking this button will permanently turn off the extension for the current page. |
| ![Thunderbolt.](./assets/redesigning-an-ad-blocker-menu/icon-button-thunderbolt.png)                                                                             | Enter element zapper mode                                                                          | Clicking this button will activate element zapper mode. While in this mode, clicking on page elements will temporarily remove it from the page.                                                          |
| ![Eye dropper.](./assets/redesigning-an-ad-blocker-menu/icon-button-eye-dropper.png)                                                                             | Enter element picker mode                                                                          | Clicking this button will open an interactive menu for creating filters which can permanently remove elements from the site.                                                                             |
| ![A browser window-like rectangle containing 3 rows of a dot and wide line.](./assets/redesigning-an-ad-blocker-menu/icon-button-menu.png)                       | Open the logger                                                                                    | Clicking this button will open a logger, which details technical details about what the extension is doing.                                                                                              |
| ![3 rows of sliders (horizontal line with a handle).](./assets/redesigning-an-ad-blocker-menu/icon-button-sliders.png)                                           | Open the dashboard                                                                                 | Clicking this button will open the dashboard, where you can edit various extension settings and preferences.                                                                                             |
| ![2 sheets of paper with their top right corner folded down. One paper is offset over the other.](./assets/redesigning-an-ad-blocker-menu/icon-button-pages.png) | Click to block all popups on this site                                                             | Clicking this button will permanently block all pop-ups for the site.                                                                                                                                    |
| ![Several rectangles, likely meant to be a film strip.](./assets/redesigning-an-ad-blocker-menu/icon-button-film.png)                                            | Click to block large media elements on this site                                                   | Clicking this button will permanently block large media from loading on the site.                                                                                                                        |
| ![An eye with a diagonal line across it. There's also 3 dots at the bottom right corner.](./assets/redesigning-an-ad-blocker-menu/icon-button-crossed-eye.png)   | Click to disable cosmetic filtering on this site                                                   | Clicking this button will permanently display removed elements for the site.                                                                                                                             |
| ![The capital letter 'A' in a serif font.](./assets/redesigning-an-ad-blocker-menu/icon-button-letter-a.png)                                                     | Click to block remote fonts on this site                                                           | Clicking this button will permanently block remote fonts from loading on the site.                                                                                                                       |
| ![</>](./assets/redesigning-an-ad-blocker-menu/icon-button-code-tag.png)                                                                                         | Click to disable JavaScript on this site                                                           | Clicking this button will permanently disables JavaScript on the site.                                                                                                                                   |

## Identifying the problems

### Iconography
Many of the icons are unclear

Several icons look similar to each other:
- Sliders, logger, settings, film strip

The small icon size and no clear label makes them even harder to distinguish.

Familiar icons being re-used for other purposes:
- 'Copy'
- '(color) picker'
- 'thunderbolt'
- HTML

Bottom row icons get crossed with red x when activated. Double crossing out eye:
<!--
![An eye with a diagonal line across it, and a red X over that.](./assets/redesigning-an-ad-blocker-menu/icon-button-double-crossed-eye.png)
-->

### Tooltips
Takes several seconds to display the tooltip text, which is not always helpful on its own.
Accessibility issues.

### Complex controls
- Unclear which settings take priority over others
- Unclear which settings are tools vs. site-specific
- Extra information in the middle (requests blocked, domains connected) necessary? Can they be smaller?
- Even after spending time reading documentation, still don't totally understand.

## Applying the solutions
- Presume all functionality and information in the existing menu is actually important and required
- Group and label related items
- Avoid using similar icons, and icons without text
- Improve text
- Reduce complexity of controls (ctrl/cmd + click)

## Result
[a wireframe/mockup/prototype]
