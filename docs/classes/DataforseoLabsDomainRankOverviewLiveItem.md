[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsDomainRankOverviewLiveItem

# Class: DataforseoLabsDomainRankOverviewLiveItem

## Implements

- [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsDomainRankOverviewLiveItem.md#constructor)

### Properties

- [language\_code](DataforseoLabsDomainRankOverviewLiveItem.md#language_code)
- [location\_code](DataforseoLabsDomainRankOverviewLiveItem.md#location_code)
- [metrics](DataforseoLabsDomainRankOverviewLiveItem.md#metrics)
- [se\_type](DataforseoLabsDomainRankOverviewLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsDomainRankOverviewLiveItem.md#init)
- [toJSON](DataforseoLabsDomainRankOverviewLiveItem.md#tojson)
- [fromJS](DataforseoLabsDomainRankOverviewLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsDomainRankOverviewLiveItem**(`data?`): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsDomainRankOverviewLiveItem`](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md) |

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Defined in

main.ts:90824

## Properties

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsDomainRankOverviewLiveItem](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[language_code](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#language_code)

#### Defined in

main.ts:90818

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsDomainRankOverviewLiveItem](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[location_code](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#location_code)

#### Defined in

main.ts:90816

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsDomainRankOverviewLiveItem](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[metrics](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#metrics)

#### Defined in

main.ts:90820

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsDomainRankOverviewLiveItem](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md).[se_type](../interfaces/IDataforseoLabsDomainRankOverviewLiveItem.md#se_type)

#### Defined in

main.ts:90814

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

main.ts:90833

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

main.ts:90859

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)

#### Defined in

main.ts:90852
