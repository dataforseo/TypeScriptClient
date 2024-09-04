[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsDemographyLiveResultInfo()

> **new KeywordsDataDataforseoTrendsDemographyLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Defined in

main.ts:127165

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)

#### Defined in

main.ts:127157

***

### items?

> `optional` **items**: [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)

#### Defined in

main.ts:127161

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)

#### Defined in

main.ts:127159

***

### keywords?

> `optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)

#### Defined in

main.ts:127144

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)

#### Defined in

main.ts:127152

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)

#### Defined in

main.ts:127149

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

#### Defined in

main.ts:127146

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127174

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127205

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Defined in

main.ts:127198
