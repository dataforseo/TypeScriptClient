**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageRedirectChainsResultInfo

# Class: OnPageRedirectChainsResultInfo

## Implements

- [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsResultInfo(data)

> **new OnPageRedirectChainsResultInfo**(`data`?): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md)

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Source

main.ts:157520

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_progress)

#### Source

main.ts:157508

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`crawl_status`](../interfaces/IOnPageRedirectChainsResultInfo.md#crawl_status)

#### Source

main.ts:157510

***

### items?

> **`optional`** **items**: [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)[]

items array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items`](../interfaces/IOnPageRedirectChainsResultInfo.md#items)

#### Source

main.ts:157516

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#items_count)

#### Source

main.ts:157514

***

### total\_items\_count?

> **`optional`** **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPageRedirectChainsResultInfo`](../interfaces/IOnPageRedirectChainsResultInfo.md).[`total_items_count`](../interfaces/IOnPageRedirectChainsResultInfo.md#total_items_count)

#### Source

main.ts:157512

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:157529

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:157554

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRedirectChainsResultInfo`](OnPageRedirectChainsResultInfo.md)

#### Source

main.ts:157547
