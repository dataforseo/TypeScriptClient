[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / CarouselElement

# Class: CarouselElement

## Implements

- [`ICarouselElement`](../interfaces/ICarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CarouselElement()

> **new CarouselElement**(`data`?): [`CarouselElement`](CarouselElement.md)

#### Parameters

• **data?**: [`ICarouselElement`](../interfaces/ICarouselElement.md)

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:31693

## Properties

### image\_url?

> `optional` **image\_url**: `string`

URL of the image

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`image_url`](../interfaces/ICarouselElement.md#image_url)

#### Defined in

main.ts:31689

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`subtitle`](../interfaces/ICarouselElement.md#subtitle)

#### Defined in

main.ts:31687

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`title`](../interfaces/ICarouselElement.md#title)

#### Defined in

main.ts:31685

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`type`](../interfaces/ICarouselElement.md#type)

#### Defined in

main.ts:31683

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:31702

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:31722

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:31715
