[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageMicrodataResultInfo

# Class: OnPageMicrodataResultInfo

## Implements

- [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataResultInfo()

> **new OnPageMicrodataResultInfo**(`data`?): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

• **data?**: [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

main.ts:164279

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_progress`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

#### Defined in

main.ts:164267

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_status`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

#### Defined in

main.ts:164269

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

items array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items`](../interfaces/IOnPageMicrodataResultInfo.md#items)

#### Defined in

main.ts:164275

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items_count`](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

#### Defined in

main.ts:164273

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](TestSummary.md)

microdata validation test results

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`test_summary`](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

#### Defined in

main.ts:164271

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:164288

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:164313

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

main.ts:164306
