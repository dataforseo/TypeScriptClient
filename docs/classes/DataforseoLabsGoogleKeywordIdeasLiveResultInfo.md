[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordIdeasLiveResultInfo

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

[main.ts:81531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81531)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items)

#### Defined in

[main.ts:81527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81527)

___

### items\_count

• `Optional` **items\_count**: `number`

number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#items_count)

#### Defined in

[main.ts:81519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81519)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#language_code)

#### Defined in

[main.ts:81515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81515)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#location_code)

#### Defined in

[main.ts:81513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81513)

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset)

#### Defined in

[main.ts:81521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81521)

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:81525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81525)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#se_type)

#### Defined in

[main.ts:81508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81508)

___

### seed\_keywords

• `Optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[seed_keywords](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#seed_keywords)

#### Defined in

[main.ts:81511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81511)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResultInfo.md#total_count)

#### Defined in

[main.ts:81517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81517)

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

[main.ts:81540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81540)

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

[main.ts:81573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81573)

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

[main.ts:81566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81566)
