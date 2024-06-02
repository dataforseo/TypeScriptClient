**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo(data)

> **new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Source

main.ts:127187

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#datetime)

#### Source

main.ts:127178

***

### items?

> **`optional`** **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items)

#### Source

main.ts:127183

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items_count)

#### Source

main.ts:127180

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#keywords)

#### Source

main.ts:127165

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#language_code)

#### Source

main.ts:127173

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#location_code)

#### Source

main.ts:127170

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#type)

#### Source

main.ts:127167

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127196

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127227

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Source

main.ts:127220
