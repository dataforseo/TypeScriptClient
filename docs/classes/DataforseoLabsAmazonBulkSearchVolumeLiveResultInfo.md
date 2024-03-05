[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo**(`data?`): [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Defined in

[main.ts:98880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98880)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

contains keyword search volume data data

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items)

#### Defined in

[main.ts:98876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98876)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

[main.ts:98874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98874)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

[main.ts:98870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98870)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

[main.ts:98867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98867)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#se_type)

#### Defined in

[main.ts:98864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98864)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#total_count)

#### Defined in

[main.ts:98872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98872)

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

[main.ts:98889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98889)

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

[main.ts:98915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98915)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Defined in

[main.ts:98908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98908)
