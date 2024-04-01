[Documentation](../README.md) / [Exports](../modules.md) / PeopleAlsoAskElement

# Class: PeopleAlsoAskElement

## Implements

- [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoAskElement.md#constructor)

### Properties

- [expanded\_element](PeopleAlsoAskElement.md#expanded_element)
- [seed\_question](PeopleAlsoAskElement.md#seed_question)
- [title](PeopleAlsoAskElement.md#title)
- [type](PeopleAlsoAskElement.md#type)
- [xpath](PeopleAlsoAskElement.md#xpath)

### Methods

- [init](PeopleAlsoAskElement.md#init)
- [toJSON](PeopleAlsoAskElement.md#tojson)
- [fromJS](PeopleAlsoAskElement.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoAskElement**(`data?`): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md) |

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Defined in

main.ts:29255

## Properties

### expanded\_element

• `Optional` **expanded\_element**: [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)[]

expanded element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[expanded_element](../interfaces/IPeopleAlsoAskElement.md#expanded_element)

#### Defined in

main.ts:29251

___

### seed\_question

• `Optional` **seed\_question**: `string`

question that triggered additional expanded elements

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[seed_question](../interfaces/IPeopleAlsoAskElement.md#seed_question)

#### Defined in

main.ts:29247

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[title](../interfaces/IPeopleAlsoAskElement.md#title)

#### Defined in

main.ts:29245

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[type](../interfaces/IPeopleAlsoAskElement.md#type)

#### Defined in

main.ts:29243

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[xpath](../interfaces/IPeopleAlsoAskElement.md#xpath)

#### Defined in

main.ts:29249

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

main.ts:29264

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

main.ts:29289

___

### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Defined in

main.ts:29282
