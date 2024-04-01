[Documentation](../README.md) / [Exports](../modules.md) / TechnologyCategoryInfo

# Class: TechnologyCategoryInfo

## Implements

- [`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TechnologyCategoryInfo.md#constructor)

### Properties

- [id](TechnologyCategoryInfo.md#id)
- [path](TechnologyCategoryInfo.md#path)
- [technologies](TechnologyCategoryInfo.md#technologies)
- [title](TechnologyCategoryInfo.md#title)

### Methods

- [init](TechnologyCategoryInfo.md#init)
- [toJSON](TechnologyCategoryInfo.md#tojson)
- [fromJS](TechnologyCategoryInfo.md#fromjs)

## Constructors

### constructor

• **new TechnologyCategoryInfo**(`data?`): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md) |

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Defined in

main.ts:74493

## Properties

### id

• `Optional` **id**: `string`

id of the technology category
example:
crm, cart_abandonment

#### Implementation of

[ITechnologyCategoryInfo](../interfaces/ITechnologyCategoryInfo.md).[id](../interfaces/ITechnologyCategoryInfo.md#id)

#### Defined in

main.ts:74479

___

### path

• `Optional` **path**: `string`

path to the technology category
example:
user_generated_content.content_curation

#### Implementation of

[ITechnologyCategoryInfo](../interfaces/ITechnologyCategoryInfo.md).[path](../interfaces/ITechnologyCategoryInfo.md#path)

#### Defined in

main.ts:74483

___

### technologies

• `Optional` **technologies**: `string`[]

list of technologies in this category
example:
"Salesforce", "CareCart"

#### Implementation of

[ITechnologyCategoryInfo](../interfaces/ITechnologyCategoryInfo.md).[technologies](../interfaces/ITechnologyCategoryInfo.md#technologies)

#### Defined in

main.ts:74489

___

### title

• `Optional` **title**: `string`

title of the technology category

#### Implementation of

[ITechnologyCategoryInfo](../interfaces/ITechnologyCategoryInfo.md).[title](../interfaces/ITechnologyCategoryInfo.md#title)

#### Defined in

main.ts:74485

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

main.ts:74502

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

main.ts:74526

___

### fromJS

▸ **fromJS**(`data`): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Defined in

main.ts:74519
