[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo**(`data?`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:98430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98430)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

[main.ts:98426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98426)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

[main.ts:98424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98424)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

[main.ts:98420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98420)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

[main.ts:98417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98417)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

[main.ts:98414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98414)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

[main.ts:98422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98422)

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

[main.ts:98439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98439)

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

[main.ts:98465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98465)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:98458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98458)
