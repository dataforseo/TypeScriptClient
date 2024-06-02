**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / EventsElement

# Class: EventsElement

## Implements

- [`IEventsElement`](../interfaces/IEventsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsElement(data)

> **new EventsElement**(`data`?): [`EventsElement`](EventsElement.md)

#### Parameters

• **data?**: [`IEventsElement`](../interfaces/IEventsElement.md)

#### Returns

[`EventsElement`](EventsElement.md)

#### Source

main.ts:32054

## Properties

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`snippet`](../interfaces/IEventsElement.md#snippet)

#### Source

main.ts:32048

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`title`](../interfaces/IEventsElement.md#title)

#### Source

main.ts:32046

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`type`](../interfaces/IEventsElement.md#type)

#### Source

main.ts:32044

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`url`](../interfaces/IEventsElement.md#url)

#### Source

main.ts:32050

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32063

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32083

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventsElement`](EventsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsElement`](EventsElement.md)

#### Source

main.ts:32076
