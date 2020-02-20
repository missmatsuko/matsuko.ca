---
title: Redesigning an ad blocker menu for UX and a11y
description: I take a look at a popular ad blocker extension's menu to see how its usability and accessibility could be improved.
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
In this case study, I will analyze a UI element of a popular ad blocker browser extension. This case study is based on a real browser extension that I am a former user of. The UI element is a menu that is revealed after clicking the browser extension's icon in the browser's navigation bar.

I was inspired to study this UI element when I realized that I used it infrequently and with great difficulty. My thought was that if I, a web professional, found it difficult to use this menu, most other users must feel the same way.

It turns out that there are some very vocal users who like the menu exactly the way it is. I decided to publish this case study even though my recommendations were not accepted, if only to demonstrate my UX thinking and process.

Enjoy, if you want to!

## Understanding the existing menu
First of all, I set off to understand the existing menu. I found the menu confusing at first glance, and didn't find the tooltips very enlightening. I studied the extension's documentation to help me understand how to use the menu, and have recorded my findings below.

### Structure
![Ad blocker menu.](./assets/redesigning-an-ad-blocker-menu/existing-menu.png)

Looking at the the image of the menu, there are 5 distinct areas:

#### The power button
This is the big blue power icon at the top of the menu.

#### The tools
This is the row of 4 icons directly under the power button.

#### The number of requests blocked
This area is labelled 'requests blocked' and shows the number of requests blocked 'on this page' and 'since install' as both a number and a percentage.

#### The number of domains connected
This area is labelled 'domains connected' as a number 'out of' another number.

#### The per-site switches
This is the row of 5 icons at the bottom of the menu. Some of the icons have small numbers or ellipses on their bottom right.

### Functions
I recorded the icon, tooltip text, and functionality for each button in the menu.

| Icon                                                                                                                                                             | Tooltip                                                                                            | Functionality                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Blue line and circle style power symbol.](./assets/redesigning-an-ad-blocker-menu/icon-button-power.png)                                                       | Click to disable [ad blocker] for this site. Ctrl+click to disable [ad blocker] only on this page. | Clicking this button will permanently turn off the extension for the current site. Pressing the ctrl or cmd key while clicking this button will permanently turn off the extension for the current page. |
| ![Thunderbolt.](./assets/redesigning-an-ad-blocker-menu/icon-button-thunderbolt.png)                                                                             | Enter element zapper mode                                                                          | Clicking this button will activate element zapper mode. While in this mode, clicking on page elements will temporarily remove them from the page.                                                        |
| ![Eye dropper.](./assets/redesigning-an-ad-blocker-menu/icon-button-eye-dropper.png)                                                                             | Enter element picker mode                                                                          | Clicking this button will open an interactive menu for creating filters which can permanently remove elements from the site.                                                                             |
| ![A browser window-like rectangle containing 3 rows of a dot and wide line.](./assets/redesigning-an-ad-blocker-menu/icon-button-menu.png)                       | Open the logger                                                                                    | Clicking this button will open a logger, which details technical details about what the extension is doing.                                                                                              |
| ![3 rows of sliders (horizontal line with a handle).](./assets/redesigning-an-ad-blocker-menu/icon-button-sliders.png)                                           | Open the dashboard                                                                                 | Clicking this button will open the dashboard, where you can edit various extension settings and preferences.                                                                                             |
| ![2 sheets of paper with their top right corner folded down. One paper is offset over the other.](./assets/redesigning-an-ad-blocker-menu/icon-button-pages.png) | Click to block all popups on this site                                                             | Clicking this button will permanently block all pop-ups for the site.                                                                                                                                    |
| ![Several rectangles, likely meant to be a film strip.](./assets/redesigning-an-ad-blocker-menu/icon-button-film.png)                                            | Click to block large media elements on this site                                                   | Clicking this button will permanently block large media from loading on the site.                                                                                                                        |
| ![An eye with a diagonal line across it. There's also 3 dots at the bottom right corner.](./assets/redesigning-an-ad-blocker-menu/icon-button-crossed-eye.png)   | Click to disable cosmetic filtering on this site                                                   | Clicking this button will permanently display removed elements for the site.                                                                                                                             |
| ![The capital letter 'A' in a serif font.](./assets/redesigning-an-ad-blocker-menu/icon-button-letter-a.png)                                                     | Click to block remote fonts on this site                                                           | Clicking this button will permanently block remote fonts from loading on the site.                                                                                                                       |
| ![</>](./assets/redesigning-an-ad-blocker-menu/icon-button-code-tag.png)                                                                                         | Click to disable JavaScript on this site                                                           | Clicking this button will permanently disable JavaScript on the site.                                                                                                                                    |

## Identifying the problems

### Questions
Studying how the menu works brought up many questions in my mind:

#### Is this menu necessary?

Do most users install the ad blocker extension and leave it as-is, or do they make customizations and use its tools?

How many users use this menu, and how frequently do they use it?

#### Is all the information in the menu necessary?

How many users are interested in the 'requests blocked' and 'domains connected' areas of the menu?

Why are the figures presented in so many different ways?

Should all the figures be presented in the same format?

Does this information belong in this menu, or does it belong in another location?

#### Is all the functionality in the menu necessary?

Which functions do users use most?

Are there any functions that are missing?

#### Is the menu easily understood?

Do users unstand the difference between the 2 rows of icons?

Do users understand what each icon means?

Is it clear how the power button works with ctrl/cmd and clicking?

### User feedback
Although I did not perform formal user testing, I did receive user feedback through informal online discussions. Here I have grouped the feedback into themes.

#### Things that users find useful
- I like seeing the number of requests blocked on the page because I know that the ad blocker has prevented something from loading. It lets me know that the ad blocker is working, and I know that it may be the cause of my problem if the page is not working properly.
- I can use the tooltip to figure out what the buttons do.
- I use the power button to turn off ad blocking for the page. I think I've used the settings button to change my settings.

#### Things that users don't find useful
- I don't know why it would be useful to see the number of requests blocked since I've installed the browser extension.
- I don't know why it would be useful to see the percentage of requests blocked for either the page or since install.
- I don't find the number of domains connected useful. Maybe someone else would find it useful.
- I don't remember ever using this menu.

#### Things that users don't understand
- Several icons could be replaced with more suitable ones.
- The power button looks like a logo.
- I don't know what any of the buttons on this menu do.
- I don't know what the percentage means.

#### Users familiar with the menu are resistant to it changing
- I don't need or want the icons to change because I use them through muscle memory.
- Tens of millions of users, including myself, are familiar with the menu. It is better to keep the menu the same so that existing users don't get confused.

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

<!--
## Result
[a wireframe/mockup/prototype]
-->
