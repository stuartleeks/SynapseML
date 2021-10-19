"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4377],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,d=p["".concat(i,".").concat(y)]||p[y]||m[y]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},445:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(4806),o=n(6010),s="tabItem_2kG2",l="tabItemActive_3NDg";var i=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,p=e.groupId,y=e.className,d=(0,r.Z)(),g=d.tabGroupChoices,f=d.setTabGroupChoices,v=(0,a.useState)(u),b=v[0],h=v[1],k=a.Children.toArray(e.children),x=[];if(null!=p){var T=g[p];null!=T&&T!==b&&m.some((function(e){return e.value===T}))&&h(T)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),a=m[n].value;h(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case c:var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case i:var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},y)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:E,onClick:E},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},8578:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4806:function(e,t,n){var a=n(7294),r=n(8578);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1989:function(e,t,n){var a=n(7294),r=n(2263);t.Z=function(e){var t=e.className,n=e.py,o=e.scala,s=e.sourceLink,l=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+l+"/pyspark/"+n,c="https://mmlspark.blob.core.windows.net/docs/"+l+"/scala/"+o;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:i},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:c},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:s},t)))))}},5978:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(445),l=n(1332),i=n(1989),c=["components"],u={},m={unversionedId:"documentation/transformers/cognitive/_TextAnalytics",id:"version-0.9.1/documentation/transformers/cognitive/_TextAnalytics",isDocsHomePage:!1,title:"_TextAnalytics",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/cognitive/_TextAnalytics.md",sourceDirName:"documentation/transformers/cognitive",slug:"/documentation/transformers/cognitive/_TextAnalytics",permalink:"/SynapseML/docs/documentation/transformers/cognitive/_TextAnalytics",version:"0.9.1",frontMatter:{}},p=[{value:"Text Analytics",id:"text-analytics",children:[{value:"EntityDetector",id:"entitydetector",children:[]},{value:"KeyPhraseExtractor",id:"keyphraseextractor",children:[]},{value:"LanguageDetector",id:"languagedetector",children:[]},{value:"NER",id:"ner",children:[]},{value:"PII",id:"pii",children:[]},{value:"TextSentiment",id:"textsentiment",children:[]}]}],y={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"text-analytics"},"Text Analytics"),(0,o.kt)("h3",{id:"entitydetector"},"EntityDetector"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n    ("1", "Microsoft released Windows 10"),\n    ("2", "In 1975, Bill Gates III and Paul Allen founded the company.")\n], ["id", "text"])\n\nentity = (EntityDetector()\n      .setSubscriptionKey(textKey)\n      .setLocation("eastus")\n      .setLanguage("en")\n      .setOutputCol("replies")\n      .setErrorCol("error"))\n\ndisplay(entity.transform(df))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\nimport org.apache.spark.sql.functions.{col, flatten}\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    ("1", "Microsoft released Windows 10"),\n    ("2", "In 1975, Bill Gates III and Paul Allen founded the company.")\n  ).toDF("id", "text")\n\nval entity = (new EntityDetector()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setLanguage("en")\n            .setOutputCol("replies"))\n\ndisplay(entity.transform(df))\n')))),(0,o.kt)(i.Z,{className:"EntityDetector",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.EntityDetector",scala:"com/microsoft/azure/synapse/ml/cognitive/EntityDetector.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"keyphraseextractor"},"KeyPhraseExtractor"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n    ("en", "Hello world. This is some input text that I love."),\n    ("fr", "Bonjour tout le monde"),\n    ("es", "La carretera estaba atascada. Hab\xeda mucho tr\xe1fico el d\xeda de ayer.")\n], ["lang", "text"])\n\nkeyPhrase = (KeyPhraseExtractor()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setLanguageCol("lang")\n            .setOutputCol("replies")\n            .setErrorCol("error"))\n\ndisplay(keyPhrase.transform(df))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    ("en", "Hello world. This is some input text that I love."),\n    ("fr", "Bonjour tout le monde"),\n    ("es", "La carretera estaba atascada. Hab\xeda mucho tr\xe1fico el d\xeda de ayer."),\n    ("en", null)\n  ).toDF("lang", "text")\n\nval keyPhrase = (new KeyPhraseExtractor()\n                  .setSubscriptionKey(textKey)\n                  .setLocation("eastus")\n                  .setLanguageCol("lang")\n                  .setOutputCol("replies"))\n\ndisplay(keyPhrase.transform(df))\n')))),(0,o.kt)(i.Z,{className:"KeyPhraseExtractor",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.KeyPhraseExtractor",scala:"com/microsoft/azure/synapse/ml/cognitive/KeyPhraseExtractor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"languagedetector"},"LanguageDetector"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n  ("Hello World",),\n  ("Bonjour tout le monde",),\n  ("La carretera estaba atascada. Hab\xeda mucho tr\xe1fico el d\xeda de ayer.",),\n  ("\u4f60\u597d",),\n  ("\u3053\u3093\u306b\u3061\u306f",),\n  (":) :( :D",)\n], ["text",])\n\nlanguage = (LanguageDetector()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setTextCol("text")\n            .setOutputCol("language")\n            .setErrorCol("error"))\n\ndisplay(language.transform(df))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    "Hello World",\n    "Bonjour tout le monde",\n    "La carretera estaba atascada. Hab\xeda mucho tr\xe1fico el d\xeda de ayer.",\n    ":) :( :D"\n  ).toDF("text")\n\nval language = (new LanguageDetector()\n      .setSubscriptionKey(textKey)\n      .setLocation("eastus")\n      .setOutputCol("replies"))\n\ndisplay(language.transform(df))\n')))),(0,o.kt)(i.Z,{className:"LanguageDetector",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.LanguageDetector",scala:"com/microsoft/azure/synapse/ml/cognitive/LanguageDetector.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"ner"},"NER"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n    ("1", "en", "I had a wonderful trip to Seattle last week."),\n    ("2", "en", "I visited Space Needle 2 times.")\n], ["id", "language", "text"])\n\nner = (NER()\n      .setSubscriptionKey(textKey)\n      .setLocation("eastus")\n      .setLanguageCol("language")\n      .setOutputCol("replies")\n      .setErrorCol("error"))\n\ndisplay(ner.transform(df)\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    ("1", "en", "I had a wonderful trip to Seattle last week."),\n    ("2", "en", "I visited Space Needle 2 times.")\n  ).toDF("id", "language", "text")\n\nval ner = (new NER()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setLanguage("en")\n            .setOutputCol("response"))\n\ndisplay(ner.transform(df)\n')))),(0,o.kt)(i.Z,{className:"NER",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.NER",scala:"com/microsoft/azure/synapse/ml/cognitive/NER.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"pii"},"PII"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n    ("1", "en", "My SSN is 859-98-0987"),\n    ("2", "en",\n      "Your ABA number - 111000025 - is the first 9 digits in the lower left hand corner of your personal check."),\n    ("3", "en", "Is 998.214.865-68 your Brazilian CPF number?")\n], ["id", "language", "text"])\n\npii = (PII()\n      .setSubscriptionKey(textKey)\n      .setLocation("eastus")\n      .setLanguage("en")\n      .setOutputCol("response")\n\ndisplay(pii.transform(df))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    ("1", "en", "My SSN is 859-98-0987"),\n    ("2", "en",\n      "Your ABA number - 111000025 - is the first 9 digits in the lower left hand corner of your personal check."),\n    ("3", "en", "Is 998.214.865-68 your Brazilian CPF number?")\n  ).toDF("id", "language", "text")\n\nval pii = (new PII()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setLanguage("en")\n            .setOutputCol("response"))\n\ndisplay(pii.transform(df))\n')))),(0,o.kt)(i.Z,{className:"PII",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.TextSentiment",scala:"com/microsoft/azure/synapse/ml/cognitive/TextSentiment.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"textsentiment"},"TextSentiment"),(0,o.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ntextKey = os.environ.get("COGNITIVE_API_KEY", getSecret("cognitive-api-key"))\ndf = spark.createDataFrame([\n  ("I am so happy today, its sunny!", "en-US"),\n  ("I am frustrated by this rush hour traffic", "en-US"),\n  ("The cognitive services on spark aint bad", "en-US"),\n], ["text", "language"])\n\nsentiment = (TextSentiment()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setTextCol("text")\n            .setOutputCol("sentiment")\n            .setErrorCol("error")\n            .setLanguageCol("language"))\n\ndisplay(sentiment.transform(df))\n'))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.cognitive._\nimport spark.implicits._\n\nval textKey = sys.env.getOrElse("COGNITIVE_API_KEY", None)\nval df = Seq(\n    ("en", "Hello world. This is some input text that I love."),\n    ("fr", "Bonjour tout le monde"),\n    ("es", "La carretera estaba atascada. Hab\xeda mucho tr\xe1fico el d\xeda de ayer."),\n    (null, "ich bin ein berliner"),\n    (null, null),\n    ("en", null)\n  ).toDF("lang", "text")\n\nval sentiment = (new TextSentiment()\n            .setSubscriptionKey(textKey)\n            .setLocation("eastus")\n            .setLanguageCol("lang")\n            .setModelVersion("latest")\n            .setShowStats(true)\n            .setOutputCol("replies"))\n\ndisplay(sentiment.transform(df))\n')))),(0,o.kt)(i.Z,{className:"TextSentiment",py:"mmlspark.cognitive.html#module-mmlspark.cognitive.TextSentiment",scala:"com/microsoft/azure/synapse/ml/cognitive/TextSentiment.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/cognitive/src/main/scala/com/microsoft/azure/synapse/ml/cognitive/TextAnalytics.scala",mdxType:"DocTable"}))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);