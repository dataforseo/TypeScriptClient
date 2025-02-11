[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetResultInfo

Defined in: main.ts:145366

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTaskGetResultInfo()

> **new KeywordsDataBingKeywordPerformanceTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

Defined in: main.ts:145389

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:145368

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword)

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:145385

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`keyword_kpi`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword_kpi)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:145374

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:145371

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#location_code)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:145382

indicates the month for which the data is provided for
example:
10

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`month`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:145378

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[`year`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:145398

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:145420

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

Defined in: main.ts:145413

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)
