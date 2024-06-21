**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateContentResultInfo

# Class: OnPageDuplicateContentResultInfo

## Implements

- [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentResultInfo(data)

> **new OnPageDuplicateContentResultInfo**(`data`?): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Source

main.ts:156142

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_progress)

#### Source

main.ts:156132

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_status)

#### Source

main.ts:156134

***

### items?

> **`optional`** **items**: [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)[]

items array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items`](../interfaces/IOnPageDuplicateContentResultInfo.md#items)

#### Source

main.ts:156138

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateContentResultInfo.md#items_count)

#### Source

main.ts:156136

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:156151

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:156175

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Source

main.ts:156168
