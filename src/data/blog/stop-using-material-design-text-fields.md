---
title: Stop using Material Design text fields!
description: Why you shouldn't use or imitate the text fields from Google's Material Design UI library.
date: 2020-02-24
image:
  path: /thinking-about-material-design.png
  alt: The thinking face emoji looking at the Material Design logo.
  width: 1200
  height: 745
  caption: ''
---

<!--
  TODO:
  - Update image
  - Update date?
  - Add an introduction?
-->


## What's wrong with Material Design text fields?
<!-- TODO -->

### Disabled fields don't look disabled
- Hard to tell what's disabled vs. inactive, until you click into them

### Floating labels suck
Nielsen Norman Group has [a great article about why placeholders and floating labels in form fields are harmful](https://www.nngroup.com/articles/form-design-placeholders/). Let's take a look at some examples of these with Google Material Design's form fields.

#### Hard to tell which fields are empty
- Hard to tell which fields are empty
- Auto-fill

#### Limited space for the label
- Limited space for form label, especially considering localization and custom style sheets
- Also why you should put your label above the field, rather than to the side of it

#### Hard to read the label
- The label becomes small and harder to read when floating
- Again, custom style sheets

## But Google uses it!
So if Google jumped off a cliff, you would, too?

Jokes aside, this is the most common responses I get when I advise people not to use form fields like those in Google's Material Design UI library. It's a good point, of course. Google is a huge company with extensive resources. They **should** be able to create user interfaces that are accessible, usable, and beautiful. I don't know what's going on over there in Google land, but I'm guessing this kind of thing just isn't a priority for them. It's a shame that they've published a UI library with components like this, because so many others will use them and reference them for their own UIs.

They are making improvements though... I think. Google's Material Design form fields used to stray even more from conventional form fields. It was updated in 2017 after user testing, as reported in their Google Design blog post, [The Evolution of Material Design’s Text Fields](https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03). The article doesn't give much detail about the alternatives they tested, but I am confident that more conventional style form fields would do better in user testing than Material Design form fields.

Additionally, Google actually doesn't use Material Design forms for all their forms. Although they do seem to be expanding their use of Material Design style forms, I've still mostly been seeing them on very small forms where it's pretty likely that the user already knows what kind of information they will be entering into the form.

Google is using Material Design text fields on Gmail's login page. The log-in form actually only has a single field to start with: Email or phone. Users that are seeing this form probably got to this page intentionally, have logged in before, and are already expecting to enter their login credentials.

![Gmail login screen which has 1 field: "Email or phone".](./assets/stop-using-material-design-text-fields/gmail-login.png)

But if you look at what the settings page for Gmail looks like, it's a much more conventional form design. Here is just a small section of Gmail's settings form, which configures a vacation responder message. The form UI here is much more conventional, with bold, persistent labels and clearly outlined text inputs.

![Gmail's vacation responder settings area. There are several fields. Some are prefilled.](./assets/stop-using-material-design-text-fields/gmail-vacation-responder.png)

## So what can I use?
You really need to become familiar with the characteristics of usable forms before using *any* UI library for them.

As I've shown, you can't rely on UI libraries to get form fields right, even if they are popular and backed by giants. Additionally, most UI libraries, and even browser native form fields, will allow options or combinations of options that you shouldn't use.

Learning about usable form design and form accessibility will enable you to find libraries that work (maybe with a little tweaking), and know how to use them without harming usability and accessibility. It will also help if you end up creating your own UI, should you choose to go down that route.

[Adam Silver's book, Form Design Patterns](https://formdesignpatterns.com/), is a fantastic resource for learning all about usable forms. There's also [an excerpt published on Smashing Magazine](https://www.smashingmagazine.com/2018/10/form-design-patterns-excerpt-a-registration-form/), in case you want to check that out before getting the book. I would say the overarching theme is: make your form fields look like form fields. If they look and behave like browser native form fields, they're probably in better shape than Material Design form fields.

[WebAIM's Creating Accessible Forms page](https://webaim.org/techniques/forms/) is a great place to learn more about the technical details of creating accessible forms.

## I don't have time for all that!
That's too bad, but I totally get that sometimes you are on a tight deadline and just can't do anything about it.

I highly encourage you to do the research when you're less swamped, but here are my top tips for the time being:
- **Don't** use placeholder text.
- **Don't** use disabled form fields and buttons.
- **Don't** make multi-column forms.
- **Do** make sure labels and instructions are always visible.
- **Do** put your labels and instructions above their fields.
- **Do** make sure your labels, inputs, and any help text are associated properly.
- **Do** make sure all text meets WCAG colour contrast requirements.
