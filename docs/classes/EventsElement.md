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

main.ts:32103

## Properties

### snippet?

> **`optional`** **snippet**: `string`

text alongside the link title

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`snippet`](../interfaces/IEventsElement.md#snippet)

#### Source

main.ts:32097

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`title`](../interfaces/IEventsElement.md#title)

#### Source

main.ts:32095

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`type`](../interfaces/IEventsElement.md#type)

#### Source

main.ts:32093

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IEventsElement`](../interfaces/IEventsElement.md).[`url`](../interfaces/IEventsElement.md#url)

#### Source

main.ts:32099

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32112

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32132

***

### fromJS()

> **`static`** **fromJS**(`data`): [`EventsElement`](EventsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsElement`](EventsElement.md)

#### Source

main.ts:32125
