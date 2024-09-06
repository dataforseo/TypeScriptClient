[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PeopleAlsoAskElement

# Class: PeopleAlsoAskElement

## Implements

- [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskElement()

> **new PeopleAlsoAskElement**(`data`?): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Parameters

• **data?**: [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Defined in

main.ts:30326

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)[]

expanded element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`expanded_element`](../interfaces/IPeopleAlsoAskElement.md#expanded_element)

#### Defined in

main.ts:30322

***

### seed\_question?

> `optional` **seed\_question**: `string`

question that triggered additional expanded elements

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`seed_question`](../interfaces/IPeopleAlsoAskElement.md#seed_question)

#### Defined in

main.ts:30318

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`title`](../interfaces/IPeopleAlsoAskElement.md#title)

#### Defined in

main.ts:30316

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`type`](../interfaces/IPeopleAlsoAskElement.md#type)

#### Defined in

main.ts:30314

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`xpath`](../interfaces/IPeopleAlsoAskElement.md#xpath)

#### Defined in

main.ts:30320

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:30335

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:30360

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

#### Defined in

main.ts:30353
