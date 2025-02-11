[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageInstantPagesResultInfo

# Class: OnPageInstantPagesResultInfo

Defined in: main.ts:175022

## Implements

- [`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageInstantPagesResultInfo()

> **new OnPageInstantPagesResultInfo**(`data`?): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

Defined in: main.ts:175040

#### Parameters

##### data?

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md)

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

## Properties

### crawl\_gateway\_address?

> `optional` **crawl\_gateway\_address**: `string`

Defined in: main.ts:175032

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_gateway_address`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_gateway_address)

***

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:175025

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:175028

details of the crawling session
in this case the value will be null

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_status`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:175036

items array

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`items`](../interfaces/IOnPageInstantPagesResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:175034

number of items in the results array

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`items_count`](../interfaces/IOnPageInstantPagesResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175049

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:175074

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

Defined in: main.ts:175067

#### Parameters

##### data

`any`

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)
