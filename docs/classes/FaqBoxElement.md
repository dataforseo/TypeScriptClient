**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FaqBoxElement

# Class: FaqBoxElement

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FaqBoxElement(data)

> **new FaqBoxElement**(`data`?): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

• **data?**: [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Source

main.ts:29022

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

#### Source

main.ts:29016

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

#### Source

main.ts:29018

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

#### Source

main.ts:29014

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

#### Source

main.ts:29012

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:29031

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:29055

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Source

main.ts:29048
