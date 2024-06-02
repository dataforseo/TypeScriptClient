**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo(data)

> **new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Source

main.ts:95935

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)

#### Source

main.ts:95931

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)

#### Source

main.ts:95929

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)

#### Source

main.ts:95921

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)

#### Source

main.ts:95925

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)

#### Source

main.ts:95923

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)

#### Source

main.ts:95918

***

### total\_count?

> **`optional`** **total\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

#### Source

main.ts:95927

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:95944

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:95971

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Source

main.ts:95964
