[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MultiCarouselElement

# Class: MultiCarouselElement

## Implements

- [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MultiCarouselElement()

> **new MultiCarouselElement**(`data`?): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

• **data?**: [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md)

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Defined in

main.ts:32502

## Properties

### multi\_carousel\_snippets?

> `optional` **multi\_carousel\_snippets**: [`CarouselElement`](CarouselElement.md)[]

multi_carousel_snippet results

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`multi_carousel_snippets`](../interfaces/IMultiCarouselElement.md#multi_carousel_snippets)

#### Defined in

main.ts:32498

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`title`](../interfaces/IMultiCarouselElement.md#title)

#### Defined in

main.ts:32496

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`type`](../interfaces/IMultiCarouselElement.md#type)

#### Defined in

main.ts:32494

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32511

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32534

***

### fromJS()

> `static` **fromJS**(`data`): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Defined in

main.ts:32527
