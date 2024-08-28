[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlResultInfo()

> **new OnPageRawHtmlResultInfo**(`data`?): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

• **data?**: [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

main.ts:164591

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

#### Defined in

main.ts:164581

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_status`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

#### Defined in

main.ts:164583

***

### items?

> `optional` **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

items array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items`](../interfaces/IOnPageRawHtmlResultInfo.md#items)

#### Defined in

main.ts:164587

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items_count`](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

#### Defined in

main.ts:164585

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:164600

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:164620

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Defined in

main.ts:164613
