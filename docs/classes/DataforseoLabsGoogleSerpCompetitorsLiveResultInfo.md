[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

Defined in: main.ts:102296

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo()

> **new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

Defined in: main.ts:102317

#### Parameters

##### data?

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

Defined in: main.ts:102313

contains detected SERP competitors and related data

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:102311

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:102307

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:102304

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:102298

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#se_type)

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:102301

keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#seed_keywords)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:102309

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:102326

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:102357

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

Defined in: main.ts:102350

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)
