[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleSearchIntentLiveResultInfo

# Class: DataforseoLabsGoogleSearchIntentLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveResultInfo()

> **new DataforseoLabsGoogleSearchIntentLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Defined in

main.ts:86923

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items)

#### Defined in

main.ts:86919

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items_count)

#### Defined in

main.ts:86917

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#language_code)

#### Defined in

main.ts:86915

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:86932

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:86955

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResultInfo`](DataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Defined in

main.ts:86948
