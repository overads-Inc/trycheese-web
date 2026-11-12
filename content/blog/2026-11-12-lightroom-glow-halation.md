---
title: "Lightroom's new Glow tool: how to get real film halation"
slug: lightroom-glow-halation
description: "Lightroom's new Glow tool adds Halation, Bloom and Diffusion styles. What each one does, and the settings that make halation look like real film, not a filter."
date: 2026-11-12
topic: grain-and-halation
keyword: Lightroom Glow halation
tags: [halation, bloom, diffusion, lightroom, film grain, film looks]
sources:
  - title: "Adobe Help: Glow, Vignette, Grain, and Dehaze effects in Camera Raw (updated 10 November 2026)"
    url: https://helpx.adobe.com/camera-raw/desktop/edit-and-enhance-images/tone-and-color/vignette-grain-effects-camera-raw.html
  - title: "Adobe Community: Lightroom 10.0: Fix blinks, shoot tethered, and add cinematic glow (10 November 2026)"
    url: https://community.adobe.com/announcements-678/lightroom-10-0-fix-blinks-shoot-tethered-and-add-cinematic-glow-1654101
  - title: "Newsshooter: Adobe releases Lightroom Classic 16.0 and Lightroom 10.0 (10 November 2026)"
    url: https://www.newsshooter.com/2026/11/10/adobe-releases-lightroom-classic-16-0-and-lightroom-10-0-glow-vectorscope-ai-depth-masks-and-tethering-on-lightroom-desktop/
  - title: "Google Play: Snapseed"
    url: https://play.google.com/store/apps/details?id=com.niksoftware.snapseed
faq:
  - q: "Does Lightroom have a halation effect?"
    a: "Yes. Since Adobe's 10 November 2026 update, Lightroom's Effects panel has a Glow tool with a Halation style, which Adobe describes as a coloured halo around bright edges and light sources. Its Warmth slider runs from yellow to red."
  - q: "Is Glow available in Lightroom mobile?"
    a: "Yes. Newsshooter reports Glow is available in Lightroom Classic, Lightroom on desktop, and Lightroom on iPhone, iPad and Android, with the mobile app updated to version 12.0."
  - q: "What's the difference between Bloom, Diffusion and Halation in Lightroom?"
    a: "Adobe describes Bloom as a soft, even glow across highlights, Diffusion as a hazy softening across the whole frame, and Halation as a coloured halo around bright edges and light sources. Only Halation imitates the red glow film gives bright lights."
  - q: "Can I use different Glow styles in one photo?"
    a: "No. The style, Range, Spread and Warmth settings are shared across the whole photo and every mask. Masks can only change the Glow amount."
---

**Lightroom Glow halation** is finally a native option. Adobe's 10 November update added a Glow tool to Lightroom, with styles called Halation, Bloom and Diffusion, so you can add film-style glow without a plug-in.

That's good news, and also a trap. Halation is one of the easiest film traits to overdo, and Lightroom's sliders go a long way. Here's what each style does, how it maps to the real thing, and the settings that make it look like film rather than a filter.

## What's new: Glow in Lightroom

According to Newsshooter, Glow arrived in Lightroom Classic 16.0, Lightroom 10.0 on desktop and Lightroom mobile 12.0, and it works in Lightroom on iPhone, iPad and Android as well as on the desktop. Adobe's Camera Raw help page, which covers the same Glow controls, describes five styles:

| Style | What Adobe says it does | The real-world effect |
| --- | --- | --- |
| Bloom | A soft, even glow across highlights | Bloom, like [a Black Pro-Mist filter](/blog/black-pro-mist-filter-explained) |
| Diffusion | A hazy softening across the whole frame | Heavier diffusion filters |
| Halation | A coloured halo around bright edges and light sources | [Film halation](/blog/what-is-halation) |
| Motion | Streaks in one direction from the brightest highlights | Not a film effect |
| Streak | Streaks in two opposite directions | Not a film effect |

