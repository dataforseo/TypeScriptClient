[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSearchLiveResultInfo

# Class: ContentAnalysisSearchLiveResultInfo

Defined in: main.ts:178564

## Implements

- [`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSearchLiveResultInfo()

> **new ContentAnalysisSearchLiveResultInfo**(`data`?): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

Defined in: main.ts:178578

#### Parameters

##### data?

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md)

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`ContentAnalysisSearchLiveItem`](ContentAnalysisSearchLiveItem.md)[]

Defined in: main.ts:178574

contains citations and related data

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:178572

the number of results returned in the items array

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`items_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#items_count)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:178568

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`offset_token`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:178570

total amount of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisSearchLiveResultInfo`](../interfaces/IContentAnalysisSearchLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisSearchLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178587

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178611

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)

Defined in: main.ts:178604

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSearchLiveResultInfo`](ContentAnalysisSearchLiveResultInfo.md)
