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

main.ts:30855

## Properties

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`image_url`](../interfaces/ICarouselElement.md#image_url)

#### Source

main.ts:30851

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`subtitle`](../interfaces/ICarouselElement.md#subtitle)

#### Source

main.ts:30849

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`title`](../interfaces/ICarouselElement.md#title)

#### Source

main.ts:30847

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`type`](../interfaces/ICarouselElement.md#type)

#### Source

main.ts:30845

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:30864

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:30884

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Source

main.ts:30877
