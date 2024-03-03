[Documentation](../README.md) / [Exports](../modules.md) / AuthorsElement

# Class: AuthorsElement

## Implements

- [`IAuthorsElement`](../interfaces/IAuthorsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AuthorsElement.md#constructor)

### Properties

- [domain](AuthorsElement.md#domain)
- [name](AuthorsElement.md#name)
- [type](AuthorsElement.md#type)
- [url](AuthorsElement.md#url)

### Methods

- [init](AuthorsElement.md#init)
- [toJSON](AuthorsElement.md#tojson)
- [fromJS](AuthorsElement.md#fromjs)

## Constructors

### constructor

• **new AuthorsElement**(`data?`): [`AuthorsElement`](AuthorsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAuthorsElement`](../interfaces/IAuthorsElement.md) |

#### Returns

[`AuthorsElement`](AuthorsElement.md)

#### Defined in

main.ts:50778

## Properties

### domain

• `Optional` **domain**: `string`

author’s link domain

#### Implementation of

[IAuthorsElement](../interfaces/IAuthorsElement.md).[domain](../interfaces/IAuthorsElement.md#domain)

#### Defined in

main.ts:50774

___

### name

• `Optional` **name**: `string`

name of the dataset author

#### Implementation of

[IAuthorsElement](../interfaces/IAuthorsElement.md).[name](../interfaces/IAuthorsElement.md#name)

#### Defined in

main.ts:50770

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAuthorsElement](../interfaces/IAuthorsElement.md).[type](../interfaces/IAuthorsElement.md#type)

#### Defined in

main.ts:50768

___

### url

• `Optional` **url**: `string`

author’s link URL

#### Implementation of

[IAuthorsElement](../interfaces/IAuthorsElement.md).[url](../interfaces/IAuthorsElement.md#url)

#### Defined in

main.ts:50772

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

main.ts:50787

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

main.ts:50807

___

### fromJS

▸ **fromJS**(`data`): [`AuthorsElement`](AuthorsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AuthorsElement`](AuthorsElement.md)

#### Defined in

main.ts:50800
