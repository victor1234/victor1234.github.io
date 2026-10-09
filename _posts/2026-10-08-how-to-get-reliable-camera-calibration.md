---
title: "How to Get Reliable Camera Calibration"
image: /images/posts/camera-calibration.jpg
linkedin_post_url: https://lnkd.in/p/e25Yi9zv
excerpt: "Practical recommendations from more than 10 years of camera calibration: pattern coverage, edge distortion, marker size, and detection pitfalls."
---

![Calibration checkerboard with circular markers and a red overlay reading “No Checkerboard Detected” and “Searching for: 11×14 pattern”.]({{ '/images/posts/camera-calibration.jpg' | relative_url }})

I started calibrating cameras almost as soon as I got into computer vision, more than 10 years ago.

I’ve calibrated webcams, photo cameras, stereo rigs, professional global-shutter cameras with shutter synchronization, and run multi-camera calibration for hundreds of cheap CCTV cameras without synchronization and with drifting timers, etc.
So yes, I’ve built up some experience along the way.

In this series of posts, I’ll be creating my own calibration toolkit.

But for now, I’ll start with some practical recommendations on calibration:

- Capture a pattern from different angles.
- Try to make it occupy as much of the frame as possible.
- Find the optimal number of squares—the more, the better, up to the point where detection accuracy starts to drop.
- The strongest distortion is near the image edges, described by higher-order polynomial terms (if you’re using the corresponding camera model, of course). Without enough points near the edges, estimation will be poor and error will be high because of the higher degree.
- Measure the actual marker size after printing or creating the pattern.
- To get more points near the frame edges, use patterns that can still be detected even when partially out of view.

## Use ChArUco boards with caution

- First, the embedded 2D barcodes inside each cell prevent you from making them small enough to achieve a high cell count.
- Second, OpenCV’s detection has been unstable. I ran into these issues a couple of years ago and opened a few tickets:
  - <https://lnkd.in/ed69uv4r>
  - <https://lnkd.in/eVRkBb42>
  - <https://lnkd.in/e3G39E9e>

Looks like OpenCV’s Radon checkerboard detection is also buggy! I’ll be digging into that.
