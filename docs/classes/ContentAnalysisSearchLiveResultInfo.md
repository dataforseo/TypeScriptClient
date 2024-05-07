**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisSearchLiveResultInfo

# Class: ContentAnalysisSearchLiveResultInfo

## Implements

- [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveResultInfo(data)

> **new ContentAnalysisSearchLiveResultInfo**(`data`?): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Source

main.ts:164246

## Properties

### items?

> **`optional`** **items**: [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)[]

contains citations and related data

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items)

#### Source

main.ts:164242

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items_count)

#### Source

main.ts:164240

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`offset_token`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#offset_token)

#### Source

main.ts:164236

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#total_count)

#### Source

main.ts:164238

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:164255

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:164279

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Source

main.ts:164272
