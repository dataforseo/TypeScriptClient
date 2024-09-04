[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LinkElement

# Class: LinkElement

## Implements

- [`ILinkElement`](../interfaces/ILinkElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LinkElement()

> **new LinkElement**(`data`?): [`LinkElement`](LinkElement.md)

#### Parameters

• **data?**: [`ILinkElement`](../interfaces/ILinkElement.md)

#### Returns

[`LinkElement`](LinkElement.md)

#### Defined in

main.ts:22640

## Properties

### description?

> `optional` **description**: `string`

description of the results element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`description`](../interfaces/ILinkElement.md#description)

#### Defined in

main.ts:22630

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`domain`](../interfaces/ILinkElement.md#domain)

#### Defined in

main.ts:22634

***

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`snippet`](../interfaces/ILinkElement.md#snippet)

#### Defined in

main.ts:22628

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`title`](../interfaces/ILinkElement.md#title)

#### Defined in

main.ts:22626

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`type`](../interfaces/ILinkElement.md#type)

#### Defined in

main.ts:22624

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`url`](../interfaces/ILinkElement.md#url)

#### Defined in

main.ts:22632

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`xpath`](../interfaces/ILinkElement.md#xpath)

#### Defined in

main.ts:22636

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22649

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22672

***

### fromJS()

> `static` **fromJS**(`data`): [`LinkElement`](LinkElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`LinkElement`](LinkElement.md)

#### Defined in

main.ts:22665
