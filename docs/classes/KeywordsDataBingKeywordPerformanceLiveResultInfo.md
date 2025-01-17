[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceLiveResultInfo

# Class: KeywordsDataBingKeywordPerformanceLiveResultInfo

Defined in: main.ts:145600

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceLiveResultInfo()

> **new KeywordsDataBingKeywordPerformanceLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

Defined in: main.ts:145623

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:145602

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

Defined in: main.ts:145619

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword_kpi`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:145608

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:145605

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:145616

indicates the month for which the data is provided for
example:
10

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`month`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:145612

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`year`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:145632

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:145654

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

Defined in: main.ts:145647

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)
