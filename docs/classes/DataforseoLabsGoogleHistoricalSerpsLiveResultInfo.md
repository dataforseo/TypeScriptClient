[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Defined in

main.ts:98372

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)

#### Defined in

main.ts:98368

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)

#### Defined in

main.ts:98366

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)

#### Defined in

main.ts:98358

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)

#### Defined in

main.ts:98362

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)

#### Defined in

main.ts:98360

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)

#### Defined in

main.ts:98355

***

### total\_count?

> `optional` **total\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

#### Defined in

main.ts:98364

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:98381

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:98408

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Defined in

main.ts:98401
