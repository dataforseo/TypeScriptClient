[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsResultInfo

# Class: OnPageDuplicateTagsResultInfo

Defined in: main.ts:168652

## Implements

- [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsResultInfo()

> **new OnPageDuplicateTagsResultInfo**(`data`?): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

Defined in: main.ts:168671

#### Parameters

##### data?

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:168655

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:168657

details of the crawling session

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)[]

Defined in: main.ts:168667

items array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168665

number of items in the results array

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#items_count)

***

### pages\_count?

> `optional` **pages\_count**: `number`

Defined in: main.ts:168663

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#pages_count)

***

### total\_pages\_count?

> `optional` **total\_pages\_count**: `number`

Defined in: main.ts:168660

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Implementation of

[`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md).[`total_pages_count`](../interfaces/IOnPageDuplicateTagsResultInfo.md#total_pages_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168680

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168706

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

Defined in: main.ts:168699

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)
