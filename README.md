<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:212529,50:495057,100:9c4221&height=200&section=header&text=TAS%20Lab&fontSize=60&fontAlign=50&fontAlignY=40&animation=fadeIn&fontColor=ffffff&desc=Thermodynamics%20Analysis%20Studio%20|%2020%20Cycles%20|%20Live%20Simulation%20|%20EES%20Export%20|%20Full%20Reports&descAlign=50&descAlignY=68&descSize=20&descColor=e0fbfc&shadow=true" alt="Header" />
</div>





<h3 align="center">A Single File Web App for Exploring, Simulating, and Reporting on 20 Power Cycles</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-d84315?style=for-the-badge&labelColor=0f2027&logo=vercel&logoColor=f4ede4" />
  <img src="https://img.shields.io/badge/Cycles-20-d84315?style=for-the-badge&labelColor=0f2027&logo=googleearth&logoColor=f4ede4" />
  <img src="https://img.shields.io/badge/Stack-HTML%20CSS%20JS-d84315?style=for-the-badge&labelColor=0f2027&logo=html5&logoColor=f4ede4" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Dependencies-Zero-5a189a?style=for-the-badge&labelColor=0f2027&logo=javascript&logoColor=f4ede4" />
  <img src="https://img.shields.io/badge/Export-9%20Formats-5a189a?style=for-the-badge&labelColor=0f2027&logo=filedotio&logoColor=f4ede4" />
  <img src="https://img.shields.io/badge/License-MIT-495057?style=for-the-badge&labelColor=0f2027&logo=opensourceinitiative&logoColor=f4ede4" />
</p>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:212529,50:495057,100:9c4221&height=3">





<div align="center">

