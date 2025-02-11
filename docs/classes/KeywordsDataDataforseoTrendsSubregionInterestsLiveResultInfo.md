[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

Defined in: main.ts:136970

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo()

> **new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

Defined in: main.ts:136994

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:136985

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

Defined in: main.ts:136990

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:136987

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items_count)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:136972

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:136980

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:136977

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#location_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:136974

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137003

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137034

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

Defined in: main.ts:137027

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)
