[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / FaqBoxElement

# Class: FaqBoxElement

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FaqBoxElement()

> **new FaqBoxElement**(`data`?): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

• **data?**: [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:29399

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

#### Defined in

main.ts:29393

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

#### Defined in

main.ts:29395

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

#### Defined in

main.ts:29391

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

#### Defined in

main.ts:29389

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:29408

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:29432

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:29425
