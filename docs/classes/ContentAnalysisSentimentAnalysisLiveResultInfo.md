[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisSentimentAnalysisLiveResultInfo

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

[main.ts:157985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157985)

## Properties

### positive\_connotation\_distribution

• `Optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[positive_connotation_distribution](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)

#### Defined in

[main.ts:157977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157977)

___


### sentiment\_connotation\_distribution

• `Optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[sentiment_connotation_distribution](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)

#### Defined in

[main.ts:157981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157981)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisSentimentAnalysisLiveResultInfo](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md).[type](../interfaces/IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

#### Defined in

[main.ts:157973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157973)

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

[main.ts:157994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157994)

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

[main.ts:158013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158013)

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

[main.ts:158006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158006)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")