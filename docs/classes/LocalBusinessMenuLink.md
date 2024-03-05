[dataforseo-client](../README.md) / [Exports](../modules.md) / LocalBusinessMenuLink

# Class: LocalBusinessMenuLink

## Hierarchy

- [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)

  ↳ **`LocalBusinessMenuLink`**

## Implements

- [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalBusinessMenuLink.md#constructor)

### Properties

- [\_discriminator](LocalBusinessMenuLink.md#_discriminator)
- [title](LocalBusinessMenuLink.md#title)
- [url](LocalBusinessMenuLink.md#url)

### Methods

- [init](LocalBusinessMenuLink.md#init)
- [toJSON](LocalBusinessMenuLink.md#tojson)
- [fromJS](LocalBusinessMenuLink.md#fromjs)

## Constructors

### constructor

• **new LocalBusinessMenuLink**(`data?`): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalBusinessMenuLink`](../interfaces/ILocalBusinessMenuLink.md) |

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[constructor](BaseLocalBusinessLink.md#constructor)

#### Defined in

[main.ts:22451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22451)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[_discriminator](BaseLocalBusinessLink.md#_discriminator)

#### Defined in

[main.ts:22207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22207)

___

### title

• `Optional` **title**: `string`

title of the element
domain of the online menu system

#### Implementation of

[ILocalBusinessMenuLink](../interfaces/ILocalBusinessMenuLink.md).[title](../interfaces/ILocalBusinessMenuLink.md#title)

#### Defined in

[main.ts:22445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22445)

___

### url

• `Optional` **url**: `string`

URL to view the menu

#### Implementation of

[ILocalBusinessMenuLink](../interfaces/ILocalBusinessMenuLink.md).[url](../interfaces/ILocalBusinessMenuLink.md#url)

#### Defined in

[main.ts:22447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22447)

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

[main.ts:22456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22456)

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

[main.ts:22475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22475)

___

### fromJS

▸ **fromJS**(`data`): [`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalBusinessMenuLink`](LocalBusinessMenuLink.md)

#### Overrides

[BaseLocalBusinessLink](BaseLocalBusinessLink.md).[fromJS](BaseLocalBusinessLink.md#fromjs)

#### Defined in

[main.ts:22468](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22468)
