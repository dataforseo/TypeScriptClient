[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveResultInfo

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#se_type)
- [target](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#target)
- [total\_count](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingCompetitorsDomainLiveResultInfo**(`data?`): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:105575

## Properties

### items

• `Optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items)

#### Defined in

main.ts:105571

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:105569

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:105565

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:105563

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:105559

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[target](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#target)

#### Defined in

main.ts:105561

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResultInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:105567

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

main.ts:105584

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

main.ts:105611

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:105604
