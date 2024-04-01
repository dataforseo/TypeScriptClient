[Documentation](../README.md) / [Exports](../modules.md) / EventsElement

# Class: EventsElement

## Implements

- [`IEventsElement`](../interfaces/IEventsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](EventsElement.md#constructor)

### Properties

- [snippet](EventsElement.md#snippet)
- [title](EventsElement.md#title)
- [type](EventsElement.md#type)
- [url](EventsElement.md#url)

### Methods

- [init](EventsElement.md#init)
- [toJSON](EventsElement.md#tojson)
- [fromJS](EventsElement.md#fromjs)

## Constructors

### constructor

• **new EventsElement**(`data?`): [`EventsElement`](EventsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IEventsElement`](../interfaces/IEventsElement.md) |

#### Returns

[`EventsElement`](EventsElement.md)

#### Defined in

main.ts:31811

## Properties

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IEventsElement](../interfaces/IEventsElement.md).[snippet](../interfaces/IEventsElement.md#snippet)

#### Defined in

main.ts:31805

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IEventsElement](../interfaces/IEventsElement.md).[title](../interfaces/IEventsElement.md#title)

#### Defined in

main.ts:31803

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IEventsElement](../interfaces/IEventsElement.md).[type](../interfaces/IEventsElement.md#type)

#### Defined in

main.ts:31801

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IEventsElement](../interfaces/IEventsElement.md).[url](../interfaces/IEventsElement.md#url)

#### Defined in

main.ts:31807

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:31820

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:31840

___

### fromJS

▸ **fromJS**(`data`): [`EventsElement`](EventsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`EventsElement`](EventsElement.md)

#### Defined in

main.ts:31833
