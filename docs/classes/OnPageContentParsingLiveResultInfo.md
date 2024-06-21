**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingLiveResultInfo(data)

> **new OnPageContentParsingLiveResultInfo**(`data`?): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

• **data?**: [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Source

main.ts:161726

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

#### Source

main.ts:161716

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

#### Source

main.ts:161718

***

### items?

> **`optional`** **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

#### Source

main.ts:161722

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

#### Source

main.ts:161720

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161735

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161759

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Source

main.ts:161752
