**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisSentimentAnalysisLiveResultInfo

# Class: ContentAnalysisSentimentAnalysisLiveResultInfo

## Implements

- [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSentimentAnalysisLiveResultInfo(data)

> **new ContentAnalysisSentimentAnalysisLiveResultInfo**(`data`?): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Source

main.ts:164514

## Properties

### positive\_connotation\_distribution?

> **`optional`** **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`positive_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)

#### Source

main.ts:164506

***

### sentiment\_connotation\_distribution?

> **`optional`** **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`sentiment_connotation_distribution`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)

#### Source

main.ts:164510

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

#### Source

main.ts:164502

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:164523

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:164542

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Source

main.ts:164535
