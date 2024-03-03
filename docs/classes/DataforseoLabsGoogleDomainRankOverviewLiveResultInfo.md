[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainRankOverviewLiveResultInfo**(`data?`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:90910

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainRankOverviewLiveItem`](DataforseoLabsDomainRankOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:90906

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:90904

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#language_code)

#### Defined in

main.ts:90900

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#location_code)

#### Defined in

main.ts:90898

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#se_type)

#### Defined in

main.ts:90894

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#target)

#### Defined in

main.ts:90896

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:90902

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

main.ts:90919

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

main.ts:90946

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResultInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResultInfo.md)

#### Defined in

main.ts:90939
