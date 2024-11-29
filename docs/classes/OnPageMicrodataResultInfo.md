[**Documentation**](../README.md)

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

##### data?

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md)

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

main.ts:171885

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_progress`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_progress)

#### Defined in

main.ts:171873

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`crawl_status`](../interfaces/IOnPageMicrodataResultInfo.md#crawl_status)

#### Defined in

main.ts:171875

***

### items?

> `optional` **items**: [`OnPageMicrodataItem`](OnPageMicrodataItem.md)[]

items array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items`](../interfaces/IOnPageMicrodataResultInfo.md#items)

#### Defined in

main.ts:171881

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`items_count`](../interfaces/IOnPageMicrodataResultInfo.md#items_count)

#### Defined in

main.ts:171879

***

### test\_summary?

> `optional` **test\_summary**: [`TestSummary`](TestSummary.md)

microdata validation test results

#### Implementation of

[`IOnPageMicrodataResultInfo`](../interfaces/IOnPageMicrodataResultInfo.md).[`test_summary`](../interfaces/IOnPageMicrodataResultInfo.md#test_summary)

#### Defined in

main.ts:171877

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:171894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:171919

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageMicrodataResultInfo`](OnPageMicrodataResultInfo.md)

#### Defined in

main.ts:171912
