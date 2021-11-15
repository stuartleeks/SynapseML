// Copyright (C) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See LICENSE in project root for information.

package com.microsoft.azure.synapse.ml.cognitive

import com.microsoft.azure.synapse.ml.core.schema.SparkBindings
import spray.json.RootJsonFormat

// General Text Analytics Schemas

case class TADocument(language: Option[String], id: String, text: String)

object TADocument extends SparkBindings[TADocument]

case class TARequest(documents: Seq[TADocument])

object TARequest extends SparkBindings[TARequest]

case class TAError(id: String, error: String)

object TAError extends SparkBindings[TAError]

case class TAResponse[T](statistics: Option[TAResponseStatistics],
                         documents: Seq[T],
                         errors: Option[Seq[TAError]],
                         modelVersion: Option[String])

case class TAResponseStatistics(documentsCount: Int,
                                validDocumentsCount: Int,
                                erroneousDocumentsCount: Int,
                                transactionsCount: Int)

object TAJSONFormat {

  import spray.json.DefaultJsonProtocol._

  implicit val DocumentFormat: RootJsonFormat[TADocument] = jsonFormat3(TADocument.apply)
  implicit val RequestFormat: RootJsonFormat[TARequest] = jsonFormat1(TARequest.apply)
  implicit val AnalysisInputsFormat: RootJsonFormat[TAAnalyzeAnalysisInput] = jsonFormat1(TAAnalyzeAnalysisInput.apply)
  implicit val AnalysisTaskFormat: RootJsonFormat[TAAnalyzeTask] = jsonFormat1(TAAnalyzeTask.apply)
  implicit val AnalysisTasksFormat: RootJsonFormat[TAAnalyzeTasks] = jsonFormat5(TAAnalyzeTasks.apply)
  implicit val AnalyzeRequestFormat: RootJsonFormat[TAAnalyzeRequest] = jsonFormat3(TAAnalyzeRequest.apply)
  // implicit val AnalyzeResponseFormat: RootJsonFormat[TAAnalyzeResponse] = jsonFormat4(TAAnalyzeResponse.apply)
}

// SentimentV3 Schemas

object SentimentResponseV3 extends SparkBindings[TAResponse[SentimentScoredDocumentV3]]

case class SentimentScoredDocumentV3(id: String,
                                     sentiment: String,
                                     statistics: Option[DocumentStatistics],
                                     confidenceScores: SentimentScoreV3,
                                     sentences: Seq[Sentence],
                                     warnings: Seq[TAWarning])

case class SentimentScoreV3(positive: Double, neutral: Double, negative: Double)

case class Sentence(text: Option[String],
                    sentiment: String,
                    confidenceScores: SentimentScoreV3,
                    offset: Int,
                    length: Int)

case class DocumentStatistics(charactersCount: Int, transactionsCount: Int)

// Detect Language Schemas

object DetectLanguageResponseV3 extends SparkBindings[TAResponse[DocumentLanguageV3]]

case class DocumentLanguageV3(id: String,
                              detectedLanguage: Option[DetectedLanguageV3],
                              warnings: Seq[TAWarning],
                              statistics: Option[DocumentStatistics])

case class DetectedLanguageV3(name: String, iso6391Name: String, confidenceScore: Double)

// Detect Entities Schemas

object DetectEntitiesResponseV3 extends SparkBindings[TAResponse[DetectEntitiesScoreV3]]

case class DetectEntitiesScoreV3(id: String,
                               entities: Seq[EntityV3],
                               warnings: Seq[TAWarning],
                               statistics: Option[DocumentStatistics])

case class EntityV3(name: String,
                    matches: Seq[MatchV3],
                    language: String,
                    id: Option[String],
                    url: String,
                    dataSource: String)

case class MatchV3(confidenceScore: Double, text: String, offset: Int, length: Int)

// NER Schemas

object NERResponseV3 extends SparkBindings[TAResponse[NERDocV3]]

case class NERDocV3(id: String,
                    entities: Seq[NEREntityV3],
                    warnings: Seq[TAWarning],
                    statistics: Option[DocumentStatistics])

case class NEREntityV3(text: String,
                     category: String,
                     subcategory: Option[String] = None,
                     offset: Integer,
                     length: Integer,
                     confidenceScore: Double)

// NER Pii Schemas

object PIIResponseV3 extends SparkBindings[TAResponse[PIIDocV3]]

case class PIIDocV3(id: String,
                    entities: Seq[PIIEntityV3],
                    redactedText: String,
                    warnings: Seq[TAWarning],
                    statistics: Option[DocumentStatistics])

case class PIIEntityV3(text: String,
                       category: String,
                       subcategory: Option[String] = None,
                       offset: Integer,
                       length: Integer,
                       confidenceScore: Double)

// KeyPhrase Schemas

object KeyPhraseResponseV3 extends SparkBindings[TAResponse[KeyPhraseScoreV3]]

