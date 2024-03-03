[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCategoriesForDomainLiveResultInfo**(`data?`): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Defined in

main.ts:83644

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)[]

contains relevant categories and related ranking data

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items)

#### Defined in

main.ts:83640

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:83638

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:83634

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:83632

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:83628

___

### target

• `Optional` **target**: `string`

target domain or subdomain in a POST array

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#target)

#### Defined in

main.ts:83630

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:83636

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

main.ts:83653

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

main.ts:83680

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Defined in

main.ts:83673
