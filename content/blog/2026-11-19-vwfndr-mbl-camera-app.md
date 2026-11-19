---
title: "VWFNDR + MBL 2.0: the Android camera that skips processing"
slug: vwfndr-mbl-camera-app
description: "VWFNDR + MBL is a free Android camera app that saves unprocessed Bayer RAW and a graded JPEG. What version 2.0 adds, how it works and how it compares."
date: 2026-11-19
topic: android-film-cameras
keyword: VWFNDR MBL
tags: [android, camera app, raw, film looks, phone photography, content credentials]
sources:
  - title: "Google Play: VWFNDR + MBL (updated 11 November 2026)"
    url: https://play.google.com/store/apps/details?id=com.vwfndr.mbl
  - title: "9to5Google: The Android camera app that doesn't overprocess adds new color grading sets, expands to iPhone (18 November 2026)"
    url: https://9to5google.com/2026/11/18/vwfndr-mbl-camera-app-color-grading-android-iphone-release/
  - title: "PetaPixel: VWFNDR MBL Is a New Android Camera App and an Actual Camera Is In the Works (19 May 2026)"
    url: https://petapixel.com/2026/05/19/vwfndr-mbl-is-a-new-android-camera-app-and-an-actual-camera-is-in-the-works/
  - title: "Google Play: Snapseed"
    url: https://play.google.com/store/apps/details?id=com.niksoftware.snapseed
  - title: "Lux: Process Zero: The Anti-Intelligent Camera (14 August 2024)"
    url: https://www.lux.camera/introducing-process-zero-for-iphone/
faq:
  - q: "What is VWFNDR + MBL?"
    a: "It's an Android camera app from Tokyo studio VWFNDR that saves every shot as an unprocessed Bayer RAW DNG plus a graded JPEG. It skips frame stacking, and signs both files with Content Credentials when you take the picture."
  - q: "Is VWFNDR + MBL free?"
    a: "It's free to download on Google Play, with in-app purchases. PetaPixel reported it as free at launch in May 2026."
  - q: "What's new in VWFNDR + MBL 2.0?"
    a: "Version 2.0 adds three grades for the JPEG it saves alongside the RAW file: Natural, Nihon and B+W. The release also reworks the capture pipeline, and an iPhone version is on the way with support for the iPhone 18 Pro's variable aperture."
  - q: "Does VWFNDR + MBL work on every Android phone?"
    a: "Not every feature. The Play Store listing says Bayer RAW, manual controls and lens switching depend on what your phone's camera supports. VWFNDR's samples at launch included Pixel, Xiaomi, Nothing and Leitz phones."
---

If you've ever wished your Android phone would just take the picture, **VWFNDR + MBL** is worth a look. It's a camera app that saves every shot as an unprocessed RAW file, skips the frame stacking that makes phone photos look overcooked, and renders a graded JPEG alongside.

Version 2.0 landed this week. As 9to5Google reported on 18 November, it adds three colour grades and brings the app to iPhone for the first time. Here's what it does, what's new, and how it compares with other ways to get a less processed, more filmic photo on Android.

## What is VWFNDR + MBL?

VWFNDR is a design studio founded in Tokyo. It launched MBL on Android in May 2026, and PetaPixel reported at the time that the studio sees it as the software foundation for a real compact camera it wants to build.

The Play Store listing sums up the approach:

- **One capture, no frame stacking.** The app takes a single frame instead of merging several, so there's no baked-in look.
- **Unprocessed Bayer RAW.** Every shot is saved as a DNG holding the sensor's own data.
- **A graded JPEG alongside.** You get a ready-to-share file without editing the RAW.
- **Manual or automatic.** Shutter, focus and exposure modes are on screen, with six aspect ratios and support for the phone's hardware buttons.
- **Content Credentials.** Both files are signed at capture with C2PA provenance data, so anyone can check when and how a photo was taken, and whether it's been altered.

