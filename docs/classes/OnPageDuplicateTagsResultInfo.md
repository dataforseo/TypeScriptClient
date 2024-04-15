**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsResultInfo

# Class: OnPageDuplicateTagsResultInfo

## Implements

- [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsResultInfo(data)

> **new OnPageDuplicateTagsResultInfo**(`data`?): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Source

main.ts:152829

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_progress)

#### Source

main.ts:152813

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_status)

#### Source

main.ts:152815

***

### items?

> **`optional`** **items**: [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)[]

items array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items)

#### Source

main.ts:152825

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items_count)

#### Source

main.ts:152823

***

### pages\_count?

> **`optional`** **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#pages_count)

#### Source

main.ts:152821

***

### total\_pages\_count?

> **`optional`** **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`total_pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#total_pages_count)

#### Source

main.ts:152818

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:152838

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:152864

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Source

main.ts:152857
