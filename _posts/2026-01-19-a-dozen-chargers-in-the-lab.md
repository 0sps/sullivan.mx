---
layout: post
title: "A Dozen Chargers in the Lab"
date: 2026-01-18
tags: [technology]
devices:
  - name: "Eero 15W Charger"
    img1: "/assets/images/eero.png"
    img2: "/assets/images/eero2.png"
    caption: ""
  - name: "Shargeek Macintosh Charger"
    img1: "/assets/images/Shargeek Fun Macintosh Charger.png"
    img2: "/assets/images/Shargeek Fun Macintosh Charger2.png"
    caption: "Hit its 27W target exactly. Perfect performance."
  - name: "Apple 30W Retail Charger"
    img1: "/assets/images/apple retail.png"
    img2: "/assets/images/apple retail 2.png"
    caption: "Advertised at 30W, actual measured power was 29.5W. Solid performance."
  - name: "Apple HomePod Mini Charger"
    img1: "/assets/images/Apple Homepod Mini.png"
    img2: "/assets/images/Apple Homepod Mini 2.png"
    caption: ""
  - name: "Vebner GaN 65W Charger"
    img1: "/assets/images/VEBNERgan.png"
    img2: "/assets/images/VEBNERgaqn2.png"
    caption: ""
  - name: "Govee Power Supply"
    img1: "/assets/images/Govee 1.png"
    img2: "/assets/images/Govee 2.png"
    caption: ""
  - name: "Counterfeit AT&T"
    img1: "/assets/images/Counterfeit ATnT 1.png"
    img2: "/assets/images/Counterfeit ATnT 2.png"
    caption: ""
  - name: "Counterfeit Samsung"
    img1: "/assets/images/Counerfeit Samsung 1.png"
    img2: "/assets/images/Counerfeit Samsung 2.png"
    caption: ""
  - name: "Amazon Kindle Charger"
    img1: "/assets/images/Amazon 1.png"
    img2: "/assets/images/Amazon kindle 2.png"
    caption: ""
  - name: "Counterfeit Chinese Wall Charger (USB A Only)"
    img1: "/assets/images/Counterfeit chinese outlet 1.png"
    img2: "/assets/images/Counterfeit chinese outlet 2.png"
    caption: ""
  - name: "Dealworthy Charger"
    img1: "/assets/images/Dealworthy 1.png"
    img2: "/assets/images/Dealworthy  2.png"
    caption: ""
  - name: "Anker 621 MAG GO 5000mAh Battery"
    img1: "/assets/images/Anker a1654 Maggo power bank.png"
    img2: "/assets/images/Anker a1654 Maggo power bank 2.png"
    caption: ""
  - name: "iPhone 17 pro"
    img1: "/assets/images/iphone 17 pro.png"
    caption: "Over-performed! Advertised at 4.5W but pulled 5.4W during testing."
  - name: "Macbook Pro M1"
    img1: "/assets/images/macbook pro 1.png"
    img2: "/assets/images/macbook pro 2.png"
    caption: ""
  - name: "Anker ASPD053a"
    img1: "/assets/images/Anker ASP053a.png"
    img2: "/assets/images/Anker ASP053a 2.png"
    caption: ""
  - name: "Apple 96W Macbook Charger"
    img1: "/assets/images/apple96W.png"
    img2: "/assets/images/apple96W2.png"
    caption: ""
  - name: "AOHI GaN Charger"
    img1: "/assets/images/AOHI GaN.png"
    img2: "/assets/images/AOHI GaN2.png"
    caption: ""
  - name: "Anker 637 Magnetic Charging Station"
    img1: "/assets/images/Anker 637 magnetic charging station USB A.png"
    img2: "/assets/images/Anker 637 magnetic charging station USB C.png"
    caption: ""
  - name: "Spigen PowerArc ArcStation Pro"
    img1: "/assets/images/Spigen PowerArc 1.png"
    img2: "/assets/images/Spigen PowerArc 2.png"
    caption: ""
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
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    position: relative;
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    gap: 30px;
    padding: 24px 10%;
    -webkit-overflow-scrolling: touch;
    height: 690px;
    box-sizing: border-box;
  }
  .device-scroller::-webkit-scrollbar {
    height: 8px;
  }
  .device-scroller::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px;
  }
  .device-card {
    flex: 0 0 950px;
    margin: 0;
    display: flex;
    flex-direction: row;
    background: #f8f8f8;
    border-radius: 18px;
    padding: 24px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
  .device-images {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 0 0 450px;
  }
  .device-images a {
    display: block;
    width: 100%;
  }
  .device-images img {
    width: 100%;
    height: auto;
    max-height: 290px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #eee;
    background: #fff;
  }
  .device-card figcaption {
    flex: 1;
    padding-left: 35px;
    font-size: 1.1em;
    line-height: 1.65;
    color: #333;
    overflow-y: auto;
  }
  .device-card figcaption strong {
    display: block;
    font-size: 1.3em;
    margin-bottom: 10px;
    color: #000;
  }
</style>

<div class="device-scroller">
  
  {% for item in page.devices %}
  <figure class="device-card">
    <div class="device-images">
      
      {% if item.img1 %}
      <a href="{{ item.img1 }}" target="_blank">
        <img src="{{ item.img1 }}" alt="{{ item.name }} Image 1">
      </a>
      {% endif %}

      {% if item.img2 %}
      <a href="{{ item.img2 }}" target="_blank">
        <img src="{{ item.img2 }}" alt="{{ item.name }} Image 2">
      </a>
      {% endif %}

    </div>
    
    <figcaption>
      <strong>{{ item.name }}:</strong> {{ item.caption }}
    </figcaption>
  </figure>
  {% endfor %}

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