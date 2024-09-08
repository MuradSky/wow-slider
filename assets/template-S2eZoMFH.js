const e=`
<div class="my-slider-animation"></div>
<div class="my-slider-paginat"></div>

<svg id="slider-layer-3" class="my-slider-canvas" width="100%" height="100%" >
  <image href="" x="0" y="0" preserveAspectRatio="xMaxYMax" />
</svg>

<svg id="slider-layer-2" class="my-slider-canvas" width="100%" height="100%">
    <defs>
        <pattern id="slide-pattern1" patternUnits="userSpaceOnUse" width="100%" height="100%" preserveAspectRatio="xMaxYMax">
            <image href="" x="0" y="0" preserveAspectRatio="xMaxYMax" />
        </pattern>
    </defs>
    <circle class="slide-image-circle" cx="-100" cy="-100" r="50" fill="url(#slide-pattern1)" />
</svg>

<svg id="slider-layer-1" class="my-slider-canvas" width="100%" height="100%">
    <defs>
        <pattern id="slide-preview" patternUnits="userSpaceOnUse" width="100%" height="100%" preserveAspectRatio="xMaxYMax">
            <image href="" x="0" y="0" preserveAspectRatio="xMaxYMax" />
        </pattern>
    </defs>
    <g class="pointer">
        <!-- fill="url(#slide-preview)"  -->
        <circle id="slide-btn" cx="-100" cy="-100" r="50" fill="url(#slide-preview)"/>
    </g>
</svg>`;export{e as default};
