[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleTopSearchesLiveResultInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)
- [offset](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)
- [offset\_token](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)
- [se\_type](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleTopSearchesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleTopSearchesLiveResultInfo**(`data?`): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleTopSearchesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Defined in

main.ts:85430

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)

#### Defined in

main.ts:85426

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)

#### Defined in

main.ts:85418

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)

#### Defined in

main.ts:85414

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)

#### Defined in

main.ts:85412

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)

#### Defined in

main.ts:85420

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)

#### Defined in

main.ts:85424

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)

#### Defined in

main.ts:85410

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResultInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

#### Defined in

main.ts:85416

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:85439

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:85467

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResultInfo`](DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

#### Defined in

main.ts:85460
