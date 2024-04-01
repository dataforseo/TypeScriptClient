[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisRatingDistributionLiveResultInfo

# Class: ContentAnalysisRatingDistributionLiveResultInfo

## Implements

- [`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisRatingDistributionLiveResultInfo.md#constructor)

### Properties

- [max](ContentAnalysisRatingDistributionLiveResultInfo.md#max)
- [metrics](ContentAnalysisRatingDistributionLiveResultInfo.md#metrics)
- [min](ContentAnalysisRatingDistributionLiveResultInfo.md#min)
- [type](ContentAnalysisRatingDistributionLiveResultInfo.md#type)

### Methods

- [init](ContentAnalysisRatingDistributionLiveResultInfo.md#init)
- [toJSON](ContentAnalysisRatingDistributionLiveResultInfo.md#tojson)
- [fromJS](ContentAnalysisRatingDistributionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisRatingDistributionLiveResultInfo**(`data?`): [`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md) |

#### Returns

[`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Defined in

main.ts:163844

## Properties

### max

• `Optional` **max**: `number`

max rating on a distribution scale

#### Implementation of

[IContentAnalysisRatingDistributionLiveResultInfo](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[max](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#max)

#### Defined in

main.ts:163838

___

### metrics

• `Optional` **metrics**: [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

contains rating distribution metrics

#### Implementation of

[IContentAnalysisRatingDistributionLiveResultInfo](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[metrics](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#metrics)

#### Defined in

main.ts:163840

___

### min

• `Optional` **min**: `number`

min rating on a distribution scale

#### Implementation of

[IContentAnalysisRatingDistributionLiveResultInfo](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[min](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#min)

#### Defined in

main.ts:163836

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisRatingDistributionLiveResultInfo](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[type](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#type)

#### Defined in

main.ts:163834

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

main.ts:163853

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

main.ts:163873

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Defined in

main.ts:163866
