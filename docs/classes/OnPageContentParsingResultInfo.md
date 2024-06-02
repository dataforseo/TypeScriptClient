**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingResultInfo(data)

> **new OnPageContentParsingResultInfo**(`data`?): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

• **data?**: [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Source

main.ts:160086

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

#### Source

main.ts:160076

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

#### Source

main.ts:160078

***

### items?

> **`optional`** **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items`](../interfaces/IOnPageContentParsingResultInfo.md#items)

#### Source

main.ts:160082

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

#### Source

main.ts:160080

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160095

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160119

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Source

main.ts:160112
