[dataforseo-client](../README.md) / [Exports](../modules.md) / LastModified

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

[main.ts:144817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144817)

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

[main.ts:144801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144801)

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

[main.ts:144813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144813)

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

[main.ts:144807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144807)

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

[main.ts:144826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144826)

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

[main.ts:144845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144845)

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

[main.ts:144838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144838)
