"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4598],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=s,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=["components"],o={title:"Classification - Adult Census",hide_title:!0,status:"stable",url_path:"examples/classification/Classification - Adult Census",name:"Classification - Adult Census"},l={unversionedId:"examples/classification/Classification - Adult Census",id:"examples/classification/Classification - Adult Census",isDocsHomePage:!1,title:"Classification - Adult Census",description:"Classification - Adult Census",source:"@site/docs/examples/classification/Classification - Adult Census.md",sourceDirName:"examples/classification",slug:"/examples/classification/Classification - Adult Census",permalink:"/SynapseML/docs/next/examples/classification/Classification - Adult Census",version:"current",frontMatter:{title:"Classification - Adult Census",hide_title:!0,status:"stable",url_path:"examples/classification/Classification - Adult Census",name:"Classification - Adult Census"},sidebar:"docs",previous:{title:"Classification - Adult Census using Vowpal Wabbit in SynapseML",permalink:"/SynapseML/docs/next/examples/classification/Classification - Adult Census with Vowpal Wabbit"},next:{title:"Classification - Before and After SynapseML",permalink:"/SynapseML/docs/next/examples/classification/Classification - Before and After SynapseML"}},c=[{value:"Classification - Adult Census",id:"classification---adult-census",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classification---adult-census"},"Classification - Adult Census"),(0,i.kt)("p",null,"In this example, we try to predict incomes from the ",(0,i.kt)("em",{parentName:"p"},"Adult Census")," dataset."),(0,i.kt)("p",null,"First, we import the packages (use ",(0,i.kt)("inlineCode",{parentName:"p"},"help(synapse)")," to view contents),"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\n")),(0,i.kt)("p",null,"Now let's read the data and split it to train and test sets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet")\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ntrain.limit(10).toPandas()\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TrainClassifier")," can be used to initialize and fit a model, it wraps SparkML classifiers.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"help(synapse.ml.train.TrainClassifier)")," to view the different parameters."),(0,i.kt)("p",null,"Note that it implicitly converts the data into the format expected by the algorithm: tokenize\nand hash strings, one-hot encodes categorical variables, assembles the features into a vector\nand so on.  The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"numFeatures")," controls the number of hashed features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainClassifier\n\nfrom pyspark.ml.classification import LogisticRegression\n\nmodel = TrainClassifier(model=LogisticRegression(), labelCol="income", numFeatures=256).fit(train)\n')),(0,i.kt)("p",null,"Finally, we save the model so it can be used in a scoring program."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'if os.environ.get("AZURE_SERVICE", None) != "Microsoft.ProjectArcadia":\n    model.write().overwrite().save("dbfs:/AdultCensus.mml")\nelse:\n    model.write().overwrite().save("abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/AdultCensus.mml")\n')))}u.isMDXComponent=!0}}]);