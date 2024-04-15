**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageMicrodataResultInfo

# Class: OnPageMicrodataResultInfo

## Implements

- [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataResultInfo(data)

> **new OnPageMicrodataResultInfo**(`data`?): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

• **data?**: [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Source

main.ts:156539

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_progress`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

#### Source

main.ts:156527

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_status`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

#### Source

main.ts:156529

***

### items?

> **`optional`** **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

items array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items`](../interfaces/IOnPageMicrodataResultInfo.md#items)

#### Source

main.ts:156535

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items_count`](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

#### Source

main.ts:156533

***

### test\_summary?

> **`optional`** **test\_summary**: [`TestSummary`](TestSummary.md)

microdata validation test results

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`test_summary`](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

#### Source

main.ts:156531

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:156548

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:156573

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Source

main.ts:156566
