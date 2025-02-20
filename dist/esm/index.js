import{jsx as e}from"react/jsx-runtime";import t,{useDebugValue as n,createElement as r,useRef as o,useContext as a}from"react";import s from"react-dom/client";var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function c(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function l(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}"function"==typeof SuppressedError&&SuppressedError;var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=l((function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d="-ms-",f="-moz-",h="-webkit-",m="comm",g="rule",y="decl",v="@keyframes",b=Math.abs,w=String.fromCharCode,S=Object.assign;function k(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function E(e,t,n){return e.indexOf(t,n)}function A(e,t){return 0|e.charCodeAt(t)}function P(e,t,n){return e.slice(t,n)}function N(e){return e.length}function I(e){return e.length}function O(e,t){return t.push(e),e}function R(e,t){return e.filter((function(e){return!x(e,t)}))}var _=1,T=1,D=0,$=0,j=0,z="";function M(e,t,n,r,o,a,s,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:_,column:T,length:s,return:"",siblings:i}}function L(e,t){return S(M("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=L(e.root,{children:[e]});O(e,e.siblings)}function B(){return j=$>0?A(z,--$):0,T--,10===j&&(T=1,_--),j}function V(){return j=$<D?A(z,$++):0,T++,10===j&&(T=1,_++),j}function G(){return A(z,$)}function H(){return $}function Y(e,t){return P(z,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return k(Y($-1,K(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(j=G())&&j<33;)V();return W(e)>2||W(j)>3?"":" "}function X(e,t){for(;--t&&V()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Y(e,H()+(t<6&&32==G()&&32==V()))}function K(e){for(;V();)switch(j){case e:return $;case 34:case 39:34!==e&&39!==e&&K(j);break;case 40:41===e&&K(e);break;case 92:V()}return $}function Z(e,t){for(;V()&&e+j!==57&&(e+j!==84||47!==G()););return"/*"+Y(t,$-1)+"*"+w(47===e?e:V())}function J(e){for(;!W(G());)V();return Y(e,$)}function Q(e){return function(e){return z="",e}(ee("",null,null,null,[""],e=function(e){return _=T=1,D=N(z=e),$=0,[]}(e),0,[0],e))}function ee(e,t,n,r,o,a,s,i,c){for(var l=0,u=0,p=s,d=0,f=0,h=0,m=1,g=1,y=1,v=0,S="",k=o,x=a,P=r,I=S;g;)switch(h=v,v=V()){case 40:if(108!=h&&58==A(I,p-1)){-1!=E(I+=C(q(v),"&","&\f"),"&\f",b(l?i[l-1]:0))&&(y=-1);break}case 34:case 39:case 91:I+=q(v);break;case 9:case 10:case 13:case 32:I+=U(h);break;case 92:I+=X(H()-1,7);continue;case 47:switch(G()){case 42:case 47:O(ne(Z(V(),H()),t,n,c),c);break;default:I+="/"}break;case 123*m:i[l++]=N(I)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(I=C(I,/\f/g,"")),f>0&&N(I)-p&&O(f>32?re(I+";",r,n,p-1,c):re(C(I," ","")+";",r,n,p-2,c),c);break;case 59:I+=";";default:if(O(P=te(I,t,n,l,u,o,i,S,k=[],x=[],p,a),a),123===v)if(0===u)ee(I,t,P,P,k,a,p,i,x);else switch(99===d&&110===A(I,3)?100:d){case 100:case 108:case 109:case 115:ee(e,P,P,r&&O(te(e,P,P,0,0,o,i,S,o,k=[],p,x),x),o,x,p,i,r?k:x);break;default:ee(I,P,P,P,[""],x,0,i,x)}}l=u=f=0,m=y=1,S=I="",p=s;break;case 58:p=1+N(I),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==B())continue;switch(I+=w(v),v*m){case 38:y=u>0?1:(I+="\f",-1);break;case 44:i[l++]=(N(I)-1)*y,y=1;break;case 64:45===G()&&(I+=q(V())),d=G(),u=p=N(S=I+=J(H())),v++;break;case 45:45===h&&2==N(I)&&(m=0)}}return a}function te(e,t,n,r,o,a,s,i,c,l,u,p){for(var d=o-1,f=0===o?a:[""],h=I(f),m=0,y=0,v=0;m<r;++m)for(var w=0,S=P(e,d+1,d=b(y=s[m])),x=e;w<h;++w)(x=k(y>0?f[w]+" "+S:C(S,/&\f/g,f[w])))&&(c[v++]=x);return M(e,t,n,0===o?g:i,c,l,u,p)}function ne(e,t,n,r){return M(e,t,n,m,w(j),P(e,2,-2),0,r)}function re(e,t,n,r,o){return M(e,t,n,y,P(e,0,r),P(e,r+1,-1),r,o)}function oe(e,t,n){switch(function(e,t){return 45^A(e,0)?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}(e,t)){case 5103:return h+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+e+e;case 4789:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return h+e+f+e+d+e+e;case 5936:switch(A(e,t+11)){case 114:return h+e+d+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return h+e+d+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return h+e+d+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return h+e+d+e+e;case 6165:return h+e+d+"flex-"+e+e;case 5187:return h+e+C(e,/(\w+).+(:[^]+)/,h+"box-$1$2"+d+"flex-$1$2")+e;case 5443:return h+e+d+"flex-item-"+C(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":d+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return h+e+d+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return h+e+d+C(e,"shrink","negative")+e;case 5292:return h+e+d+C(e,"basis","preferred-size")+e;case 6060:return h+"box-"+C(e,"-grow","")+h+e+d+C(e,"grow","positive")+e;case 4554:return h+C(e,/([^-])(transform)/g,"$1"+h+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+d+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+e+e;case 4200:if(!x(e,/flex-|baseline/))return d+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return d+C(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,x(e.props,/grid-\w+-end/)}))?~E(e+(n=n[t].value),"span",0)?e:d+C(e,"-start","")+e+d+"grid-row-span:"+(~E(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":d+C(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:d+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,h+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(A(e,t+1)){case 109:if(45!==A(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+f+(108==A(e,t+3)?"$3":"$2-$3"))+e;case 115:return~E(e,"stretch",0)?oe(C(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,s,i){return d+n+":"+r+i+(o?d+n+"-span:"+(a?s:+s-+r)+i:"")+e}));case 4949:if(121===A(e,t+6))return C(e,":",":"+h)+e;break;case 6444:switch(A(e,45===A(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+h+(45===A(e,14)?"inline-":"")+"box$3$1"+h+"$2$3$1"+d+"$2box$3")+e;case 100:return C(e,":",":"+d)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function ae(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function se(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case y:return e.return=e.return||e.value;case m:return"";case v:return e.return=e.value+"{"+ae(e.children,r)+"}";case g:if(!N(e.value=e.props.join(",")))return""}return N(n=ae(e.children,r))?e.return=e.value+"{"+n+"}":""}function ie(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case y:return void(e.return=oe(e.value,e.length,n));case v:return ae([L(e,{value:C(e.value,"@","@"+h)})],r);case g:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(L(e,{props:[C(t,/:(read-\w+)/,":-moz-$1")]})),F(L(e,{props:[t]})),S(e,{props:R(n,r)});break;case"::placeholder":F(L(e,{props:[C(t,/:(plac\w+)/,":"+h+"input-$1")]})),F(L(e,{props:[C(t,/:(plac\w+)/,":-moz-$1")]})),F(L(e,{props:[C(t,/:(plac\w+)/,d+"input-$1")]})),F(L(e,{props:[t]})),S(e,{props:R(n,r)})}return""}))}}var ce={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ue="active",pe="data-styled-version",de="6.1.15",fe="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),ge=/invalid hook call/i,ye=new Set,ve=function(e,t){if("production"!==process.env.NODE_ENV){var n=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(n," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",a=console.error;try{var s=!0;console.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];ge.test(e)?(s=!1,ye.delete(r)):a.apply(void 0,c([e],t,!1))},o(),s&&!ye.has(r)&&(console.warn(r),ye.add(r))}catch(e){ge.test(e.message)&&ye.delete(r)}finally{console.error=a}}},be=Object.freeze([]),we=Object.freeze({});var Se=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function Ce(e){return e.replace(ke,"-").replace(xe,"")}var Ee=/(a)(d)/gi,Ae=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pe(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ae(t%52)+n;return(Ae(t%52)+n).replace(Ee,"$1-$2")}var Ne,Ie=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oe=function(e){return Ie(5381,e)};function Re(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _e(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Te="function"==typeof Symbol&&Symbol.for,De=Te?Symbol.for("react.memo"):60115,$e=Te?Symbol.for("react.forward_ref"):60112,je={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ze={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Le=((Ne={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ne[De]=Me,Ne);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===De?Me:"$$typeof"in e?Le[e.$$typeof]:je;var t}var Be=Object.defineProperty,Ve=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,Ye=Object.getPrototypeOf,We=Object.prototype;function qe(e,t,n){if("string"!=typeof t){if(We){var r=Ye(t);r&&r!==We&&qe(e,r,n)}var o=Ve(t);Ge&&(o=o.concat(Ge(t)));for(var a=Fe(e),s=Fe(t),i=0;i<o.length;++i){var c=o[i];if(!(c in ze||n&&n[c]||s&&c in s||a&&c in a)){var l=He(t,c);try{Be(e,c,l)}catch(e){}}}}return e}function Ue(e){return"function"==typeof e}function Xe(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ze(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Je(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qe(e[r],t[r]);else if(Je(t))for(var r in t)e[r]=Qe(e[r],t[r]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}var tt="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function nt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,a=e.length;o<a;o+=1)r.push(e[o]);return r.forEach((function(e){n=n.replace(/%[a-z]/,e)})),n}function rt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return"production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(nt.apply(void 0,c([tt[e]],t,!1)).trim())}var ot=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw rt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),at=1<<30,st=new Map,it=new Map,ct=1,lt=function(e){if(st.has(e))return st.get(e);for(;it.has(ct);)ct++;var t=ct++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>at))throw rt(16,"".concat(t));return st.set(e,t),it.set(t,e),t},ut=function(e,t){ct=t+1,st.set(e,t),it.set(t,e)},pt="style[".concat(le,"][").concat(pe,'="').concat(de,'"]'),dt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ft=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},ht=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),o=[],a=0,s=r.length;a<s;a++){var i=r[a].trim();if(i){var c=i.match(dt);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(ut(u,l),ft(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(i)}}},mt=function(e){for(var t=document.querySelectorAll(pt),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(le)!==ue&&(ht(e,o),o.parentNode&&o.parentNode.removeChild(o))}};var gt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(le,ue),r.setAttribute(pe,de);var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},yt=function(){function e(e){this.element=gt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw rt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),vt=function(){function e(e){this.element=gt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),bt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),wt=he,St={isServer:!he,useCSSOMInjection:!me},kt=function(){function e(e,t,n){void 0===e&&(e=we),void 0===t&&(t={});var r=this;this.options=i(i({},St),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&he&&wt&&(wt=!1,mt(this)),et(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return it.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),s=t.getGroup(n);if(void 0===a||!a.size||0===s.length)return"continue";var i="".concat(le,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==a&&a.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(i,'{content:"').concat(c,'"}').concat(fe)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return lt(e)},e.prototype.rehydrate=function(){!this.server&&he&&mt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(i(i({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new bt(n):t?new yt(n):new vt(n)}(this.options),new ot(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(lt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(lt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xt=/&/g,Ct=/^\s*\/\/.*$/gm;function Et(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Et(e.children,t)),e}))}var At=new kt,Pt=function(){var e,t,n,r=we,o=r.options,a=void 0===o?we:o,s=r.plugins,i=void 0===s?be:s,c=function(n,r,o){return o.startsWith(t)&&o.endsWith(t)&&o.replaceAll(t,"").length>0?".".concat(e):n},l=i.slice();l.push((function(e){e.type===g&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xt,t).replace(n,c))})),a.prefix&&l.push(ie),l.push(se);var u=function(r,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),e=i,t=o,n=new RegExp("\\".concat(t,"\\b"),"g");var c=r.replace(Ct,""),u=Q(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=Et(u,a.namespace));var p,d=[];return ae(u,function(e){var t=I(e);return function(n,r,o,a){for(var s="",i=0;i<t;i++)s+=e[i](n,r,o,a)||"";return s}}(l.concat((p=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&p(e)})))),d};return u.hash=i.length?i.reduce((function(e,t){return t.name||rt(15),Ie(e,t.name)}),5381).toString():"",u}(),Nt=t.createContext({shouldForwardProp:void 0,styleSheet:At,stylis:Pt});function It(){return a(Nt)}Nt.Consumer,t.createContext(void 0);var Ot=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,et(this,(function(){throw rt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pt),this.name+e.hash},e}(),Rt=function(e){return e>="A"&&e<="Z"};function _t(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Rt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Tt=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!Tt(a)&&(Array.isArray(a)&&a.isCss||Ue(a)?r.push("".concat(_t(o),":"),a,";"):Je(a)?r.push.apply(r,c(c(["".concat(o," {")],Dt(a),!1),["}"],!1)):r.push("".concat(_t(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ce||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $t(e,t,n,r){if(Tt(e))return[];if(Xe(e))return[".".concat(e.styledComponentId)];if(Ue(e)){if(!Ue(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return"production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof Ot||Je(o)||null===o||console.error("".concat(Re(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),$t(o,t,n,r)}var a;return e instanceof Ot?n?(e.inject(n,r),[e.getName(r)]):[e]:Je(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(be,e.map((function(e){return $t(e,t,n,r)}))):[e.toString()]}var jt=Oe(de),zt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ue(n)&&!Xe(n))return!1}return!0}(e),this.componentId=t,this.baseHash=Ie(jt,t),this.baseStyle=n,kt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var o=Ze($t(this.rules,e,t,n)),a=Pe(Ie(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}r=Ke(r,a),this.staticRulesId=a}else{for(var i=Ie(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(i=Ie(i,u));else if(u){var p=Ze($t(u,e,t,n));i=Ie(i,p+l),c+=p}}if(c){var d=Pe(i>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=Ke(r,d)}}return r},e}(),Mt=t.createContext(void 0);Mt.Consumer;var Lt={},Ft=new Set;function Bt(e,o,a){var s=Xe(e),c=e,l=!_e(e),u=o.attrs,d=void 0===u?be:u,f=o.componentId,h=void 0===f?function(e,t){var n="string"!=typeof e?"sc":Ce(e);Lt[n]=(Lt[n]||0)+1;var r="".concat(n,"-").concat(function(e){return Pe(Oe(e)>>>0)}(de+n+Lt[n]));return t?"".concat(t,"-").concat(r):r}(o.displayName,o.parentComponentId):f,m=o.displayName,g=void 0===m?function(e){return _e(e)?"styled.".concat(e):"Styled(".concat(Re(e),")")}(e):m,y=o.displayName&&o.componentId?"".concat(Ce(o.displayName),"-").concat(o.componentId):o.componentId||h,v=s&&c.attrs?c.attrs.concat(d).filter(Boolean):d,b=o.shouldForwardProp;if(s&&c.shouldForwardProp){var w=c.shouldForwardProp;if(o.shouldForwardProp){var S=o.shouldForwardProp;b=function(e,t){return w(e,t)&&S(e,t)}}else b=w}var k=new zt(a,y,s?c.componentStyle:void 0);function x(e,o){return function(e,o,a){var s=e.attrs,c=e.componentStyle,l=e.defaultProps,u=e.foldedComponentIds,d=e.styledComponentId,f=e.target,h=t.useContext(Mt),m=It(),g=e.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&n(d);var y=function(e,t,n){return void 0===n&&(n=we),e.theme!==n.theme&&e.theme||t||n.theme}(o,h,l)||we,v=function(e,t,n){for(var r,o=i(i({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=Ue(r=e[a])?r(o):r;for(var c in s)o[c]="className"===c?Ke(o[c],s[c]):"style"===c?i(i({},o[c]),s[c]):s[c]}return t.className&&(o.className=Ke(o.className,t.className)),o}(s,o,y),b=v.as||f,w={};for(var S in v)void 0===v[S]||"$"===S[0]||"as"===S||"theme"===S&&v.theme===y||("forwardedAs"===S?w.as=v.forwardedAs:g&&!g(S,b)||(w[S]=v[S],g||"development"!==process.env.NODE_ENV||p(S)||Ft.has(S)||!Se.has(b)||(Ft.add(S),console.warn('styled-components: it looks like an unknown prop "'.concat(S,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var k=function(e,t){var r=It(),o=e.generateAndInjectStyles(t,r.styleSheet,r.stylis);return"production"!==process.env.NODE_ENV&&n(o),o}(c,v);"production"!==process.env.NODE_ENV&&e.warnTooManyClasses&&e.warnTooManyClasses(k);var x=Ke(u,d);return k&&(x+=" "+k),v.className&&(x+=" "+v.className),w[_e(b)&&!Se.has(b)?"class":"className"]=x,a&&(w.ref=a),r(b,w)}(C,e,o)}x.displayName=g;var C=t.forwardRef(x);return C.attrs=v,C.componentStyle=k,C.displayName=g,C.shouldForwardProp=b,C.foldedComponentIds=s?Ke(c.foldedComponentIds,c.styledComponentId):"",C.styledComponentId=y,C.target=s?c.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Qe(e,o[r],!0);return e}({},c.defaultProps,e):e}}),"production"!==process.env.NODE_ENV&&(ve(g,y),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var a=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(a,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(g,y)),et(C,(function(){return".".concat(C.styledComponentId)})),l&&qe(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Vt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gt=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ue(e)||Je(e))return Gt($t(Vt(be,c([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?$t(r):Gt($t(Vt(r,t)))}function Yt(e,t,n){if(void 0===n&&(n=we),!t)throw rt(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ht.apply(void 0,c([r],o,!1)))};return r.attrs=function(r){return Yt(e,t,i(i({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Yt(e,t,i(i({},n),r))},r}var Wt=function(e){return Yt(Bt,e)},qt=Wt;Se.forEach((function(e){qt[e]=Wt(e)})),"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var Ut="__sc-".concat(le,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[Ut]||(window[Ut]=0),1===window[Ut]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[Ut]+=1);var Xt,Kt,Zt,Jt=qt.button(Zt||(Xt=["\n    font-family: monospace;\n    font-size: 1.5em;\n    border: 3px solid black;\n    padding: 10px 20px;\n    box-shadow: 5px 5px black;\n    transition: 0.25s;\n    font-weight: bolder;\n    ","\n\n    ",";\n\n    &:active {\n        box-shadow: 0px 0px black;\n        transform: translate(5px, 5px);\n    }\n"],Kt=["\n    font-family: monospace;\n    font-size: 1.5em;\n    border: 3px solid black;\n    padding: 10px 20px;\n    box-shadow: 5px 5px black;\n    transition: 0.25s;\n    font-weight: bolder;\n    ","\n\n    ",";\n\n    &:active {\n        box-shadow: 0px 0px black;\n        transform: translate(5px, 5px);\n    }\n"],Object.defineProperty?Object.defineProperty(Xt,"raw",{value:Kt}):Xt.raw=Kt,Zt=Xt),(function(e){return e.disabled?"pointer-events: none;\n            background-color: gray;":"cursor: pointer;\n        background-color: ".concat(e.$backgroundColor,";")}),(function(e){return e.disabled?null:"&:hover {\n            color: white;\n        }"}));function Qt(t){return e(Jt,i({$disabled:t.disabled,$backgroundColor:t.backgroundColor,disabled:t.disabled,id:t.buttonId},{children:t.label}))}s.createRoot(document.getElementById("root")).render(e(t.StrictMode,{children:e((function(){return e("div",{className:"App"})}),{})}));export{Qt as Button};
//# sourceMappingURL=index.js.map
