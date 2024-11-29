[**Documentation**](../README.md)

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

##### data?

[`ICarouselElement`](../interfaces/ICarouselElement.md)

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:33004

## Properties

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`image_url`](../interfaces/ICarouselElement.md#image_url)

#### Defined in

main.ts:33000

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`subtitle`](../interfaces/ICarouselElement.md#subtitle)

#### Defined in

main.ts:32997

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`title`](../interfaces/ICarouselElement.md#title)

#### Defined in

main.ts:32995

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`type`](../interfaces/ICarouselElement.md#type)

#### Defined in

main.ts:32993

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:33013

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:33033

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

#### Parameters

##### data

`any`

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:33026
