**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTasksReadyResultInfo(data)

> **new KeywordsDataGoogleTrendsExploreTasksReadyResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Source

main.ts:123936

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:123928

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:123932

***

### function?

> **`optional`** **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#function)

#### Source

main.ts:123926

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#id)

#### Source

main.ts:123922

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#se)

#### Source

main.ts:123924

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#tag)

#### Source

main.ts:123930

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:123945

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:123967

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Source

main.ts:123960
