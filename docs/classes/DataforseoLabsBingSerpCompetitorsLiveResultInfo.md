[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResultInfo

Defined in: main.ts:120212

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSerpCompetitorsLiveResultInfo()

> **new DataforseoLabsBingSerpCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

Defined in: main.ts:120233

#### Parameters

##### data?

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

Defined in: main.ts:120229

contains detected SERP competitors and related data

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:120227

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120223

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120220

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:120214

search engine type

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:120217

keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:120225

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:120242

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:120273

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

Defined in: main.ts:120266

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)
