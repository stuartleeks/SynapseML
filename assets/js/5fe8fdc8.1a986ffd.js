"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9142],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return t?r.createElement(d,l(l({ref:n},m),{},{components:t})):r.createElement(d,l({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3126:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"Interpretability - Image Explainers",hide_title:!0,status:"stable",name:"Interpretability - Image Explainers"},s={unversionedId:"examples/model_interpretability/Interpretability - Image Explainers",id:"version-0.9.1/examples/model_interpretability/Interpretability - Image Explainers",isDocsHomePage:!1,title:"Interpretability - Image Explainers",description:"Interpretability - Image Explainers",source:"@site/versioned_docs/version-0.9.1/examples/model_interpretability/Interpretability - Image Explainers.md",sourceDirName:"examples/model_interpretability",slug:"/examples/model_interpretability/Interpretability - Image Explainers",permalink:"/SynapseML/docs/examples/model_interpretability/Interpretability - Image Explainers",version:"0.9.1",frontMatter:{title:"Interpretability - Image Explainers",hide_title:!0,status:"stable",name:"Interpretability - Image Explainers"},sidebar:"version-0.9.1/docs",previous:{title:"DeepLearning - Transfer Learning",permalink:"/SynapseML/docs/examples/deep_learning/DeepLearning - Transfer Learning"},next:{title:"Interpretability - Tabular SHAP explainer",permalink:"/SynapseML/docs/examples/model_interpretability/Interpretability - Tabular SHAP explainer"}},p=[{value:"Interpretability - Image Explainers",id:"interpretability---image-explainers",children:[]}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interpretability---image-explainers"},"Interpretability - Image Explainers"),(0,i.kt)("p",null,"In this example, we use LIME and Kernel SHAP explainers to explain the ResNet50 model's multi-class output of an image."),(0,i.kt)("p",null,"First we import the packages and define some UDFs and a plotting function we will need later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.explainers import *\n\nfrom synapse.ml.onnx import ONNXModel\n\nfrom synapse.ml.opencv import ImageTransformer\n\nfrom synapse.ml.io import *\n\nfrom pyspark.ml import Pipeline\n\nfrom pyspark.ml.classification import LogisticRegression\n\nfrom pyspark.ml.feature import StringIndexer\n\nfrom pyspark.sql.functions import *\n\nfrom pyspark.sql.types import *\n\nimport numpy as np\n\nimport pyspark\n\nimport urllib.request\n\nimport matplotlib.pyplot as plt\n\nimport PIL, io\n\nfrom PIL import Image\n\n\n\nvec_slice = udf(lambda vec, indices: (vec.toArray())[indices].tolist(), ArrayType(FloatType()))\n\narg_top_k = udf(lambda vec, k: (-vec.toArray()).argsort()[:k].tolist(), ArrayType(IntegerType()))\n\n\n\ndef downloadBytes(url: str):\n\n  with urllib.request.urlopen(url) as url:\n\n    barr = url.read()\n\n    return barr\n\n\n\ndef rotate_color_channel(bgr_image_array, height, width, nChannels):\n\n  B, G, R, *_ = np.asarray(bgr_image_array).reshape(height, width, nChannels).T\n\n  rgb_image_array = np.array((R, G, B)).T\n\n  return rgb_image_array\n\n    \n\ndef plot_superpixels(image_rgb_array, sp_clusters, weights, green_threshold=99):\n\n    superpixels = sp_clusters\n\n    green_value = np.percentile(weights, green_threshold)\n\n    img = Image.fromarray(image_rgb_array, mode='RGB').convert(\"RGBA\")\n\n    image_array = np.asarray(img).copy()\n\n    for (sp, v) in zip(superpixels, weights):\n\n        if v > green_value:\n\n            for (x, y) in sp:\n\n                image_array[y, x, 1] = 255\n\n                image_array[y, x, 3] = 200\n\n    plt.clf()\n\n    plt.imshow(image_array)\n\n    display()\n")),(0,i.kt)("p",null,"Create a dataframe for a testing image, and use the ResNet50 ONNX model to infer the image."),(0,i.kt)("p",null,'The result shows 39.6% probability of "violin" (889), and 38.4% probability of "upright piano" (881).'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.io import *\n\n\n\nimage_df = spark.read.image().load("wasbs://publicwasb@mmlspark.blob.core.windows.net/explainers/images/david-lusvardi-dWcUncxocQY-unsplash.jpg")\n\ndisplay(image_df)\n\n\n\n# Rotate the image array from BGR into RGB channels for visualization later.\n\nrow = image_df.select("image.height", "image.width", "image.nChannels", "image.data").head()\n\nlocals().update(row.asDict())\n\nrgb_image_array = rotate_color_channel(data, height, width, nChannels)\n\n\n\n# Download the ONNX model\n\nmodelPayload = downloadBytes("https://mmlspark.blob.core.windows.net/publicwasb/ONNXModels/resnet50-v2-7.onnx")\n\n\n\nfeaturizer = (\n\n  ImageTransformer(inputCol="image", outputCol="features")\n\n      .resize(224, True)\n\n      .centerCrop(224, 224)\n\n      .normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225], color_scale_factor = 1/255)\n\n      .setTensorElementType(FloatType())\n\n)\n\n\n\nonnx = (\n\n  ONNXModel()\n\n      .setModelPayload(modelPayload)\n\n      .setFeedDict({"data": "features"})\n\n      .setFetchDict({"rawPrediction": "resnetv24_dense0_fwd"})\n\n      .setSoftMaxDict({"rawPrediction": "probability"})\n\n      .setMiniBatchSize(1)\n\n)\n\n\n\nmodel = Pipeline(stages=[featurizer, onnx]).fit(image_df)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'predicted = (\n    model.transform(image_df)\n      .withColumn("top2pred", arg_top_k(col("probability"), lit(2)))\n      .withColumn("top2prob", vec_slice(col("probability"), col("top2pred")))\n)\n\ndisplay(predicted.select("top2pred", "top2prob"))\n')),(0,i.kt)("p",null,"First we use the LIME image explainer to explain the model's top 2 classes' probabilities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lime = (\n    ImageLIME()\n    .setModel(model)\n    .setOutputCol("weights")\n    .setInputCol("image")\n    .setCellSize(150.0)\n    .setModifier(50.0)\n    .setNumSamples(500)\n    .setTargetCol("probability")\n    .setTargetClassesCol("top2pred")\n    .setSamplingFraction(0.7)\n)\n\nlime_result = (\n    lime.transform(predicted)\n    .withColumn("weights_violin", col("weights").getItem(0))\n    .withColumn("weights_piano", col("weights").getItem(1))\n    .cache()\n)\n\ndisplay(lime_result.select(col("weights_violin"), col("weights_piano")))\nlime_row = lime_result.head()\n')),(0,i.kt)("p",null,'We plot the LIME weights for "violin" output and "upright piano" output.'),(0,i.kt)("p",null,"Green area are superpixels with LIME weights above 95 percentile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plot_superpixels(rgb_image_array, lime_row["superpixels"]["clusters"], list(lime_row["weights_violin"]), 95)\nplot_superpixels(rgb_image_array, lime_row["superpixels"]["clusters"], list(lime_row["weights_piano"]), 95)\n')),(0,i.kt)("p",null,"Your results will look like:"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/image-lime-20210811.png"}),(0,i.kt)("p",null,"Then we use the Kernel SHAP image explainer to explain the model's top 2 classes' probabilities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'shap = (\n    ImageSHAP()\n    .setModel(model)\n    .setOutputCol("shaps")\n    .setSuperpixelCol("superpixels")\n    .setInputCol("image")\n    .setCellSize(150.0)\n    .setModifier(50.0)\n    .setNumSamples(500)\n    .setTargetCol("probability")\n    .setTargetClassesCol("top2pred")\n)\n\nshap_result = (\n    shap.transform(predicted)\n    .withColumn("shaps_violin", col("shaps").getItem(0))\n    .withColumn("shaps_piano", col("shaps").getItem(1))\n    .cache()\n)\n\ndisplay(shap_result.select(col("shaps_violin"), col("shaps_piano")))\nshap_row = shap_result.head()\n')),(0,i.kt)("p",null,'We plot the SHAP values for "piano" output and "cell" output.'),(0,i.kt)("p",null,"Green area are superpixels with SHAP values above 95 percentile."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notice that we drop the base value from the SHAP output before rendering the superpixels. The base value is the model output for the background (all black) image.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'plot_superpixels(rgb_image_array, shap_row["superpixels"]["clusters"], list(shap_row["shaps_violin"][1:]), 95)\nplot_superpixels(rgb_image_array, shap_row["superpixels"]["clusters"], list(shap_row["shaps_piano"][1:]), 95)\n')),(0,i.kt)("p",null,"Your results will look like:"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/image-shap-20210811.png"}))}u.isMDXComponent=!0}}]);