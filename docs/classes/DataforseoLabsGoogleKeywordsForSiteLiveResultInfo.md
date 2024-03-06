[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#location_code)
- [offset](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset)
- [offset\_token](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset_token)
- [se\_type](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForSiteLiveResultInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:79770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79770)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items)

#### Defined in

[main.ts:79766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79766)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items_count)

#### Defined in

[main.ts:79758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79758)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#language_code)

#### Defined in

[main.ts:79754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79754)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#location_code)

#### Defined in

[main.ts:79752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79752)

___


### offset

• `Optional` **offset**: `number`

current offset value

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[offset](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset)

#### Defined in

[main.ts:79760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79760)

___


### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[offset_token](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:79764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79764)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#se_type)

#### Defined in

[main.ts:79748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79748)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#target)

#### Defined in

[main.ts:79750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79750)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#total_count)

#### Defined in

[main.ts:79756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79756)

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

[main.ts:79779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79779)

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

[main.ts:79808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79808)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:79801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79801)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")