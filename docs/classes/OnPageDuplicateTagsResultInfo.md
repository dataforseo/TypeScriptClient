[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageDuplicateTagsResultInfo

# Class: OnPageDuplicateTagsResultInfo

## Implements

- [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsResultInfo()

> **new OnPageDuplicateTagsResultInfo**(`data`?): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

main.ts:160637

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_progress)

#### Defined in

main.ts:160621

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_status)

#### Defined in

main.ts:160623

***

### items?

> `optional` **items**: [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)[]

items array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items)

#### Defined in

main.ts:160633

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items_count)

#### Defined in

main.ts:160631

***

### pages\_count?

> `optional` **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#pages_count)

#### Defined in

main.ts:160629

***

### total\_pages\_count?

> `optional` **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`total_pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#total_pages_count)

#### Defined in

main.ts:160626

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:160646

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:160672

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

main.ts:160665
