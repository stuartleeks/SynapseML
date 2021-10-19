"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2707:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"TextAnalytics - Amazon Book Reviews",hide_title:!0,status:"stable",name:"TextAnalytics - Amazon Book Reviews"},l={unversionedId:"examples/text_analytics/TextAnalytics - Amazon Book Reviews",id:"examples/text_analytics/TextAnalytics - Amazon Book Reviews",isDocsHomePage:!1,title:"TextAnalytics - Amazon Book Reviews",description:"TextAnalytics - Amazon Book Reviews",source:"@site/docs/examples/text_analytics/TextAnalytics - Amazon Book Reviews.md",sourceDirName:"examples/text_analytics",slug:"/examples/text_analytics/TextAnalytics - Amazon Book Reviews",permalink:"/SynapseML/docs/next/examples/text_analytics/TextAnalytics - Amazon Book Reviews",version:"current",frontMatter:{title:"TextAnalytics - Amazon Book Reviews",hide_title:!0,status:"stable",name:"TextAnalytics - Amazon Book Reviews"},sidebar:"docs",previous:{title:"TextAnalytics - Amazon Book Reviews with Word2Vec",permalink:"/SynapseML/docs/next/examples/text_analytics/TextAnalytics - Amazon Book Reviews with Word2Vec"},next:{title:"Transformers - Cognitive",permalink:"/SynapseML/docs/next/documentation/transformers/transformers_cognitive"}},c=[{value:"TextAnalytics - Amazon Book Reviews",id:"textanalytics---amazon-book-reviews",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"textanalytics---amazon-book-reviews"},"TextAnalytics - Amazon Book Reviews"),(0,o.kt)("p",null,"Again, try to predict Amazon book ratings greater than 3 out of 5, this time using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"TextFeaturizer")," module which is a composition of several text analytics APIs that\nare native to Spark."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n    spark = SparkSession.builder.getOrCreate()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet")\ndata.limit(10).toPandas()\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"TextFeaturizer")," to generate our features column.  We remove stop words, and use TF-IDF\nto generate 2\xb2\u2070 sparse features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize.text import TextFeaturizer\n\ntextFeaturizer = TextFeaturizer() \\\n\n  .setInputCol("text").setOutputCol("features") \\\n\n  .setUseStopWordsRemover(True).setUseIDF(True).setMinDocFreq(5).setNumFeatures(1 << 16).fit(data)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"processedData = textFeaturizer.transform(data)\nprocessedData.limit(5).toPandas()\n")),(0,o.kt)("p",null,"Change the label so that we can predict whether the rating is greater than 3 using a binary\nclassifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'processedData = processedData.withColumn("label", processedData["rating"] > 3) \\\n                             .select(["features", "label"])\nprocessedData.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Train several Logistic Regression models with different regularizations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'train, test, validation = processedData.randomSplit([0.60, 0.20, 0.20])\n\nfrom pyspark.ml.classification import LogisticRegression\n\n\n\nlrHyperParams = [0.05, 0.1, 0.2, 0.4]\n\nlogisticRegressions = [LogisticRegression(regParam = hyperParam) for hyperParam in lrHyperParams]\n\n\n\nfrom synapse.ml.train import TrainClassifier\n\nlrmodels = [TrainClassifier(model=lrm, labelCol="label").fit(train) for lrm in logisticRegressions]\n')),(0,o.kt)("p",null,"Find the model with the best AUC on the test set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import FindBestModel, BestModel\n\nbestModel = FindBestModel(evaluationMetric="AUC", models=lrmodels).fit(test)\n\nbestModel.getRocCurve().show()\n\nbestModel.getBestModelMetrics().show()\n\nbestModel.getAllModelMetrics().show()\n\n\n')),(0,o.kt)("p",null,"Use the optimized ",(0,o.kt)("inlineCode",{parentName:"p"},"ComputeModelStatistics")," API to find the model accuracy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\npredictions = bestModel.transform(validation)\n\nmetrics = ComputeModelStatistics().transform(predictions)\n\nprint("Best model\'s accuracy on validation set = "\n\n      + "{0:.2f}%".format(metrics.first()["accuracy"] * 100))\n')))}m.isMDXComponent=!0}}]);