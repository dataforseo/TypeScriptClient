[Documentation](../README.md) / [Exports](../modules.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoAskExpandedElement.md#constructor)

### Properties

- [description](PeopleAlsoAskExpandedElement.md#description)
- [domain](PeopleAlsoAskExpandedElement.md#domain)
- [featured\_title](PeopleAlsoAskExpandedElement.md#featured_title)
- [images](PeopleAlsoAskExpandedElement.md#images)
- [table](PeopleAlsoAskExpandedElement.md#table)
- [timestamp](PeopleAlsoAskExpandedElement.md#timestamp)
- [title](PeopleAlsoAskExpandedElement.md#title)
- [type](PeopleAlsoAskExpandedElement.md#type)
- [url](PeopleAlsoAskExpandedElement.md#url)

### Methods

- [init](PeopleAlsoAskExpandedElement.md#init)
- [toJSON](PeopleAlsoAskExpandedElement.md#tojson)
- [fromJS](PeopleAlsoAskExpandedElement.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoAskExpandedElement**(`data?`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md) |

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:28544

## Properties

### description

• `Optional` **description**: `string`

description of the hotel booking element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[description](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

#### Defined in

main.ts:28530

___

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[domain](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

#### Defined in

main.ts:28526

___

### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[featured_title](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

#### Defined in

main.ts:28522

___

### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[images](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

#### Defined in

main.ts:28532

___

### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[table](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

#### Defined in

main.ts:28540

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[timestamp](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

#### Defined in

main.ts:28537

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[title](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

#### Defined in

main.ts:28528

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[type](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

#### Defined in

main.ts:28520

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[url](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

#### Defined in

main.ts:28524

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

main.ts:28553

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

main.ts:28582

___

### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

main.ts:28575
