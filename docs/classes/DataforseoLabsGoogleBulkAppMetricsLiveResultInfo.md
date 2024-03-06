[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkAppMetricsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Defined in

[main.ts:108042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108042)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items)

#### Defined in

[main.ts:108038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108038)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:108036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108036)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:108032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108032)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:108030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108030)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:108028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108028)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:108034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108034)

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

[main.ts:108051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108051)

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

[main.ts:108077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108077)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveResultInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResultInfo.md)

#### Defined in

[main.ts:108070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108070)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")