You'll see "six styles" in Adobe's announcement. Newsshooter's breakdown suggests the six are Lightroom Classic's new Glow presets, from Sheer and Dream to Cinematic Glow.

The sliders are where it gets interesting:

- **Range** sets which tones glow, from only the brightest highlights out to broader tones.
- **Spread** controls how far the glow reaches. Higher values make it wider and softer.
- **Warmth** shifts the colour. For Halation it runs from yellow to red. For Bloom and Diffusion it runs from cool to warm.
- **Direction** and **Softness** appear only for Motion and Streak.

One catch: Style, Range, Spread and Warmth are shared across the whole photo and every mask. A mask can only change the Glow amount, so you can't use Halation on the streetlights and Bloom on the sky in the same picture.

## How to make Halation look like film

Real halation follows the light. In our [halation explainer](/blog/what-is-halation) we list what separates the real thing from a sticker. Here's how that translates to Lightroom's sliders. Treat these as starting points, not presets:

1. **Keep Range low.** Real halation only appears around the brightest highlights. Start at the "brightest highlights" end and only widen it if the halo disappears.
2. **Push Warmth toward red.** On colour film the halo is red, shifting toward orange right at the hottest core. A yellow halo reads as bloom with a tint.
3. **Keep Spread tight.** Halation hugs the light source. A wide, soft spread drifts into bloom territory.
4. **Go easy on the amount.** On film, halation is easiest to see at night against dark backgrounds, and subtle in daylight. If a sunny portrait glows red, it's overcooked.
5. **Use masks to hold it back.** Since a mask can only change the amount, use one to turn the glow down on faces or bright skies, and leave it stronger around actual lights.

The quick test is the same as on film: a bare bulb should glow more than a lit window, and a white wall in daylight shouldn't glow at all.

## When to pick Bloom or Diffusion instead

Halation isn't always the right glow. Adobe's own suggestions for each style are a useful guide:

- **Bloom** for soft, airy scenes, like waterfalls and mist.
- **Diffusion** for dreamy landscapes and sunsets, where you want the whole frame softened.
- **Halation** for neon signs and night scenes, where strong lights sit against dark backgrounds.

As a rule of thumb: if the glow should be white and soft, choose Bloom. If it should hug a light in red, choose Halation.

## Add grain last, and keep it fine

Glow pairs naturally with Lightroom's Grain controls, in the same Effects panel. Adobe's help explains that Amount sets how much grain, Size sets the particle size, and Roughness sets how regular it looks. It also warns that a Size of 25% or higher can blur the image.

For a slow, clean film look, keep grain small and subtle. For a gritty night look, go bigger. Either way, check it at several zoom levels, and make sure it reads as texture rather than an overlay, as we explain in [film grain vs digital noise](/blog/film-grain-vs-digital-noise).

## On a phone

Because Glow is in Lightroom mobile, you can do all of this on an iPhone or an Android phone. If you'd rather not edit in Lightroom, Snapseed is a free alternative, with its own Halation and Bloom tools alongside [a free film camera](/blog/snapseed-camera-android).

Whatever you use, start with a good source photo. Halation needs bright lights against real darkness, so a night shot that hasn't had its shadows lifted to grey works far better. Here's [how to take night photos on your phone that look real](/blog/night-photos-on-phone).

## Where trycheese fits

Lightroom's Glow is an editing step. trycheese takes the opposite approach: its [film looks](/#looks) put red halation around the brightest highlights at the moment you take the photo, alongside grain and a soft highlight roll-off. There's [no live filter preview](/#in-the-moment) and no editing step afterwards. Blue, our cool night look, leans hardest on halation.

trycheese isn't out yet. It's coming to iPhone and Android together, free at launch. Until then, if you try Lightroom's new Halation, try it on a night street first. That's where you'll see whether it behaves like film.
