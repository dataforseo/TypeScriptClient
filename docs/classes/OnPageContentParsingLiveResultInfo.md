[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveResultInfo

# Class: OnPageContentParsingLiveResultInfo

## Implements

- [`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingLiveResultInfo()

> **new OnPageContentParsingLiveResultInfo**(`data`?): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

##### data?

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md)

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

main.ts:174049

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_progress`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_progress)

#### Defined in

main.ts:174039

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`crawl_status`](../interfaces/IOnPageContentParsingLiveResultInfo.md#crawl_status)

#### Defined in

main.ts:174041

***

### items?

> `optional` **items**: [`OnPageContentParsingItem`](OnPageContentParsingItem.md)[]

items array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items)

#### Defined in

main.ts:174045

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageContentParsingLiveResultInfo`](../interfaces/IOnPageContentParsingLiveResultInfo.md).[`items_count`](../interfaces/IOnPageContentParsingLiveResultInfo.md#items_count)

#### Defined in

main.ts:174043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:174058

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:174082

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingLiveResultInfo`](OnPageContentParsingLiveResultInfo.md)

#### Defined in

main.ts:174075
