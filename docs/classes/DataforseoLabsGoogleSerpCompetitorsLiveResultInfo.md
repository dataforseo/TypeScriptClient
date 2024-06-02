**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo(data)

> **new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Source

main.ts:91469

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items)

#### Source

main.ts:91465

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#items_count)

#### Source

main.ts:91463

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#language_code)

#### Source

main.ts:91459

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#location_code)

#### Source

main.ts:91456

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#se_type)

#### Source

main.ts:91450

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#seed_keywords)

#### Source

main.ts:91453

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md#total_count)

#### Source

main.ts:91461

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:91478

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:91509

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveResultInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResultInfo.md)

#### Source

main.ts:91502
