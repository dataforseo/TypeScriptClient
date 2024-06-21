**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSerpCompetitorsLiveResultInfo(data)

> **new DataforseoLabsBingSerpCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Source

main.ts:111767

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)

#### Source

main.ts:111763

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)

#### Source

main.ts:111761

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)

#### Source

main.ts:111757

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)

#### Source

main.ts:111754

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)

#### Source

main.ts:111748

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)

#### Source

main.ts:111751

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

#### Source

main.ts:111759

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:111776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:111807

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Source

main.ts:111800
