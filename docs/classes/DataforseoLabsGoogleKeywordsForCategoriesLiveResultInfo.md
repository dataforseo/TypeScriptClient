[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#location_code)
- [offset](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset)
- [offset\_token](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset_token)
- [se\_type](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#se_type)
- [seed\_categories](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#seed_categories)
- [total\_count](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Defined in

[main.ts:84030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84030)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items)

#### Defined in

[main.ts:84026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84026)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items_count)

#### Defined in

[main.ts:84018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84018)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#language_code)

#### Defined in

[main.ts:84014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84014)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#location_code)

#### Defined in

[main.ts:84012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84012)

___

### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset)

#### Defined in

[main.ts:84020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84020)

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:84024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84024)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#se_type)

#### Defined in

[main.ts:84008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84008)

___

### seed\_categories

• `Optional` **seed\_categories**: `number`[]

categories in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[seed_categories](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#seed_categories)

#### Defined in

[main.ts:84010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84010)

___

### total\_count

• `Optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#total_count)

#### Defined in

[main.ts:84016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84016)

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

[main.ts:84039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84039)

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

[main.ts:84072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84072)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Defined in

[main.ts:84065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84065)
