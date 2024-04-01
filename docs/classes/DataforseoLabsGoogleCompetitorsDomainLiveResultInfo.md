[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo**(`data?`): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:90903

## Properties

### items

• `Optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)

#### Defined in

main.ts:90899

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:90897

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:90893

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:90891

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:90887

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)

#### Defined in

main.ts:90889

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:90895

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

main.ts:90912

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

main.ts:90939

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:90932
