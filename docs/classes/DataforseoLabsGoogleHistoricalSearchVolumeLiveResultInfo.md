**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo(data)

> **new DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Source

main.ts:85560

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleHistoricalSearchVolumeLiveItem`](DataforseoLabsGoogleHistoricalSearchVolumeLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items)

#### Source

main.ts:85556

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#items_count)

#### Source

main.ts:85554

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#language_code)

#### Source

main.ts:85552

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#location_code)

#### Source

main.ts:85550

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md#se_type)

#### Source

main.ts:85548

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:85569

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:85594

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResultInfo.md)

#### Source

main.ts:85587
