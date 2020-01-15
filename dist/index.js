module.exports=function(e){var a={};function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=a,r.d=function(e,a,n){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(n,t,function(a){return e[a]}.bind(null,t));return n},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="",r(r.s=0)}([function(e,a,r){"use strict";r.r(a);var n={};r.r(n),r.d(n,"INVALID_CHARACTERS",(function(){return i})),r.d(n,"MAX_LINE_BREAKS",(function(){return s})),r.d(n,"MAX_CHARS",(function(){return o})),r.d(n,"VALID_MERGE_VARS",(function(){return u})),r.d(n,"US_STATES",(function(){return l})),r.d(n,"TWO_LETTER_NAMES",(function(){return c})),r.d(n,"PLAN_DETAILS",(function(){return m}));var t={};r.r(t),r.d(t,"usesInvalidCharacters",(function(){return b})),r.d(t,"stateAbbr",(function(){return g})),r.d(t,"validateMergeVars",(function(){return d})),r.d(t,"validateContactInfo",(function(){return p})),r.d(t,"interpolate",(function(){return v}));const i="[~`©™_|^®]",s=5,o=320,u=["{firstName}","{lastName}","{city}","{state}","{company}"],l=[{name:"Alabama",slug:"alabama",abbr:"AL"},{name:"Alaska",slug:"alaska",abbr:"AK"},{name:"Arizona",slug:"arizona",abbr:"AZ"},{name:"Arkansas",slug:"arkansas",abbr:"AR"},{name:"California",slug:"california",abbr:"CA"},{name:"Colorado",slug:"colorado",abbr:"CO"},{name:"Connecticut",slug:"connecticut",abbr:"CT"},{name:"Delaware",slug:"delaware",abbr:"DE"},{name:"District of Columbia",slug:"district-of-columbia",abbr:"DC"},{name:"Florida",slug:"florida",abbr:"FL"},{name:"Georgia",slug:"georgia",abbr:"GA"},{name:"Hawaii",slug:"hawaii",abbr:"HI"},{name:"Idaho",slug:"idaho",abbr:"ID"},{name:"Illinois",slug:"illinois",abbr:"IL"},{name:"Indiana",slug:"indiana",abbr:"IN"},{name:"Iowa",slug:"iowa",abbr:"IA"},{name:"Kansas",slug:"kansas",abbr:"KS"},{name:"Kentucky",slug:"kentucky",abbr:"KY"},{name:"Louisiana",slug:"louisiana",abbr:"LA"},{name:"Maine",slug:"maine",abbr:"ME"},{name:"Maryland",slug:"maryland",abbr:"MD"},{name:"Massachusetts",slug:"massachusetts",abbr:"MA"},{name:"Michigan",slug:"michigan",abbr:"MI"},{name:"Minnesota",slug:"minnesota",abbr:"MN"},{name:"Mississippi",slug:"mississippi",abbr:"MS"},{name:"Missouri",slug:"missouri",abbr:"MO"},{name:"Montana",slug:"montana",abbr:"MT"},{name:"Nebraska",slug:"nebraska",abbr:"NE"},{name:"Nevada",slug:"nevada",abbr:"NV"},{name:"New Hampshire",slug:"new-hampshire",abbr:"NH"},{name:"New Jersey",slug:"new-jersey",abbr:"NJ"},{name:"New Mexico",slug:"new-mexico",abbr:"NM"},{name:"New York",slug:"new-york",abbr:"NY"},{name:"North Carolina",slug:"north-carolina",abbr:"NC"},{name:"North Dakota",slug:"north-dakota",abbr:"ND"},{name:"Ohio",slug:"ohio",abbr:"OH"},{name:"Oklahoma",slug:"oklahoma",abbr:"OK"},{name:"Oregon",slug:"oregon",abbr:"OR"},{name:"Pennsylvania",slug:"pennsylvania",abbr:"PA"},{name:"Puerto Rico",slug:"puerto-rico",abbr:"PR"},{name:"Rhode Island",slug:"rhode-island",abbr:"RI"},{name:"South Carolina",slug:"south-carolina",abbr:"SC"},{name:"South Dakota",slug:"south-dakota",abbr:"SD"},{name:"Tennessee",slug:"tennessee",abbr:"TN"},{name:"Texas",slug:"texas",abbr:"TX"},{name:"Utah",slug:"utah",abbr:"UT"},{name:"Vermont",slug:"vermont",abbr:"VT"},{name:"Virgin Islands",slug:"virgin-islands",abbr:"VI"},{name:"Virginia",slug:"virginia",abbr:"VA"},{name:"Washington",slug:"washington",abbr:"WA"},{name:"West Virginia",slug:"west-virginia",abbr:"WV"},{name:"Wisconsin",slug:"wisconsin",abbr:"WI"},{name:"Wyoming",slug:"wyoming",abbr:"WY"}],c=["bo","ty","al","jo","cy","ed","li","ro","em","lo","ki","oz","mo","lu","ki","vi"],m={tier_1:{name:"Occasional",price:0,limit:0,overagePrice:4.5,features:[{key:"Price per card",value:"$4.50"},{key:"No cards included",value:!1},{key:"2 Team members",value:!0},{key:"Support",value:"Email"},{key:"Sent within",value:"72 hours"}]},tier_2:{name:"Starter",price:75,limit:30,overagePrice:2.25,features:[{key:"30 cards included",value:!0},{key:"$/card over 30",value:"$2.25"},{key:"Team members",value:"3"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"48 hours"}]},tier_3:{name:"Plus",price:225,limit:100,overagePrice:2,features:[{key:"100 cards included",value:!0},{key:"$/card over 100",value:"$2.00"},{key:"Team members",value:"10"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"48 hours"}]},tier_4:{name:"Pro",price:900,limit:500,overagePrice:1.75,features:[{key:"500 cards included",value:!0},{key:"$/card over 500",value:"$1.75"},{key:"Team members",value:"25"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"24 hours"}]},legacy_silver:{name:"Legacy Silver",price:30,limit:10,overagePrice:3.5,features:[{key:"10 cards included",value:!0},{key:"$/card over 10",value:"$3.50"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"72 hours"}]},legacy_gold_40:{name:"Legacy Gold",price:40,limit:20,overagePrice:3.5,features:[{key:"20 cards included",value:!0},{key:"$/card over 20",value:"$3.50"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"72 hours"}]},legacy_gold_50:{name:"Legacy Gold",price:50,limit:20,overagePrice:3.5,features:[{key:"20 cards included",value:!0},{key:"$/card over 20",value:"$3.50"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"72 hours"}]},legacy_platinum_90:{name:"Legacy Platinum",price:90,limit:50,overagePrice:3.5,features:[{key:"50 cards included",value:!0},{key:"$/card over 50",value:"$3.50"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"72 hours"}]},legacy_platinum_100:{name:"Legacy Platinum",price:100,limit:50,overagePrice:3.5,features:[{key:"50 cards included",value:!0},{key:"$/card over 50",value:"$3.50"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"72 hours"}]},legacy_api:{name:"Legacy API",price:0,limit:0,overagePrice:1.99,features:[{key:"Price per card",value:"$1.99"},{key:"Team members",value:"10"},{key:"Support",value:"Email & Phone"},{key:"Sent within",value:"48 hours"}]}};const b=e=>new RegExp(i,"g").test(e),g=e=>{const a=l.find(a=>a.name===e);return a?a.abbr.toUpperCase():""},d=e=>{const a=e.match(/(\{.+?\})/gm);let r=[];return a?(a.forEach(e=>{u.includes(e)||r.push(e)}),r):r},p=(e={})=>{let a=[];if(e.street1||e.firstName||a.push({identifier:"Contact",errorMsg:"does not contain a street address"}),["street1","city","state","zip"].forEach(r=>{e[r]||a.push({identifier:r,errorMsg:"is required for creating a contact"})}),["firstName","lastName","street1","street2","city","state","zip","company"].forEach(r=>{e[r]&&b(e[r])&&a.push({identifier:r,errorMsg:`uses one of the following invalid characters ${i}`})}),["firstName","lastName","street1","street2","city","state"].forEach(a=>{"firstName"!==a||2!==e[a].length||c.includes(e[a].toLowerCase())?e[a]=function(e=""){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}(e[a]):e[a]=e[a].toUpperCase()}),[["firstName",17],["lastName",17],["company",26]].forEach(r=>{const n=(e[r[0]]||"").length||0,t=r[1];n>t&&a.push({identifier:r[0],errorMsg:`cannot be more than ${t} characters`})}),e.state)if(2===e.state.length){const r=l.find(a=>a.abbr.toLowerCase()===e.state.toLowerCase());r?e.state=r.abbr:a.push({identifier:e.state,errorMsg:"is not a valid state abbreviation"})}else{const r=g(e.state);r?e.state=r:a.push({identifier:e.state,errorMsg:"is not a valid state name"})}return["street1","street2"].forEach(a=>{e[a]&&(e[a]=e[a].replace(/ [Nn]orthwest/g," NW").replace(/ [Ss]outhwest/g," SW").replace(/ [Ss]outheast/g," SE").replace(/ [Nn]ortheast/g," NE").replace(/ [Ss]treet/g," St").replace(/ [Aa]venue/g," Ave").replace(/ [Bb]oulevard/g," Blvd"))}),e.zip&&5!==e.zip.length&&a.push({identifier:"Zip code",errorMsg:"must be exactly 5 digits"}),{contact:e,errors:a}},v=(e="",a)=>e?e.replace(/{([^{}]*)}/g,(e,r)=>{var n=a[r];return"string"==typeof n||"number"==typeof n?n:e}):"";r.d(a,"utils",(function(){return t})),r.d(a,"constants",(function(){return n}))}]);