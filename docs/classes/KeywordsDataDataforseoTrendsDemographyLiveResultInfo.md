**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsDemographyLiveResultInfo(data)

> **new KeywordsDataDataforseoTrendsDemographyLiveResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Source

main.ts:129276

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`datetime`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)

#### Source

main.ts:129268

***

### items?

> **`optional`** **items**: [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)

#### Source

main.ts:129272

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)

#### Source

main.ts:129270

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)

#### Source

main.ts:129255

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)

#### Source

main.ts:129263

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)

#### Source

main.ts:129260

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

#### Source

main.ts:129257

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:129285

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:129316

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Source

main.ts:129309
