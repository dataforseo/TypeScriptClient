**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CarouselElement

# Class: CarouselElement

## Implements

- [`ICarouselElement`](../interfaces/ICarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CarouselElement(data)

> **new CarouselElement**(`data`?): [`CarouselElement`](CarouselElement.md)

#### Parameters

• **data?**: [`ICarouselElement`](../interfaces/ICarouselElement.md)

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Source

main.ts:31170

## Properties

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`image_url`](../interfaces/ICarouselElement.md#image_url)

#### Source

main.ts:31166

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`subtitle`](../interfaces/ICarouselElement.md#subtitle)

#### Source

main.ts:31164

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`title`](../interfaces/ICarouselElement.md#title)

#### Source

main.ts:31162

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`type`](../interfaces/ICarouselElement.md#type)

#### Source

main.ts:31160

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:31179

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:31199

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Source

main.ts:31192
