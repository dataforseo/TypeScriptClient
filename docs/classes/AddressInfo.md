[Documentation](../README.md) / [Exports](../modules.md) / AddressInfo

# Class: AddressInfo

## Implements

- [`IAddressInfo`](../interfaces/IAddressInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AddressInfo.md#constructor)

### Properties

- [address](AddressInfo.md#address)
- [borough](AddressInfo.md#borough)
- [city](AddressInfo.md#city)
- [country\_code](AddressInfo.md#country_code)
- [region](AddressInfo.md#region)
- [zip](AddressInfo.md#zip)

### Methods

- [init](AddressInfo.md#init)
- [toJSON](AddressInfo.md#tojson)
- [fromJS](AddressInfo.md#fromjs)

## Constructors

### constructor

• **new AddressInfo**(`data?`): [`AddressInfo`](AddressInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAddressInfo`](../interfaces/IAddressInfo.md) |

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Defined in

main.ts:38975

## Properties

### address

• `Optional` **address**: `string`

street address of the local establishment

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[address](../interfaces/IAddressInfo.md#address)

#### Defined in

main.ts:38963

___

### borough

• `Optional` **borough**: `string`

administrative unit or district the local establishment belongs to

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[borough](../interfaces/IAddressInfo.md#borough)

#### Defined in

main.ts:38961

___

### city

• `Optional` **city**: `string`

name of the city where the local establishment is located

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[city](../interfaces/IAddressInfo.md#city)

#### Defined in

main.ts:38965

___

### country\_code

• `Optional` **country\_code**: `string`

ISO country code of the local establishment

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[country_code](../interfaces/IAddressInfo.md#country_code)

#### Defined in

main.ts:38971

___

### region

• `Optional` **region**: `string`

DMA region the local establishment belongs to

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[region](../interfaces/IAddressInfo.md#region)

#### Defined in

main.ts:38969

___

### zip

• `Optional` **zip**: `string`

ZIP code of the local establishment

#### Implementation of

[IAddressInfo](../interfaces/IAddressInfo.md).[zip](../interfaces/IAddressInfo.md#zip)

#### Defined in

main.ts:38967

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

main.ts:38984

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

main.ts:39006

___

### fromJS

▸ **fromJS**(`data`): [`AddressInfo`](AddressInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AddressInfo`](AddressInfo.md)

#### Defined in

main.ts:38999
