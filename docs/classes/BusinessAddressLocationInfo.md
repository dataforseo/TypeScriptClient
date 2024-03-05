[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessAddressLocationInfo

# Class: BusinessAddressLocationInfo

## Implements

- [`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessAddressLocationInfo.md#constructor)

### Properties

- [address\_lines](BusinessAddressLocationInfo.md#address_lines)
- [latitude](BusinessAddressLocationInfo.md#latitude)
- [longitude](BusinessAddressLocationInfo.md#longitude)

### Methods

- [init](BusinessAddressLocationInfo.md#init)
- [toJSON](BusinessAddressLocationInfo.md#tojson)
- [fromJS](BusinessAddressLocationInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessAddressLocationInfo**(`data?`): [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessAddressLocationInfo`](../interfaces/IBusinessAddressLocationInfo.md) |

#### Returns

[`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Defined in

[main.ts:203881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203881)

## Properties

### address\_lines

• `Optional` **address\_lines**: `string`[]

business address
contains few address lines specified by the business entity

#### Implementation of

[IBusinessAddressLocationInfo](../interfaces/IBusinessAddressLocationInfo.md).[address_lines](../interfaces/IBusinessAddressLocationInfo.md#address_lines)

#### Defined in

[main.ts:203873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203873)

___

### latitude

• `Optional` **latitude**: `string`

latitude in GPS coordinates

#### Implementation of

[IBusinessAddressLocationInfo](../interfaces/IBusinessAddressLocationInfo.md).[latitude](../interfaces/IBusinessAddressLocationInfo.md#latitude)

#### Defined in

[main.ts:203875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203875)

___

### longitude

• `Optional` **longitude**: `string`

longitude in GPS coordinates

#### Implementation of

[IBusinessAddressLocationInfo](../interfaces/IBusinessAddressLocationInfo.md).[longitude](../interfaces/IBusinessAddressLocationInfo.md#longitude)

#### Defined in

[main.ts:203877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203877)

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

[main.ts:203890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203890)

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

[main.ts:203913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203913)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

#### Defined in

[main.ts:203906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203906)
