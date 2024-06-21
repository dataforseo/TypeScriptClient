**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveResultInfo

# Class: DataforseoLabsGoogleSearchIntentLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveResultInfo(data)

> **new DataforseoLabsGoogleSearchIntentLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Source

main.ts:87015

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items)

#### Source

main.ts:87011

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items_count)

#### Source

main.ts:87009

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#language_code)

#### Source

main.ts:87007

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:87024

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:87047

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Source

main.ts:87040
