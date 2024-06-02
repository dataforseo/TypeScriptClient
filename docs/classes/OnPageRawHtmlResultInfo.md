**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageRawHtmlResultInfo

# Class: OnPageRawHtmlResultInfo

## Implements

- [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRawHtmlResultInfo(data)

> **new OnPageRawHtmlResultInfo**(`data`?): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

• **data?**: [`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md)

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Source

main.ts:158562

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_progress`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_progress)

#### Source

main.ts:158552

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`crawl_status`](../interfaces/IOnPageRawHtmlResultInfo.md#crawl_status)

#### Source

main.ts:158554

***

### items?

> **`optional`** **items**: [`OnPageRawHtmlItem`](OnPageRawHtmlItem.md)

items array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items`](../interfaces/IOnPageRawHtmlResultInfo.md#items)

#### Source

main.ts:158558

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageRawHtmlResultInfo`](../interfaces/IOnPageRawHtmlResultInfo.md).[`items_count`](../interfaces/IOnPageRawHtmlResultInfo.md#items_count)

#### Source

main.ts:158556

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158571

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158591

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRawHtmlResultInfo`](OnPageRawHtmlResultInfo.md)

#### Source

main.ts:158584
