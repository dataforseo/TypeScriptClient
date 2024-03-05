[dataforseo-client](../README.md) / [Exports](../modules.md) / LocalBusinessOrderLink

# Class: LocalBusinessOrderLink

## Hierarchy

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

  ↳ **`LocalBusinessOrderLink`**

## Implements

- [`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalBusinessOrderLink.md#constructor)

### Properties

- [\_discriminator](LocalBusinessOrderLink.md#_discriminator)
- [delivery\_services](LocalBusinessOrderLink.md#delivery_services)

### Methods

- [init](LocalBusinessOrderLink.md#init)
- [toJSON](LocalBusinessOrderLink.md#tojson)
- [fromJS](LocalBusinessOrderLink.md#fromjs)

## Constructors

### constructor

• **new LocalBusinessOrderLink**(`data?`): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalBusinessOrderLink`](../interfaces/ILocalBusinessOrderLink.md) |

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[constructor](BaseLocalBusinessLink.md#constructor)

#### Defined in

[main.ts:22328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22328)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[_discriminator](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

[main.ts:22207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22207)

___

### delivery\_services

• `Optional` **delivery\_services**: [`LocalBusinessDeliveryServiceInfo`](LocalBusinessDeliveryServiceInfo.md)[]

lists available delivery services

#### Implementation of

[ILocalBusinessOrderLink](../interfaces/ILocalBusinessOrderLink.md).[delivery_services](../interfaces/ILocalBusinessOrderLink.md#delivery_services)

#### Defined in

[main.ts:22324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22324)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[init](BaseLocalBusinessLink.md#init)

#### Defined in

[main.ts:22333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22333)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[toJSON](BaseLocalBusinessLink.md#tojson)

#### Defined in

[main.ts:22355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22355)

___

### fromJS

▸ **fromJS**(`data`): [`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalBusinessOrderLink`](LocalBusinessOrderLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[fromJS](BaseLocalBusinessLink.md#fromjs)

#### Defined in

[main.ts:22348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22348)
