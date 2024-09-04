[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordPerformanceLiveResultInfo

# Class: KeywordsDataBingKeywordPerformanceLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceLiveResultInfo()

> **new KeywordsDataBingKeywordPerformanceLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Defined in

main.ts:136805

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)

#### Defined in

main.ts:136784

***

### keyword\_kpi?

> `optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`keyword_kpi`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)

#### Defined in

main.ts:136801

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)

#### Defined in

main.ts:136790

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)

#### Defined in

main.ts:136787

***

### month?

> `optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`month`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)

#### Defined in

main.ts:136798

***

### year?

> `optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[`year`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

#### Defined in

main.ts:136794

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:136814

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:136836

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Defined in

main.ts:136829
