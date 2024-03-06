[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)
- [seed\_keyword](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)
- [total\_count](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelatedKeywordsLiveResultInfo**(`data?`): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:106043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106043)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)

#### Defined in

[main.ts:106039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106039)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:106037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106037)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:106033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106033)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:106031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106031)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:106024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106024)

___


### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[seed_keyword](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Defined in

[main.ts:106026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106026)

___


### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[seed_keyword_data](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Defined in

[main.ts:106029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106029)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:106035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106035)

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

[main.ts:106052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106052)

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

[main.ts:106080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106080)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:106073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106073)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")