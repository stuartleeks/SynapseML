"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8592],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8052:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable",name:"DeepLearning - CIFAR10 Convolutional Network"},p={unversionedId:"examples/deep_learning/DeepLearning - CIFAR10 Convolutional Network",id:"examples/deep_learning/DeepLearning - CIFAR10 Convolutional Network",isDocsHomePage:!1,title:"DeepLearning - CIFAR10 Convolutional Network",description:"DeepLearning - CIFAR10 Convolutional Network",source:"@site/docs/examples/deep_learning/DeepLearning - CIFAR10 Convolutional Network.md",sourceDirName:"examples/deep_learning",slug:"/examples/deep_learning/DeepLearning - CIFAR10 Convolutional Network",permalink:"/SynapseML/docs/next/examples/deep_learning/DeepLearning - CIFAR10 Convolutional Network",version:"current",frontMatter:{title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable",name:"DeepLearning - CIFAR10 Convolutional Network"},sidebar:"docs",previous:{title:"DeepLearning - BiLSTM Medical Entity Extraction",permalink:"/SynapseML/docs/next/examples/deep_learning/DeepLearning - BiLSTM Medical Entity Extraction"},next:{title:"DeepLearning - Flower Image Classification",permalink:"/SynapseML/docs/next/examples/deep_learning/DeepLearning - Flower Image Classification"}},s=[{value:"DeepLearning - CIFAR10 Convolutional Network",id:"deeplearning---cifar10-convolutional-network",children:[]}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deeplearning---cifar10-convolutional-network"},"DeepLearning - CIFAR10 Convolutional Network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.cntk import CNTKModel\nfrom synapse.ml.downloader import ModelDownloader\nfrom pyspark.sql.functions import udf\nfrom pyspark.sql.types import IntegerType\nfrom os.path import abspath\n")),(0,o.kt)("p",null,"Set some paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'cdnURL = "https://mmlspark.azureedge.net/datasets"\n\n# Please note that this is a copy of the CIFAR10 dataset originally found here:\n# http://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz\nimagesWithLabels = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/CIFAR10_test.parquet")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'modelName = "ConvNet"\nmodelDir = "dbfs:///models/"\n')),(0,o.kt)("p",null,"Get the model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"d = ModelDownloader(spark, modelDir)\nmodel = d.downloadByName(modelName)\n\n")),(0,o.kt)("p",null,"Evaluate CNTK model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import time\nstart = time.time()\n\n# Use CNTK model to get log probabilities\ncntkModel = CNTKModel().setInputCol("images").setOutputCol("output") \\\n                       .setModelLocation(model.uri).setOutputNode("z")\nscoredImages = cntkModel.transform(imagesWithLabels)\n\n# Transform the log probabilities to predictions\ndef argmax(x): return max(enumerate(x),key=lambda p: p[1])[0]\n\nargmaxUDF = udf(argmax, IntegerType())\nimagePredictions = scoredImages.withColumn("predictions", argmaxUDF("output")) \\\n                               .select("predictions", "labels")\n\nnumRows = imagePredictions.count()\n\nend = time.time()\nprint("classifying {} images took {} seconds".format(numRows,end-start))\n')),(0,o.kt)("p",null,"Plot confusion matrix."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'imagePredictions = imagePredictions.toPandas()\ny, y_hat = imagePredictions["labels"], imagePredictions["predictions"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nfrom sklearn.metrics import confusion_matrix\n\ncm = confusion_matrix(y, y_hat)\n\nlabels = ["airplane", "automobile", "bird", "cat", "deer", "dog", "frog",\n          "horse", "ship", "truck"]\nplt.imshow(cm, interpolation="nearest", cmap=plt.cm.Blues)\nplt.colorbar()\ntick_marks = np.arange(len(labels))\nplt.xticks(tick_marks, labels, rotation=90)\nplt.yticks(tick_marks, labels)\nplt.xlabel("Predicted label")\nplt.ylabel("True Label")\ndisplay(plt.show())\n')))}m.isMDXComponent=!0}}]);