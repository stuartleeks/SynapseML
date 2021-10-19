"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3181],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?n.createElement(b,o(o({ref:a},u),{},{components:t})):n.createElement(b,o({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6028:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"VW",hide_title:!0,sidebar_label:"About",name:"about"},l={unversionedId:"features/vw/about",id:"features/vw/about",isDocsHomePage:!1,title:"VW",description:"Overview",source:"@site/docs/features/vw/about.md",sourceDirName:"features/vw",slug:"/features/vw/about",permalink:"/SynapseML/docs/next/features/vw/about",version:"current",sidebar_label:"About",frontMatter:{title:"VW",hide_title:!0,sidebar_label:"About",name:"about"},sidebar:"docs",previous:{title:"SparkServing - Deploying a Classifier",permalink:"/SynapseML/docs/next/features/spark_serving/SparkServing - Deploying a Classifier"},next:{title:"Vowpal Wabbit - Overview",permalink:"/SynapseML/docs/next/features/vw/Vowpal Wabbit - Overview"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Advantages of VowpalWabbit",id:"advantages-of-vowpalwabbit",children:[]},{value:"Limitations of VowpalWabbit on Spark",id:"limitations-of-vowpalwabbit-on-spark",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Hyper-parameter tuning",id:"hyper-parameter-tuning",children:[]},{value:"Architecture",id:"architecture",children:[]}],u={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("img",{width:"200",src:"/img/notebooks/vw-blue-dark-orange.svg"}),(0,i.kt)("h1",{id:"vowpalwabbit-on-apache-spark"},"VowpalWabbit on Apache Spark"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit"},"VowpalWabbit")," (VW) is a machine learning system which\npushes the frontier of machine learning with techniques such as online, hashing, allreduce,\nreductions, learning2search, active, and interactive learning.\nVowpalWabbit is a popular choice in ad-tech due to it's speed and cost efficacy.\nFurthermore it includes many advances in the area of reinforcement learning (e.g. contextual bandits). "),(0,i.kt)("h3",{id:"advantages-of-vowpalwabbit"},"Advantages of VowpalWabbit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Composability"),": VowpalWabbit models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving workloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Small footprint"),": VowpalWabbit memory consumption is rather small and can be controlled through '-b 18' or setNumBits method.",(0,i.kt)("br",{parentName:"li"}),"This determines the size of the model (e.g. 2^18 * some_constant)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feature Interactions"),": Feature interactions (e.g. quadratic, cubic,... terms) are created on-the-fly within the most inner\nlearning loop in VW.\nInteractions can be specified by using the -q parameter and passing the first character of the namespaces that should be ",(0,i.kt)("em",{parentName:"li"},"interacted"),".\nThe VW namespace concept is mapped to Spark using columns. The column name is used as namespace name, thus one sparse or dense Spark ML vector corresponds to the features of a single namespace.\nTo allow passing of multiple namespaces the VW estimator (classifier or regression) expose an additional property called ",(0,i.kt)("em",{parentName:"li"},"additionalFeatures"),". Users can pass an array of column names."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple deployment"),": all native dependencies are packaged into a single jars (including boost and zlib)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VowpalWabbit command line arguments"),": users can pass VW command line arguments to control the learning process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VowpalWabbit binary models")," Users can supply an inital VowpalWabbit model to start the training which can be produced outside of\nVW on Spark by invoking ",(0,i.kt)("em",{parentName:"li"},"setInitialModel")," and pass the model as a byte array. Similarly users can access the binary model by invoking\n",(0,i.kt)("em",{parentName:"li"},"getModel")," on the trained model object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Java-based hashing")," VWs version of murmur-hash was re-implemented in Java (praise to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jackdoe"},"JackDoe"),")\nproviding a major performance improvement compared to passing input strings through JNI and hashing in C++."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross language")," VowpalWabbit on Spark is available on Spark, PySpark, and SparklyR.")),(0,i.kt)("h3",{id:"limitations-of-vowpalwabbit-on-spark"},"Limitations of VowpalWabbit on Spark"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux and CentOS only")," The native binaries included with the published jar are built Linux and CentOS only.\nWe're working on creating a more portable version by statically linking Boost and lib C++."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Limited Parsing")," Features implemented in the native VW parser (e.g. ngrams, skips, ...) are not yet implemented in\nVowpalWabbitFeaturizer.")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In PySpark, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"VowpalWabbitClassifier")," via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitClassifier\nmodel = (VowpalWabbitClassifier(numPasses=5, args="--holdout_off --loss_function logistic")\n            .fit(train))\n')),(0,i.kt)("p",null,"Similarly, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"VowpalWabbitRegressor"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import VowpalWabbitRegressor\nmodel = (VowpalWabbitRegressor(args="--holdout_off --loss_function quantile -q :: -l 0.1")\n            .fit(train))\n')),(0,i.kt)("p",null,"Through the args parameter you can pass command line parameters to VW as documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vowpalWabbit/vowpal_wabbit/wiki/Command-Line-Arguments"},"VW Wiki"),"."),(0,i.kt)("p",null,"For an end to end application, check out the VowpalWabbit ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/vw/Vowpal%20Wabbit%20-%20Overview"},"notebook\nexample"),"."),(0,i.kt)("h3",{id:"hyper-parameter-tuning"},"Hyper-parameter tuning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Common parameters can also be set through methods enabling the use of SparkMLs ParamGridBuilder and CrossValidator (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure/mmlspark/blob/master/src/test/scala/com/microsoft/azure/synapse/ml/vw/VerifyVowpalWabbitClassifier.scala#L29"},"example"),"). Note if\nthe same parameters are passed through ",(0,i.kt)("em",{parentName:"li"},"args"),' property (e.g. args="-l 0.2" and setLearningRate(0.5)) the ',(0,i.kt)("em",{parentName:"li"},"args")," value will\ntake precedence.\nparameter")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"learningRate"),(0,i.kt)("li",{parentName:"ul"},"numPasses"),(0,i.kt)("li",{parentName:"ul"},"numBits"),(0,i.kt)("li",{parentName:"ul"},"l1"),(0,i.kt)("li",{parentName:"ul"},"l2"),(0,i.kt)("li",{parentName:"ul"},"powerT"),(0,i.kt)("li",{parentName:"ul"},"interactions"),(0,i.kt)("li",{parentName:"ul"},"ignoreNamespaces")),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"VowpalWabbit on Spark uses an optimized JNI layer to efficiently support Spark.\nJava bindings can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VowpalWabbit/vowpal_wabbit/blob/master/java/src/main/c%2B%2B/jni_spark_vw_generated.h"},"VW GitHub repo"),"."),(0,i.kt)("p",null,"VWs command line tool uses a 2-thread architecture (1x parsing/hashing, 1x learning) for learning and inference.\nTo fluently embed VW into the Spark ML eco system the following adaptions were made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VW classifier/regressor operates on Spark's dense/sparse vectors"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pro: best composability with existing Spark ML components."),(0,i.kt)("li",{parentName:"ul"},"Cons: due to type restrictions (e.g. feature indicies are Java integers) the maximum model size is limited to 30-bits. One could overcome this restriction by adding additional type support to the classifier/regressor to directly operate on input features (e.g. strings, int, double, ...)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VW hashing is separated out into the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/mmlspark/blob/master/src/test/scala/com/microsoft/azure/synapse/ml/vw/VerifyVowpalWabbitFeaturizer.scala#L34"},"VowpalWabbitFeaturizer")," transformer. It supports mapping Spark Dataframe schema into VWs namespaces and sparse\nfeatures."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Pro: featurization can be scaled to many nodes, scale independent of distributed learning.\n- Pro: hashed features can be cached and efficiently re-used when performing hyper-parameter sweeps.\n- Pro: featurization can be used for other Spark ML learning algorithms.\n- Cons: due to type restrictions (e.g. sparse indicies are Java integers) the hash space is limited by 30-bits.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VW multi-pass training can be enabled using '--passes 4' argument or setNumPasses method. Cache file is automatically named."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pro: simplified usage."),(0,i.kt)("li",{parentName:"ul"},"Pro: certain algorithms (e.g. l-bfgs) require a cache file when running in multi-pass node."),(0,i.kt)("li",{parentName:"ul"},"Cons: The cache file is created in the Java temp directory. Depending on your nodes i/o and the location of the temp directory this can be a bottleneck."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VW distributed training is transparently setup and can be controlled through the input dataframes number of partitions.\nSimilar to LightGBM all training instances must be running at the same time, thus the maxium parallelism is restricted by the\nnumber of executors available in the cluster. Under the hoods VWs built-in spanning tree functionality is used to coordinate allreduce.\nRequired parameters are automatically determined and supplied to VW. The spanning tree coordination process is run on the driver node."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pro: seamless parallelization."),(0,i.kt)("li",{parentName:"ul"},"Cons: currently barrier execution mode is not implemented and thus if one node crashes the complete job needs to be manually restarted.")))))}m.isMDXComponent=!0}}]);