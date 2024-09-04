[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageContentParsingResultInfo

# Class: OnPageContentParsingResultInfo

## Implements

- [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingResultInfo()

> **new OnPageContentParsingResultInfo**(`data`?): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

• **data?**: [`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md)

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Defined in

main.ts:166003

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_progress)

#### Defined in

main.ts:165993

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingResultInfo.md#crawl_status)

#### Defined in

main.ts:165995

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items`](../interfaces/IOnPageContentParsingResultInfo.md#items)

#### Defined in

main.ts:165999

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageContentParsingResultInfo`](../interfaces/IOnPageContentParsingResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingResultInfo.md#items_count)

#### Defined in

main.ts:165997

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:166012

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:166036

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingResultInfo`](OnPageContentParsingResultInfo.md)

#### Defined in

main.ts:166029
