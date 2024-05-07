**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MultiCarouselElement

# Class: MultiCarouselElement

## Implements

- [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MultiCarouselElement(data)

> **new MultiCarouselElement**(`data`?): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

• **data?**: [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md)

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Source

main.ts:32393

## Properties

### multi\_carousel\_snippets?

> **`optional`** **multi\_carousel\_snippets**: [`CarouselElement`](CarouselElement.md)[]

multi_carousel_snippet results

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`multi_carousel_snippets`](../interfaces/IMultiCarouselElement.md#multi_carousel_snippets)

#### Source

main.ts:32389

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`title`](../interfaces/IMultiCarouselElement.md#title)

#### Source

main.ts:32387

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md).[`type`](../interfaces/IMultiCarouselElement.md#type)

#### Source

main.ts:32385

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32402

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32425

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Source

main.ts:32418
