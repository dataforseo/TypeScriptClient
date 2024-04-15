**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageInstantPagesResultInfo

# Class: OnPageInstantPagesResultInfo

## Implements

- [`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageInstantPagesResultInfo(data)

> **new OnPageInstantPagesResultInfo**(`data`?): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Parameters

• **data?**: [`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md)

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Source

main.ts:158912

## Properties

### crawl\_gateway\_address?

> **`optional`** **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_gateway_address`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_gateway_address)

#### Source

main.ts:158904

***

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_progress`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_progress)

#### Source

main.ts:158897

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session
in this case the value will be null

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`crawl_status`](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_status)

#### Source

main.ts:158900

***

### items?

> **`optional`** **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`items`](../interfaces/IOnPageInstantPagesResultInfo.md#items)

#### Source

main.ts:158908

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md).[`items_count`](../interfaces/IOnPageInstantPagesResultInfo.md#items_count)

#### Source

main.ts:158906

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158921

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158946

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Source

main.ts:158939
