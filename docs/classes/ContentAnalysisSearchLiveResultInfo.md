[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisSearchLiveResultInfo

# Class: ContentAnalysisSearchLiveResultInfo

## Implements

- [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveResultInfo()

> **new ContentAnalysisSearchLiveResultInfo**(`data`?): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Defined in

main.ts:166526

## Properties

### items?

> `optional` **items**: [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)[]

contains citations and related data

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items)

#### Defined in

main.ts:166522

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items_count)

#### Defined in

main.ts:166520

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`offset_token`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#offset_token)

#### Defined in

main.ts:166516

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#total_count)

#### Defined in

main.ts:166518

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:166535

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:166559

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

#### Defined in

main.ts:166552
