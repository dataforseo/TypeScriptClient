[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLinksResultInfo

# Class: OnPageLinksResultInfo

Defined in: main.ts:169702

## Implements

- [`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLinksResultInfo()

> **new OnPageLinksResultInfo**(`data`?): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

Defined in: main.ts:169717

#### Parameters

##### data?

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md)

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:169705

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`crawl_progress`](../interfaces/IOnPageLinksResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:169707

details of the crawling session

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`crawl_status`](../interfaces/IOnPageLinksResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:169713

items array

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`items`](../interfaces/IOnPageLinksResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:169711

number of items in the results array

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`items_count`](../interfaces/IOnPageLinksResultInfo.md#items_count)

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

Defined in: main.ts:169709

total number of relevant items in the database

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`total_items_count`](../interfaces/IOnPageLinksResultInfo.md#total_items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169726

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169751

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

Defined in: main.ts:169744

#### Parameters

##### data

`any`

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)
