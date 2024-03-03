[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)
- [offset](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)
- [offset\_token](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)
- [se\_type](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)
- [seed\_keywords](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)
- [total\_count](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordIdeasLiveResultInfo**(`data?`): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordIdeasLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Defined in

main.ts:81675

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)

#### Defined in

main.ts:81671

___

### items\_count

• `Optional` **items\_count**: `number`

number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)

#### Defined in

main.ts:81663

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)

#### Defined in

main.ts:81659

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)

#### Defined in

main.ts:81657

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)

#### Defined in

main.ts:81665

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)

#### Defined in

main.ts:81669

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)

#### Defined in

main.ts:81652

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[seed_keywords](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)

#### Defined in

main.ts:81655

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

#### Defined in

main.ts:81661

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

main.ts:81684

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

main.ts:81717

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResultInfo`](DataforseoLabsGoogleKeywordIdeasLiveResultInfo.md)

#### Defined in

main.ts:81710