"Bayer RAW" is the key phrase. It means the file holds what each photosite under the colour filter recorded, before the phone's usual processing. If that's new to you, here's [what a Bayer filter is](/blog/what-is-a-bayer-filter) and why it matters.

## What's new in version 2.0

The headline is grading. MBL still records the untouched RAW file, but the JPEG it saves alongside now uses one of three grades: **Natural**, **Nihon** or **B+W**.

VWFNDR says the grading isn't a fixed lookup table. It adapts across the frame, like RAW development software, so detail holds in the highlights and shadows. The Play Store notes for 2.0 also mention a reworked capture pipeline, more accurate clipping in priority modes and continuous USB backups.

The other news is, as 9to5Google put it, a rare reversal: MBL came to Android first, and is only now heading to iPhone. 9to5Google says the iPhone version supports the iPhone 18 Pro's variable aperture, which we explain in [what it really changes](/blog/iphone-18-pro-variable-aperture), as well as Content Credentials.

## Why "no processing" matters

Most phone cameras merge several frames for every photo, then sharpen and smooth the result. That's how they rescue tricky light, and it's also [why phone photos look overprocessed](/blog/why-phone-photos-look-overprocessed): flat contrast, crunchy edges, waxy texture.

MBL goes the other way. PetaPixel reported no image stacking and no tone mapping: one frame, and a RAW file left alone. The trade-off is the same one Lux describes for single-frame shooting on iPhone: you get honest texture and real shadows, but you lose the phone's ability to rescue very high-contrast or very dark scenes by stacking frames. Expect more visible noise in low light, which reads as grain when it's fine and even, as we explain in [film grain vs digital noise](/blog/film-grain-vs-digital-noise).

One caveat from the listing itself: Bayer RAW, manual controls and lens switching depend on what your phone's camera supports. Some phones will get more out of MBL than others.

## Why Content Credentials matter

Content Credentials are a signed record, inside the file, of when and how a photo was taken, based on the open C2PA standard. The Play Store listing frames them as a response to a world of generated and heavily processed images: a way to keep the result traceable.

VWFNDR told PetaPixel at launch that it was only the fourth company to reach C2PA Level 2 conformance, and the second, after Google, to support Content Credentials in DNG files. That's the company's own claim, but it's an unusual focus for a camera app.

## How MBL compares on Android

| App | What it does | Look applied | Price |
| --- | --- | --- | --- |
| VWFNDR + MBL | Single-frame Bayer RAW plus a graded JPEG | Natural, Nihon or B+W on the JPEG | Free, with in-app purchases |
| Snapseed Camera | Shoots through film styles, editable later | 11 film styles | Free |
| Built-in phone looks | Pixel Camera Looks, Galaxy My Filters and more | Depends on the phone | Built in |
| Film camera apps | Film looks rendered at capture | Varies by app | Varies |

Snapseed is the easiest free route to a film look, and our [Snapseed Camera guide](/blog/snapseed-camera-android) covers it. If you'd rather use what's on your phone already, see [which Android phones have film looks built in](/blog/android-phones-with-film-looks). MBL is the pick if you want a clean, single-frame RAW to start from. On iPhone, Chromagraph takes a similar raw-first approach, as we covered in [Rian Johnson's Chromagraph Camera](/blog/chromagraph-camera-iphone).

## Where trycheese fits

MBL and trycheese share a starting belief: phone photos are better when the camera does less to them. We take that somewhere different. trycheese's [film looks](/#looks) bake grain, halation and a filmic tone curve into the photo at the shutter, with [no live filter preview](/#in-the-moment), so you get a finished film-style image rather than a RAW file to develop. And like MBL, we treat Android as a first-class platform.

trycheese isn't out yet. It's coming to Android and iPhone together, free at launch. In the meantime, if you've been frustrated by how your phone renders a scene, MBL's single-frame RAW is a very good way to see what your sensor actually captured.
