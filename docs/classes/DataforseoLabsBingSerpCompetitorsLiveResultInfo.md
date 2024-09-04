[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingSerpCompetitorsLiveResultInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSerpCompetitorsLiveResultInfo()

> **new DataforseoLabsBingSerpCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:113562

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:113558

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:113556

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#language_code)

#### Defined in

main.ts:113552

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#location_code)

#### Defined in

main.ts:113549

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#se_type)

#### Defined in

main.ts:113543

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`seed_keywords`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#seed_keywords)

#### Defined in

main.ts:113546

***

### total\_count?

> `optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingSerpCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:113554

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:113571

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:113602

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResultInfo`](DataforseoLabsBingSerpCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:113595
