[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items_count)
- [se\_type](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo**(`data?`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:88217

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:88213

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:88211

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:88207

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:88209

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

main.ts:88226

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

main.ts:88250

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:88243
