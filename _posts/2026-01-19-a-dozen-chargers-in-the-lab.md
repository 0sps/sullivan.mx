---
layout: post
title: "A Dozen Chargers in the Lab"
date: 2026-01-18
tags: [technology]
---

## A Dozen chargers in the lab: apple is okay, but not the best

Hello! 
I have been inspired by Ken Shirriff to make a writeup of different USB Chargers you might find.

<p style="display: flex; gap: 10px;">
  <img src="/assets/images/1-apple-retail.png" alt="Image 1" style="width: 48%;">
  <img src="/assets/images/2-apple-retail.png" alt="Image 2" style="width: 48%;">
</p>

I tested a dozen chargers and i have some interesting opinions on them.

- Technology and programming
- Mathematics and algorithms
- Interesting problems and solutions
- Personal projects and experiments

## Code Examples

Here's a simple "Hello, World!" program in Python:

```python
def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("World")
```

## Formatting

You can use **bold text**, *italic text*, and `inline code`. Lists work great too:

1. First item
2. Second item
3. Third item

## Conclusion

This blog is built with Jekyll and deployed on Netlify. It uses a minimalist design inspired by clean, readable blogs that focus on content over flashy design.

Stay tuned for more posts!
<p>
<style>
  .device-scroller {
    display: flex;
    overflow-x: auto;
    gap: 25px;
    padding-bottom: 20px;
    -webkit-overflow-scrolling: touch;
  }
  .device-scroller::-webkit-scrollbar {
    height: 8px;
  }
  .device-scroller::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px;
  }
  .device-card {
    flex: 0 0 320px;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .device-images {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }
  .device-images a {
    width: 50%;
  }
  .device-images img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #eee;
  }
  .device-card figcaption {
    font-size: 0.9em;
    line-height: 1.5;
    color: #444;
  }
</style>

<div class="device-scroller">
  
  <figure class="device-card">
    <div class="device-images">
      <a href="/assets/images/apple-1.png" target="_blank">
        <img src="/assets/images/apple-1.png" alt="Apple 30W Test 1">
      </a>
      <a href="/assets/images/apple-2.png" target="_blank">
        <img src="/assets/images/apple-2.png" alt="Apple 30W Test 2">
      </a>
    </div>
    <figcaption>
      <strong>Apple 30W Retail:</strong> Advertised at 30W, actual measured power was 29.5W. Solid performance.
    </figcaption>
  </figure>

  <figure class="device-card">
    <div class="device-images">
      <a href="/assets/images/iphone-1.png" target="_blank">
        <img src="/assets/images/iphone-1.png" alt="iPhone Test 1">
      </a>
      <a href="/assets/images/iphone-2.png" target="_blank">
        <img src="/assets/images/iphone-2.png" alt="iPhone Test 2">
      </a>
    </div>
    <figcaption>
      <strong>iPhone 17 Pro:</strong> Over-performed! Advertised at 4.5W but pulled 5.4W during testing.
    </figcaption>
  </figure>

  </div>
  
<style>
  table {
    border-collapse: collapse;
    width: 100%;
    font-family: sans-serif;
  }
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  /* These classes control the colors and force the bold thickness */
  .bolt-5 { color: #004d00; font-weight: 900; -webkit-text-stroke: 1px #004d00; }
  .bolt-4 { color: #228B22; font-weight: 900; -webkit-text-stroke: 1px #228B22; }
  .bolt-3 { color: #32CD32; font-weight: 900; -webkit-text-stroke: 1px #32CD32; }
  .bolt-2 { color: #98FB98; font-weight: 900; -webkit-text-stroke: 1px #98FB98; }
  .bolt-1 { color: #FFD700; font-weight: 900; -webkit-text-stroke: 1px #FFD700; }
</style>

<table>
  <thead>
    <tr>
      <th>Charger</th>
      <th>Vpp (mV)</th>
      <th>Noise Rating (Graph 1)</th>
      <th>Ripple Rating (Graphs 2 & 3)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Eero 15W Charger</strong></td>
      <td>60mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Shargeek Macintosh Charger</strong></td>
      <td>152mV</td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Apple 30W Retail Charger</strong></td>
      <td>96mV</td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Apple HomePod Mini Charger</strong></td>
      <td>308mV</td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-2">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Vebner GaN 65W Charger</strong></td>
      <td>332mV</td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Govee Power Supply</strong></td>
      <td>164mV</td>
      <td><span class="bolt-2">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Counterfeit AT&T</strong></td>
      <td>260mV</td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Counterfeit Samsung</strong></td>
      <td>468mV</td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Amazon Kindle Charger</strong></td>
      <td>288mV</td>
      <td><span class="bolt-2">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-1">&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Counterfeit Chinese Wall Charger (USB A Only)</strong></td>
      <td>84mV</td>
      <td><span class="bolt-4">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Dealworthy Charger</strong></td>
      <td>212mV</td>
      <td><span class="bolt-2">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-2">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Anker 621 MAG GO 5000mAh Battery</strong></td>
      <td>36mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-4">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>iPhone 17 pro</strong></td>
      <td>136mV</td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>Macbook Pro M1</strong></td>
      <td>24mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>Anker ASPD053a</strong></td>
      <td>128mV</td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-3">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Apple 96W Macbook Charger</strong></td>
      <td>92mV</td>
      <td><span class="bolt-4">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-4">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>AOHI GaN Charger</strong></td>
      <td>72mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Anker 637 Magnetic Charging Station</strong></td>
      <td>76mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
    <tr>
      <td><strong>Spigen PowerArc ArcStation Pro</strong></td>
      <td>56mV</td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
      <td><span class="bolt-5">&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;&#x26A1;&#xFE0E;</span></td>
    </tr>
  </tbody>
</table>
</p>