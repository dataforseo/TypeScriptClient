**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LinkElement

# Class: LinkElement

## Implements

- [`ILinkElement`](../interfaces/ILinkElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LinkElement(data)

> **new LinkElement**(`data`?): [`LinkElement`](LinkElement.md)

#### Parameters

• **data?**: [`ILinkElement`](../interfaces/ILinkElement.md)

#### Returns

[`LinkElement`](LinkElement.md)

#### Source

main.ts:22142

## Properties

### description?

> **`optional`** **description**: `string`

description of the results element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`description`](../interfaces/ILinkElement.md#description)

#### Source

main.ts:22132

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`domain`](../interfaces/ILinkElement.md#domain)

#### Source

main.ts:22136

***

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`snippet`](../interfaces/ILinkElement.md#snippet)

#### Source

main.ts:22130

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`title`](../interfaces/ILinkElement.md#title)

#### Source

main.ts:22128

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`type`](../interfaces/ILinkElement.md#type)

#### Source

main.ts:22126

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`url`](../interfaces/ILinkElement.md#url)

#### Source

main.ts:22134

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILinkElement`](../interfaces/ILinkElement.md).[`xpath`](../interfaces/ILinkElement.md#xpath)

#### Source

main.ts:22138

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22151

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22174

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LinkElement`](LinkElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`LinkElement`](LinkElement.md)

#### Source

main.ts:22167
