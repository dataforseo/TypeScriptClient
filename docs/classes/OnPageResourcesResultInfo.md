**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageResourcesResultInfo

# Class: OnPageResourcesResultInfo

## Implements

- [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesResultInfo(data)

> **new OnPageResourcesResultInfo**(`data`?): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

• **data?**: [`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md)

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Source

main.ts:154944

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageResourcesResultInfo.md#crawl_progress)

#### Source

main.ts:154932

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`crawl_status`](../interfaces/IOnPageResourcesResultInfo.md#crawl_status)

#### Source

main.ts:154934

***

### items?

> **`optional`** **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items`](../interfaces/IOnPageResourcesResultInfo.md#items)

#### Source

main.ts:154940

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`items_count`](../interfaces/IOnPageResourcesResultInfo.md#items_count)

#### Source

main.ts:154938

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items crawled

#### Implementation of

[`IOnPageResourcesResultInfo`](../interfaces/IOnPageResourcesResultInfo.md).[`total_items_count`](../interfaces/IOnPageResourcesResultInfo.md#total_items_count)

#### Source

main.ts:154936

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:154953

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:154978

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourcesResultInfo`](OnPageResourcesResultInfo.md)

#### Source

main.ts:154971
