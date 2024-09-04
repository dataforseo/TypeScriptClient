[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageDuplicateContentResultInfo

# Class: OnPageDuplicateContentResultInfo

## Implements

- [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentResultInfo()

> **new OnPageDuplicateContentResultInfo**(`data`?): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Defined in

main.ts:161089

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_progress)

#### Defined in

main.ts:161079

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_status)

#### Defined in

main.ts:161081

***

### items?

> `optional` **items**: [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)[]

items array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items`](../interfaces/IOnPageDuplicateContentResultInfo.md#items)

#### Defined in

main.ts:161085

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateContentResultInfo.md#items_count)

#### Defined in

main.ts:161083

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:161098

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:161122

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

#### Defined in

main.ts:161115
