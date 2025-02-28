[**Documentation**](../README.md)

***

[Documentation](../README.md) / EventsElement

# Class: EventsElement

Defined in: main.ts:33849

## Implements

- [`IEventsElement`](../interfaces/IEventsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new EventsElement()

> **new EventsElement**(`data`?): [`EventsElement`](EventsElement.md)

Defined in: main.ts:33861

#### Parameters

##### data?

[`IEventsElement`](../interfaces/IEventsElement.md)

#### Returns

[`EventsElement`](EventsElement.md)

## Properties

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:33855

text alongside the link title

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`snippet`](../interfaces/IEventsElement.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33853

title of a given link element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`title`](../interfaces/IEventsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33851

type of element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`type`](../interfaces/IEventsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:33857

URL

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`url`](../interfaces/IEventsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33870

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:33890

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`EventsElement`](EventsElement.md)

Defined in: main.ts:33883

#### Parameters

##### data

`any`

#### Returns

[`EventsElement`](EventsElement.md)
