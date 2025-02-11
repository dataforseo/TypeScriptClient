[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataResultInfo

# Class: OnPageMicrodataResultInfo

Defined in: main.ts:172102

## Implements

- [`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataResultInfo()

> **new OnPageMicrodataResultInfo**(`data`?): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

Defined in: main.ts:172117

#### Parameters

##### data?

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172105

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_progress`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:172107

details of the crawling session

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_status`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

Defined in: main.ts:172113

items array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items`](../interfaces/IOnPageMicrodataResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172111

number of items in the results array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items_count`](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](TestSummary.md)

Defined in: main.ts:172109

microdata validation test results

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`test_summary`](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172126

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172151

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

Defined in: main.ts:172144

#### Parameters

##### data

`any`

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)
