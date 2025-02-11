[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentResultInfo

# Class: OnPageDuplicateContentResultInfo

Defined in: main.ts:169274

## Implements

- [`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentResultInfo()

> **new OnPageDuplicateContentResultInfo**(`data`?): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

Defined in: main.ts:169287

#### Parameters

##### data?

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md)

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:169277

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_progress`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:169279

details of the crawling session

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`crawl_status`](../interfaces/IOnPageDuplicateContentResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)[]

Defined in: main.ts:169283

items array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items`](../interfaces/IOnPageDuplicateContentResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:169281

number of items in the results array

#### Implementation of

[`IOnPageDuplicateContentResultInfo`](../interfaces/IOnPageDuplicateContentResultInfo.md).[`items_count`](../interfaces/IOnPageDuplicateContentResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169296

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169320

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)

Defined in: main.ts:169313

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateContentResultInfo`](OnPageDuplicateContentResultInfo.md)
