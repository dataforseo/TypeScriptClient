**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisRatingDistributionLiveResultInfo

# Class: ContentAnalysisRatingDistributionLiveResultInfo

## Implements

- [`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisRatingDistributionLiveResultInfo(data)

> **new ContentAnalysisRatingDistributionLiveResultInfo**(`data`?): [`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md)

#### Returns

[`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Source

main.ts:170322

## Properties

### max?

> **`optional`** **max**: `number`

max rating on a distribution scale

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[`max`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#max)

#### Source

main.ts:170316

***

### metrics?

> **`optional`** **metrics**: [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

contains rating distribution metrics

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[`metrics`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#metrics)

#### Source

main.ts:170318

***

### min?

> **`optional`** **min**: `number`

min rating on a distribution scale

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[`min`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#min)

#### Source

main.ts:170314

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisRatingDistributionLiveResultInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisRatingDistributionLiveResultInfo.md#type)

#### Source

main.ts:170312

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:170331

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:170351

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisRatingDistributionLiveResultInfo`](ContentAnalysisRatingDistributionLiveResultInfo.md)

#### Source

main.ts:170344
