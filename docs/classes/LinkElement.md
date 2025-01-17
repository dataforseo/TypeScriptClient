[**Documentation**](../README.md)

***

[Documentation](../README.md) / LinkElement

# Class: LinkElement

Defined in: main.ts:23525

## Implements

- [`ILinkElement`](../interfaces/ILinkElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LinkElement()

> **new LinkElement**(`data`?): [`LinkElement`](LinkElement.md)

Defined in: main.ts:23543

#### Parameters

##### data?

[`ILinkElement`](../interfaces/ILinkElement.md)

#### Returns

[`LinkElement`](LinkElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:23533

description of the results element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`description`](../interfaces/ILinkElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:23537

domain where a link points

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`domain`](../interfaces/ILinkElement.md#domain)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:23531

text alongside the link title

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`snippet`](../interfaces/ILinkElement.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:23529

title of a given link element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`title`](../interfaces/ILinkElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23527

type of element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`type`](../interfaces/ILinkElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:23535

URL

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`url`](../interfaces/ILinkElement.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23539

the XPath of the element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`xpath`](../interfaces/ILinkElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23552

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23575

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`LinkElement`](LinkElement.md)

Defined in: main.ts:23568

#### Parameters

##### data

`any`

#### Returns

[`LinkElement`](LinkElement.md)