**[Open the Live App](https://tas-lab.vercel.app/)** &nbsp;•&nbsp; **[Report a Bug](../../issues)** &nbsp;•&nbsp; **[Request a Feature](../../issues)**

</div>

<br>

## Overview

TAS is an interactive thermodynamics platform for analyzing power, propulsion, and refrigeration cycles. Adjust an input and every diagram, table, chart, and equation updates instantly.

The whole app, including the physics engine, UI, charts, and report generator, runs client side from one HTML file. No frameworks, no build step, no backend.

<br>


## Screenshots

<table>
<tr>
<td width="50%">

**Cycle Setup and Analysis**
<img width="100%" alt="Cycle Setup" src="https://github.com/user-attachments/assets/af950168-01ed-44a2-802d-f995eacdc90c" />

</td>
<td width="50%">

**Live Simulation**
<img width="100%" alt="Live Simulation" src="https://github.com/user-attachments/assets/f3274319-afe4-412a-90ef-739145a0a1b4" />

</td>
</tr>
<tr>
<td width="50%">

**Results Table**
<img width="100%" alt="Results Table" src="https://github.com/user-attachments/assets/41845777-0a65-4ae5-8a10-5e044dc0c861" />

</td>
<td width="50%">

**Graphs**
<img width="100%" alt="Graphs" src="https://github.com/user-attachments/assets/7d89d8d2-44c4-44b3-858d-78d0cf6e839f" />

</td>
</tr>
<tr>
<td width="50%">

**Compare Cycles**
<img width="100%" alt="Compare Cycles" src="https://github.com/user-attachments/assets/12b4cca1-e4eb-4f20-8f7e-7f0751c6f674" />

</td>
<td width="50%">

**Parametric Study**
<img width="100%" alt="Parametric Study" src="https://github.com/user-attachments/assets/1e4cef24-4ae3-4cef-9114-eb7f4a6465e7" />

</td>
</tr>
<tr>
<td width="50%">

**Theory and Notes**
<img width="100%" alt="Theory and Notes" src="https://github.com/user-attachments/assets/a173bd10-c590-4264-a5ae-e4162ed76b0b" />

</td>
<td width="50%">

**Engineering Tools**
<img width="100%" alt="Engineering Tools" src="https://github.com/user-attachments/assets/24515aa4-57e7-4b76-9dea-1220a3fccd0d" />

</td>
</tr>
<tr>
<td width="50%">

**Constants and Units**
<img width="100%" alt="Constants and Units" src="https://github.com/user-attachments/assets/46214ca8-a669-4446-95fc-3eb4532a5726" />

</td>
<td width="50%">

**EES**
<img width="100%" alt="EES" src="https://github.com/user-attachments/assets/7fcc1d33-f89c-4e8c-a73a-0ab239310e46" />

</td>
</tr>
<tr>
<td width="50%">

**Report**
<img width="100%" alt="Report" src="https://github.com/user-attachments/assets/07d175ff-c286-4150-813f-ed73c678d1d4" />

</td>
<td width="50%"></td>
</tr>
</table>

<br>







## How It Works
```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#495057', 'primaryTextColor':'#e0fbfc', 'primaryBorderColor':'#9c4221', 'lineColor':'#9c4221', 'secondaryColor':'#212529', 'tertiaryColor':'#343a40'}}}%%
flowchart LR
    A[Set Inputs] --> B[Physics Engine]
    B --> C[State Points]
    C --> D[Live Diagram]
    C --> E[Results and Charts]
    C --> F[Report and EES Code]

    classDef inputNode fill:#212529,stroke:#9c4221,stroke-width:2px,color:#e0fbfc
    classDef coreNode fill:#495057,stroke:#9c4221,stroke-width:2px,color:#ffffff
    classDef outputNode fill:#343a40,stroke:#9c4221,stroke-width:2px,color:#e0fbfc

    class A inputNode
    class B,C coreNode
    class D,E,F outputNode
```
Every output panel reads from the same state point data, so the diagram, charts, table, EES code, and report can never fall out of sync with each other.
<br>

## Supported Cycles
```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'pieOuterStrokeColor':'#e0fbfc', 'pieSectionTextColor':'#ffffff', 'pieTitleTextColor':'#e0fbfc', 'pieStrokeColor':'#212529', 'pieLegendTextColor':'#e0fbfc', 'pieOpacity':'1', 'pie1':'#e07a3f', 'pie2':'#c1652e', 'pie3':'#9c4221', 'pie4':'#adb5bd', 'pie5':'#6c757d', 'pie6':'#495057'}}}%%
pie showData
    title 20 Cycles Across 6 Families
    "Gas Turbine" : 6
    "Reciprocating" : 5
    "External Combustion" : 3
    "Steam Turbine" : 3
    "Refrigeration and Heat Pump" : 2
    "Jet Propulsion" : 1
```










**Reciprocating (Piston) Engines**: Otto, Diesel, Dual, Atkinson, Miller
**External Combustion Engines**: Carnot, Stirling, Ericsson
**Gas Turbine Engines**: Simple, Regenerative, Reheat, Intercooled and Ultimate Brayton, Combined Cycle
**Jet Propulsion Engines**: Turbojet
**Steam Turbine Engines**: Ideal, Reheat, and Regenerative Rankine
**Refrigeration and Heat Pump Systems**: Vapor Compression Refrigeration, Heat Pump

Each cycle has its own governing equations, adjustable design parameters with realistic bounds, and dedicated theory notes.

<br>


## Tech Stack

Vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no npm dependencies. SVG powers the diagrams and charts, all rendered and updated in real time. Deployed as a single static file on Vercel, and fully usable offline once loaded.

<br>


## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Open a pull request

<br>

## References

Cengel, Y. A., and Boles, M. A. Thermodynamics: An Engineering Approach. McGraw Hill.
Moran, M. J., Shapiro, H. N., Boettner, D. D., and Bailey, M. B. Fundamentals of Engineering Thermodynamics. Wiley.

<br>

## License

Distributed under the MIT License. See `LICENSE` for details.

<br>

<div align="center">
<p>Built by <a href="https://github.com/fraisasghar">Frais Asghar</a></p>
</div>


<div align="center">
If this project was useful to you, consider giving it a star. ⭐
  
<p3 align="center"><sub>Built for the Mechanical & Simulation community &nbsp;&middot;&nbsp; Happy building</sub></p3>
</div>



<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:212529,50:495057,100:9c4221&height=3">
