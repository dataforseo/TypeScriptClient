[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleBulkAppMetricsLiveResultInfo

# Class: DataforseoLabsAppleBulkAppMetricsLiveResultInfo

## Implements

- [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleBulkAppMetricsLiveResultInfo**(`data?`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleBulkAppMetricsLiveResultInfo`](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

[main.ts:110346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110346)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsleBulkAppMetricsLiveItem`](DataforseoLabsleBulkAppMetricsLiveItem.md)[]

contains data related to the ranking app metrics of the specified application

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items)

#### Defined in

[main.ts:110342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110342)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:110340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110340)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:110336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110336)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:110334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110334)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#se_type)

#### Defined in

[main.ts:110332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110332)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAppleBulkAppMetricsLiveResultInfo](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAppleBulkAppMetricsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:110338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110338)

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

[main.ts:110355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110355)

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

[main.ts:110381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110381)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleBulkAppMetricsLiveResultInfo`](DataforseoLabsAppleBulkAppMetricsLiveResultInfo.md)

#### Defined in

[main.ts:110374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110374)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")