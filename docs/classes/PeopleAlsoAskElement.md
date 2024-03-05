[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoAskElement

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

[main.ts:28504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28504)

## Properties

### expanded\_element

• `Optional` **expanded\_element**: [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)[]

expanded element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[expanded_element](../interfaces/IPeopleAlsoAskElement.md#expanded_element)

#### Defined in

[main.ts:28500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28500)

___

### seed\_question

• `Optional` **seed\_question**: `string`

question that triggered additional expanded elements

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[seed_question](../interfaces/IPeopleAlsoAskElement.md#seed_question)

#### Defined in

[main.ts:28496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28496)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[title](../interfaces/IPeopleAlsoAskElement.md#title)

#### Defined in

[main.ts:28494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28494)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[type](../interfaces/IPeopleAlsoAskElement.md#type)

#### Defined in

[main.ts:28492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28492)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoAskElement](../interfaces/IPeopleAlsoAskElement.md).[xpath](../interfaces/IPeopleAlsoAskElement.md#xpath)

#### Defined in

[main.ts:28498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28498)

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

[main.ts:28513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28513)

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

[main.ts:28538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28538)

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

[main.ts:28531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28531)
