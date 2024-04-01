[Documentation](../README.md) / [Exports](../modules.md) / LastModified

# Class: LastModified

## Implements

- [`ILastModified`](../interfaces/ILastModified.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LastModified.md#constructor)

### Properties

- [header](LastModified.md#header)
- [meta\_tag](LastModified.md#meta_tag)
- [sitemap](LastModified.md#sitemap)

### Methods

- [init](LastModified.md#init)
- [toJSON](LastModified.md#tojson)
- [fromJS](LastModified.md#fromjs)

## Constructors

### constructor

• **new LastModified**(`data?`): [`LastModified`](LastModified.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILastModified`](../interfaces/ILastModified.md) |

#### Returns

[`LastModified`](LastModified.md)

#### Defined in

main.ts:150244

## Properties

### header

• `Optional` **header**: `string`

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[ILastModified](../interfaces/ILastModified.md).[header](../interfaces/ILastModified.md#header)

#### Defined in

main.ts:150228

___

### meta\_tag

• `Optional` **meta\_tag**: `string`

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[ILastModified](../interfaces/ILastModified.md).[meta_tag](../interfaces/ILastModified.md#meta_tag)

#### Defined in

main.ts:150240

___

### sitemap

• `Optional` **sitemap**: `string`

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[ILastModified](../interfaces/ILastModified.md).[sitemap](../interfaces/ILastModified.md#sitemap)

#### Defined in

main.ts:150234

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

main.ts:150253

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

main.ts:150272

___

### fromJS

▸ **fromJS**(`data`): [`LastModified`](LastModified.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LastModified`](LastModified.md)

#### Defined in

main.ts:150265
