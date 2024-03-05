[dataforseo-client](../README.md) / [Exports](../modules.md) / AvailibleVersions

# Class: AvailibleVersions

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AvailibleVersions.md#constructor)

### Properties

- [default](AvailibleVersions.md#default)
- [version](AvailibleVersions.md#version)

### Methods

- [init](AvailibleVersions.md#init)
- [toJSON](AvailibleVersions.md#tojson)
- [fromJS](AvailibleVersions.md#fromjs)

## Constructors

### constructor

• **new AvailibleVersions**(`data?`): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md) |

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Defined in

[main.ts:153856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153856)

## Properties

### default

• `Optional` **default**: `boolean`

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[IAvailibleVersions](../interfaces/IAvailibleVersions.md).[default](../interfaces/IAvailibleVersions.md#default)

#### Defined in

[main.ts:153852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153852)

___

### version

• `Optional` **version**: `string`

lighthouse version

#### Implementation of

[IAvailibleVersions](../interfaces/IAvailibleVersions.md).[version](../interfaces/IAvailibleVersions.md#version)

#### Defined in

[main.ts:153849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153849)

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

[main.ts:153865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153865)

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

[main.ts:153883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153883)

___

### fromJS

▸ **fromJS**(`data`): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Defined in

[main.ts:153876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153876)