case class KeyPhraseScoreV3(id: String,
                            keyPhrases: Seq[String],
                            warnings: Seq[TAWarning],
                            statistics: Option[DocumentStatistics])

case class TAWarning(// Error code.
                    code: String,
                    // Warning message.
                    message: String,
                    // A JSON pointer reference indicating the target object.
                    targetRef: Option[String] = None)


// Text Analytics /analyze endpoint schemas

case class TAAnalyzeAnalysisInput(documents : Seq[TADocument])

object TAAnalyzeAnalysisInput extends SparkBindings[TAAnalyzeAnalysisInput]

case class TAAnalyzeTask(parameters: Map[String, String])

object TAAnalyzeTask extends SparkBindings[TAAnalyzeTask]

case class TAAnalyzeTasks(entityRecognitionTasks: Seq[TAAnalyzeTask],
                          entityLinkingTasks: Seq[TAAnalyzeTask],
                          entityRecognitionPiiTasks: Seq[TAAnalyzeTask],
                          keyPhraseExtractionTasks: Seq[TAAnalyzeTask],
                          sentimentAnalysisTasks: Seq[TAAnalyzeTask])

object TAAnalyzeTasks extends SparkBindings[TAAnalyzeTasks]

case class TAAnalyzeRequest(displayName: String,
                            analysisInput: TAAnalyzeAnalysisInput,
                            tasks: TAAnalyzeTasks
                           )

object TAAnalyzeRequest extends SparkBindings[TAAnalyzeRequest]


case class TAAnalyzeResponseTaskResults[T](documents: Seq[T],
                                        errors: Seq[TAError],
                                        modelVersion: String)
case class TAAnalyzeResponseTask[T](state: String,
                                 results: TAAnalyzeResponseTaskResults[T])

case class TAAnalyzeResponseTasks(completed: Int,
                                  failed: Int,
                                  inProgress: Int,
                                  total: Int,
                                  entityRecognitionTasks: Option[Seq[TAAnalyzeResponseTask[NERDocV3]]],
                                  entityLinkingTasks: Option[Seq[TAAnalyzeResponseTask[EntityV3]]],
                                  entityRecognitionPiiTasks: Option[Seq[TAAnalyzeResponseTask[PIIDocV3]]],
                                  keyPhraseExtractionTasks:  Option[Seq[TAAnalyzeResponseTask[KeyPhraseScoreV3]]],
                                  sentimentAnalysisTasks:  Option[Seq[TAAnalyzeResponseTask[SentimentScoredDocumentV3]]]
                                  // TODO - add other task types
                                 )

// API call response
case class TAAnalyzeResponse(status: String,
                             errors: Option[Seq[TAError]],
                             displayName: String,
                             tasks: TAAnalyzeResponseTasks)

object TAAnalyzeResponse extends SparkBindings[TAAnalyzeResponse]


// TODO - error col for errors property
//      - drop completed, failed, inProgress, total fields
//      - setOutputCol -> setOutputColPrefix, then have <prefix>_keyPhraseExtraction etc (as, e.g. array of TAAnalyzeResponseTaskResults[KeyPhraseScoreV3] )

// TODO - check that we're handling language/languageCol!

// Transformer output schema per input row
// TODO - add other task types
// TODO - extend to handle multiple instances of each task type

case class TAAnalyzeResultTaskResults[T](document: Option[T], // TODO - apply reshaping in the UDF? Similar to stripping id from results in TextAnalyticsBase.getInternalTransformer implementation
                                           error: Option[TAError])

// case class TAAnalyzeResult(entityRecognition: Option[TAAnalyzeResultTaskResults[NERDocV3]],
//                            entityLinking: Option[TAAnalyzeResultTaskResults[EntityV3]],
//                            entityRecognitionPii: Option[TAAnalyzeResultTaskResults[PIIDocV3]],
//                            keyPhraseExtraction: Option[TAAnalyzeResultTaskResults[KeyPhraseScoreV3]],
//                            sentimentAnalysis: Option[TAAnalyzeResultTaskResults[SentimentScoredDocumentV3]])


//  case class TAAnalyzeResult(entityRecognition: Option[TAAnalyzeResultTaskResults[String]])
//  case class TAAnalyzeResult(entityRecognition: Option[Seq[String]])

// case class Foo[T](document: Option[T],
//                   error : Option[String]
//                   )

//  case class TAAnalyzeResult(entityRecognition: Option[Foo[String]])
// case class Bar[T](value: Option[T])
case class Bar[T](value: Option[T], value2: Option[String])
 case class TAAnalyzeResult(entityRecognition: Option[String],
                            bar: Option[Bar[String]])



// case class TAAnalyzeResult(test1: Option[Seq[String]],
//                            test2: Option[Seq[Int]])

object TAAnalyzeResults extends SparkBindings[TAAnalyzeResult]





