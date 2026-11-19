---
title: "What is a Bayer filter, and could HoloCoder replace it?"
slug: what-is-a-bayer-filter
description: "What is a Bayer filter? How your phone's sensor sees colour, why it wastes light, how film does it differently, and what Metalenz's HoloCoder claims to fix."
date: 2026-11-18
updated: 2026-11-19
topic: phone-photography
keyword: what is a Bayer filter
tags: [phone photography, image sensor, bayer filter, low light, digital noise, film looks]
sources:
  - title: "Metalenz: Metalenz Acquires PxE Imaging, Expanding Its Perception Platform (11 November 2026)"
    url: https://metalenz.com/metalenz-acquires-pxe-imaging-expanding-its-perception-platform-to-bring-new-insights-to-ai/
  - title: "PetaPixel: New Sensor Tech Could Replace Bayer Color Filter and Transform Mobile Photography (11 November 2026)"
    url: https://petapixel.com/2026/11/11/new-sensor-tech-could-replace-bayer-color-filter-and-transform-mobile-photography/
  - title: "Cambridge in Colour: Understanding Digital Camera Sensors"
    url: https://www.cambridgeincolour.com/tutorials/camera-sensors.htm
  - title: "Canon Europe: Noise reduction options explained"
    url: https://www.canon-europe.com/pro/stories/noise-reduction-low-light/
faq:
  - q: "What is a Bayer filter?"
    a: "It's the grid of tiny red, green and blue filters laid over almost every digital camera sensor. Each pixel sees only one of the three colours, and the camera works out full colour for every pixel afterwards, a step called demosaicing."
  - q: "How much light does a Bayer filter block?"
    a: "A lot. Metalenz says Bayer filters absorb about 60% of incoming light, and Cambridge in Colour explains that because each photosite captures only one of three primary colours, the sensor discards roughly two thirds of the light."
  - q: "What is HoloCoder?"
    a: "It's a technology from PxE Imaging, which Metalenz acquired in November 2026. It's a layer patterned onto the sensor that sorts light by wavelength without absorbing it, which Metalenz says delivers 2.5 times more light to a standard sensor, plus depth information."
  - q: "When will HoloCoder be in phones?"
    a: "Nothing has been announced. PetaPixel reports it could reach the market as soon as the end of next year, and Metalenz's announcement doesn't name any phone makers. The 2.5x figure is the company's own claim."
---

**What is a Bayer filter?** It's the mosaic of tiny red, green and blue filters sitting over almost every camera sensor, including the one in your phone. Each pixel sees only one colour, the camera fills in the rest, and a big share of the light never gets used at all.

That last part is why a startup's announcement on 11 November turned heads. Metalenz bought PxE Imaging, whose HoloCoder technology aims to replace the Bayer filter and, it says, deliver 2.5 times more light to the sensor. Here's how today's sensors see colour, why that matters for your photos, and what to make of the claim.

## How a Bayer filter works

A camera sensor is a grid of millions of tiny light wells, or photosites. On their own, they only measure how much light arrives, not what colour it is, which would give you a black and white image.

To see colour, each photosite gets a filter that only lets one colour through. Cambridge in Colour's sensor tutorial explains the standard pattern, the Bayer array:

- **Rows alternate** between red and green filters, and green and blue filters.
- **There are twice as many green filters** as red or blue, because our eyes are most sensitive to green.
- **Each pixel records one colour.** The camera then estimates the other two for every pixel, a process called demosaicing.

It's a clever system, and it's why nearly every digital camera today works this way. Some phone apps now let you save that raw Bayer data untouched, like [VWFNDR + MBL on Android](/blog/vwfndr-mbl-camera-app). But it has a cost.

## Why a Bayer filter costs you light

A filter works by blocking the colours it doesn't pass. Cambridge in Colour notes that because each photosite captures just one of three primary colours, the sensor discards roughly two thirds of the incoming light. Metalenz puts it at about 60% absorbed.

Less light means a weaker signal compared with the sensor's noise. Canon explains that's why noise shows up in dim scenes and shadows: there's less image information relative to the noise. On a phone, the software fights back by merging several frames and smoothing the result, which is a big part of [why phone photos look overprocessed](/blog/why-phone-photos-look-overprocessed), and why [night shots can look so waxy](/blog/night-photos-on-phone).

Two more quirks of the system: Cambridge in Colour points out that the green channel is the least noisy, because the Bayer pattern has twice as many green photosites. And demosaicing can be fooled by very fine patterns, producing moiré: repeating colour artefacts that have nothing to do with the scene.

## How film handles colour instead

Colour film also filters light, but it stacks the job rather than splitting it into a mosaic. As we explain in [what is halation](/blog/what-is-halation), colour film records blue, green and red in separate layers, one on top of another, so every point on the frame gets a reading for each colour.

That isn't a free lunch either: film has its own grain and its own limits. But it's why film never had demosaicing artefacts, and why its texture comes from grain spread through the image rather than a grid of single-colour pixels. Cambridge in Colour notes that some digital sensors, like Foveon, also capture all three colours at each location, but the Bayer array remains by far the most common.

## What HoloCoder claims to do

According to Metalenz's announcement, PxE's HoloCoder is patterned directly onto the sensor and uses the wave nature of light to sort it by wavelength, instead of absorbing the colours it doesn't want. The company says that:

- **It removes the need for a Bayer filter**, sorting light without absorption.
- **It delivers 2.5 times more light** to a standard image sensor.
- **It captures depth as well as colour**, from a single camera.

Metalenz's co-founder Rob Devlin told WIRED, as PetaPixel reported, that once a sensor absorbs that light and the information is lost, you can't really buy it back with software. That's the pitch in a sentence.

Some quick maths for context: 2.5 times the light is about 1.3 stops. The iPhone 18 Pro's faster lens, by comparison, gains about half a stop over the iPhone 17 Pro, as we worked out in [what its variable aperture really changes](/blog/iphone-18-pro-variable-aperture). If HoloCoder's claim holds, it's a bigger jump than phone makers usually manage in a year.

## What to keep in mind

This is early. A few honest caveats:

1. **The 2.5x figure is Metalenz's own claim.** We haven't seen independent testing.
2. **No phones are announced.** Metalenz's release doesn't name any phone makers. PetaPixel reports the technology could reach the market as soon as the end of next year.
3. **It isn't a film look.** More light should mean cleaner files and less heavy processing, but the look still comes from what happens next: the tone curve, the colour and the grain.
4. **It can't fix bad light.** Even 1.3 extra stops won't turn a dim room into daylight. Where you stand and which way you face still matter more than any sensor.

## Where trycheese fits

trycheese works with the sensors phones have today. Its [film looks](/#looks) put grain, halation and a soft highlight roll-off into the photo at the shutter, with [no live filter preview](/#in-the-moment). If sensors start catching more light, that's good news for every camera app, ours included.

trycheese isn't out yet. It's coming to iPhone and Android together, free at launch. Until better sensors arrive, the oldest trick still works best: give your phone more light to begin with.
