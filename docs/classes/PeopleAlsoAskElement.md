[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskElement

# Class: PeopleAlsoAskElement

Defined in: main.ts:31879

## Implements

- [`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskElement()

> **new PeopleAlsoAskElement**(`data`?): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

Defined in: main.ts:31893

#### Parameters

##### data?

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md)

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)[]

Defined in: main.ts:31889

expanded element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`expanded_element`](../interfaces/IPeopleAlsoAskElement.md#expanded_element)

***

### seed\_question?

> `optional` **seed\_question**: `string`

Defined in: main.ts:31885

question that triggered additional expanded elements

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`seed_question`](../interfaces/IPeopleAlsoAskElement.md#seed_question)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31883

title of a given link element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`title`](../interfaces/IPeopleAlsoAskElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31881

type of element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`type`](../interfaces/IPeopleAlsoAskElement.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:31887

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskElement`](../interfaces/IPeopleAlsoAskElement.md).[`xpath`](../interfaces/IPeopleAlsoAskElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31902

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31927

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)

Defined in: main.ts:31920

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)
