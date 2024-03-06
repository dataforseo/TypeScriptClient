[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkTrafficEstimationLiveResultInfo**(`data?`): [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:102636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102636)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

[main.ts:102632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102632)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

[main.ts:102630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102630)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

[main.ts:102626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102626)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

[main.ts:102623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102623)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

[main.ts:102620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102620)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

[main.ts:102628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102628)

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

[main.ts:102645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102645)

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

[main.ts:102671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102671)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:102664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102664)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")