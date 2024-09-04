[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:85993

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items)

#### Defined in

main.ts:85989

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

main.ts:85987

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:85985

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:85983

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#se_type)

#### Defined in

main.ts:85981

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:86002

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:86027

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:86020
