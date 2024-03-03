[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsLocationsResultInfo

# Class: BusinessDataBusinessListingsLocationsResultInfo

## Implements

- [`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsLocationsResultInfo.md#constructor)

### Properties

- [business\_count](BusinessDataBusinessListingsLocationsResultInfo.md#business_count)
- [country\_iso\_code](BusinessDataBusinessListingsLocationsResultInfo.md#country_iso_code)
- [location\_name](BusinessDataBusinessListingsLocationsResultInfo.md#location_name)

### Methods

- [init](BusinessDataBusinessListingsLocationsResultInfo.md#init)
- [toJSON](BusinessDataBusinessListingsLocationsResultInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsLocationsResultInfo**(`data?`): [`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md) |

#### Returns

[`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Defined in

main.ts:187962

## Properties

### business\_count

• `Optional` **business\_count**: `number`

number of businesses in this location in our database

#### Implementation of

[IBusinessDataBusinessListingsLocationsResultInfo](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[business_count](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#business_count)

#### Defined in

main.ts:187958

___

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataBusinessListingsLocationsResultInfo](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[country_iso_code](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:187956

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataBusinessListingsLocationsResultInfo](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[location_name](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:187954

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

main.ts:187971

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

main.ts:187990

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Defined in

main.ts:187983
