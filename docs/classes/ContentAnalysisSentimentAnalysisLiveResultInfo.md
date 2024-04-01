[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisSentimentAnalysisLiveResultInfo

# Class: ContentAnalysisSentimentAnalysisLiveResultInfo

## Implements

- [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSentimentAnalysisLiveResultInfo.md#constructor)

### Properties

- [positive\_connotation\_distribution](ContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)
- [sentiment\_connotation\_distribution](ContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)
- [type](ContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

### Methods

- [init](ContentAnalysisSentimentAnalysisLiveResultInfo.md#init)
- [toJSON](ContentAnalysisSentimentAnalysisLiveResultInfo.md#tojson)
- [fromJS](ContentAnalysisSentimentAnalysisLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSentimentAnalysisLiveResultInfo**(`data?`): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSentimentAnalysisLiveResultInfo`](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md) |

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Defined in

main.ts:163412

## Properties

### positive\_connotation\_distribution

• `Optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[positive_connotation_distribution](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)

#### Defined in

main.ts:163404

___

### sentiment\_connotation\_distribution

• `Optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[sentiment_connotation_distribution](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)

#### Defined in

main.ts:163408

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[type](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

#### Defined in

main.ts:163400

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:163421

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:163440

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSentimentAnalysisLiveResultInfo`](ContentAnalysisSentimentAnalysisLiveResultInfo.md)

#### Defined in

main.ts:163433
