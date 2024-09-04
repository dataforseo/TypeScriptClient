[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisSentimentAnalysisLiveResultInfo

# Class: ContentAnalysisSentimentAnalysisLiveResultInfo

## Implements

- [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSentimentAnalysisLiveResultInfo()

> **new ContentAnalysisSentimentAnalysisLiveResultInfo**(`data`?): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Defined in

main.ts:167652

## Properties

### positive\_connotation\_distribution?

> `optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`positive_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)

#### Defined in

main.ts:167644

***

### sentiment\_connotation\_distribution?

> `optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`sentiment_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)

#### Defined in

main.ts:167648

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

#### Defined in

main.ts:167640

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:167661

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:167680

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Defined in

main.ts:167673
