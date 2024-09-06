[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / EventsElement

# Class: EventsElement

## Implements

- [`IEventsElement`](../interfaces/IEventsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsElement()

> **new EventsElement**(`data`?): [`EventsElement`](EventsElement.md)

#### Parameters

• **data?**: [`IEventsElement`](../interfaces/IEventsElement.md)

#### Returns

[`EventsElement`](EventsElement.md)

#### Defined in

main.ts:32292

## Properties

### snippet?

> `optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`snippet`](../interfaces/IEventsElement.md#snippet)

#### Defined in

main.ts:32286

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`title`](../interfaces/IEventsElement.md#title)

#### Defined in

main.ts:32284

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`type`](../interfaces/IEventsElement.md#type)

#### Defined in

main.ts:32282

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`url`](../interfaces/IEventsElement.md#url)

#### Defined in

main.ts:32288

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32301

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32321

***

### fromJS()

> `static` **fromJS**(`data`): [`EventsElement`](EventsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsElement`](EventsElement.md)

#### Defined in

main.ts:32314
