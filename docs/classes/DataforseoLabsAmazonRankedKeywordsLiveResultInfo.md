[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)
- [items](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRankedKeywordsLiveResultInfo**(`data?`): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:100232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100232)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN in a POST array

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[asin](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)

#### Defined in

[main.ts:100216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100216)

___


### items

• `Optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)

#### Defined in

[main.ts:100228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100228)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:100226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100226)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:100222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100222)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:100219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100219)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:100214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100214)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:100224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100224)

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

[main.ts:100241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100241)

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

[main.ts:100268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100268)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:100261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100261)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")