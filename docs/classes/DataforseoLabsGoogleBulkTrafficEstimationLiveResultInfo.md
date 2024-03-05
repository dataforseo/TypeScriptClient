[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo**(`data?`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:97782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97782)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)

#### Defined in

[main.ts:97778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97778)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)

#### Defined in

[main.ts:97776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97776)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)

#### Defined in

[main.ts:97772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97772)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)

#### Defined in

[main.ts:97769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97769)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)

#### Defined in

[main.ts:97766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97766)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

#### Defined in

[main.ts:97774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97774)

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

[main.ts:97791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97791)

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

[main.ts:97817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97817)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

#### Defined in

[main.ts:97810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97810)
