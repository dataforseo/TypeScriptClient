[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)
- [offset](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)
- [offset\_token](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)
- [se\_type](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)
- [seed\_keyword](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)
- [total\_count](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Defined in

main.ts:81105

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keywords and related data

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)

#### Defined in

main.ts:81101

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)

#### Defined in

main.ts:81093

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)

#### Defined in

main.ts:81089

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)

#### Defined in

main.ts:81087

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)

#### Defined in

main.ts:81095

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)

#### Defined in

main.ts:81099

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)

#### Defined in

main.ts:81080

___

### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[seed_keyword](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:81082

___

### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: `Object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[seed_keyword_data](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:81085

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

#### Defined in

main.ts:81091

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

main.ts:81114

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

main.ts:81150

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Defined in

main.ts:81143
