[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLinksResultInfo

# Class: OnPageLinksResultInfo

## Implements

- [`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLinksResultInfo()

> **new OnPageLinksResultInfo**(`data`?): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Parameters

##### data?

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md)

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Defined in

main.ts:169485

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`crawl_progress`](../interfaces/IOnPageLinksResultInfo.md#crawl_progress)

#### Defined in

main.ts:169473

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`crawl_status`](../interfaces/IOnPageLinksResultInfo.md#crawl_status)

#### Defined in

main.ts:169475

***

### items?

> `optional` **items**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

items array

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`items`](../interfaces/IOnPageLinksResultInfo.md#items)

#### Defined in

main.ts:169481

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`items_count`](../interfaces/IOnPageLinksResultInfo.md#items_count)

#### Defined in

main.ts:169479

***

### total\_items\_count?

> `optional` **total\_items\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IOnPageLinksResultInfo`](../interfaces/IOnPageLinksResultInfo.md).[`total_items_count`](../interfaces/IOnPageLinksResultInfo.md#total_items_count)

#### Defined in

main.ts:169477

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:169494

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:169519

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageLinksResultInfo`](OnPageLinksResultInfo.md)

#### Defined in

main.ts:169512
