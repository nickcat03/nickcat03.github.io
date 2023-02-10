// this references the file that holds the webring data
const w9p1h3 = `https://nippoverse.xyz/retroring/webring.json`;


const g3g8w5 = document.createElement("template");

// this is our webring styling
g3g8w5.innerHTML = `
<style>
.w9p1h3-webring {
  background-image:var(--w9p1h3-background-image);
  background-color:var(--w9p1h3-background-color);
  background-size:var(--w9p1h3-background-size);
  border:var(--w9p1h3-border);
  padding:var(--w9p1h3-padding); 
  max-width:var(--w9p1h3-width);
  height:var(--w9p1h3-height);
  border-radius:var(--w9p1h3-border-radius);
}
.w9p1h3-myUniqueClass .title {
  font-family:var(--w9p1h3-title-font);
  font-size:var(--w9p1h3-title-size);
  line-height:var(--w9p1h3-title-height);
  letter-spacing:var(--w9p1h3-title-spacing);
  color:var(--w9p1h3-title-color);
  margin:var(--w9p1h3-title-margin);
  text-align:var(--w9p1h3-title-align);
  font-weight:var(--w9p1h3-title-weight);
  
}
.w9p1h3-myUniqueClass {
font-family:var(--w9p1h3-text-family);
font-size:var(--w9p1h3-text-size);
line-height:var(--w9p1h3-text-height);
color:var(--w9p1h3-text-color);
text-align:var(--w9p1h3-text-align);
  letter-spacing:var(--w9p1h3-text-spacing);
}
.w9p1h3-myUniqueClass a {
color:var(--w9p1h3-link-color);
text-decoration:var(--w9p1h3-link-decoration);
font-size:var(--w9p1h3-link-size);
}
.w9p1h3-myUniqueClass p {
margin:var(--w9p1h3-text-margin);
}
.icon {
  font-size: 100px;
}
</style>

<div class="w9p1h3-webring">
  <div class="w9p1h3-myUniqueClass">

  </div>
</div>`;

// not really sure about this stuff, but don't delete it!
class v3h1g1 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(g3g8w5.content.cloneNode(true));

    // e.g. https://css-tricks.com
    const thisSite = this.getAttribute("site"); 
    
    fetch(w9p1h3)
      .then((response) => response.json())
      .then((sites) => {
        // Finds the current site in the data
        const matchedSiteIndex = sites.findIndex(
          (site) => site.url === thisSite
        );
        
        const matchedSite = sites[matchedSiteIndex];

        let prevSiteIndex = matchedSiteIndex - 1;
        if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

        let nextSiteIndex = matchedSiteIndex + 1;
        if (nextSiteIndex > sites.length - 1) nextSiteIndex = 0;

        const randomSiteIndex = this.getRandomInt(0, sites.length - 1);


        // In this variable, put the HTML that you want your webring "badge" to use.
        // keep the link 'href' values the same, but change the text!
        const cp = `
          <div>
            <div class="title">Retroring</div>
            <div class="extratext">
            <p>
             ${matchedSite.owner} loves retro gaming!
            </p>
            </div>
            <p class="nav">
              <a href="${sites[prevSiteIndex].url}">[Prev]</a>
              <a href="${sites[nextSiteIndex].url}">[Next]</a><br>
              <a href="${sites[randomSiteIndex].url}">[Rand]</a>
              <a href="https://nippoverse.xyz/retroring/members.html">[Members]</a>
            </p>
          </div>
        `;

        this.shadowRoot
          .querySelector(".w9p1h3-myUniqueClass")
          .insertAdjacentHTML("afterbegin", cp);
      });
  }

  // this calculates a random number
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var rootVars = `:root {
  /* background! */
  --w9p1h3-background-image: url("https://nippoverse.xyz/retroring/mario64.png");
  --w9p1h3-background-size:cover;
  --w9p1h3-background-color:pink;
  --w9p1h3-background-size: cover;
  --w9p1h3-border:3px solid pink;
  --w9p1h3-border-radius:5px;
  
    /* sizing */
  --w9p1h3-width:200px;
  --w9p1h3-height:75px;
  --w9p1h3-padding:1rem;
  

  /* title! */
  --w9p1h3-title-font:'Arial';
  --w9p1h3-title-color:rgb(255, 105, 155);
  --w9p1h3-title-size:35px;
  --w9p1h3-title-align:center;
  --w9p1h3-title-margin:5px;
  
  /* line height & letter spacing */
  --w9p1h3-title-height:15px;
  --w9p1h3-title-spacing:3px;
  --w9p1h3-title-weight:bold;


  /* text! */
  --w9p1h3-text-family:sans-serif;
  --w9p1h3-text-color:rgb(0, 255, 200);
  --w9p1h3-text-size:14px;
  --w9p1h3-text-align:center;
  --w9p1h3-text-spacing:1px;
  --w9p1h3-text-height:1em;

  /* links! */
  --w9p1h3-link-family:sans-serif;
  --w9p1h3-link-color:cyan;
  --w9p1h3-link-decoration:none;
  --w9p1h3-link-weight:bold;
  --w9p1h3-link-size:13px;
}`

window.onload = function() {
var p = document.getElementsByTagName("body")[0];
var style = document.createElement('style');
var css = document.createTextNode(rootVars);
style.appendChild(css);
p.appendChild(style);

}

// whatever 'customElement' you define MUST be unique
// do not use the name 'webring-css' or you will conflict with other webrings
window.customElements.define("ring-063", v3h1g1);