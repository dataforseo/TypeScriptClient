[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / LocalServicesElement

# Class: LocalServicesElement

## Implements

- [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesElement()

> **new LocalServicesElement**(`data`?): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

• **data?**: [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Defined in

main.ts:35496

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`description`](../interfaces/ILocalServicesElement.md#description)

#### Defined in

main.ts:35487

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`domain`](../interfaces/ILocalServicesElement.md#domain)

#### Defined in

main.ts:35485

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`profile_image_url`](../interfaces/ILocalServicesElement.md#profile_image_url)

#### Defined in

main.ts:35492

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`rating`](../interfaces/ILocalServicesElement.md#rating)

#### Defined in

main.ts:35490

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`title`](../interfaces/ILocalServicesElement.md#title)

#### Defined in

main.ts:35481

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`type`](../interfaces/ILocalServicesElement.md#type)

#### Defined in

main.ts:35479

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`url`](../interfaces/ILocalServicesElement.md#url)

#### Defined in

main.ts:35483

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:35505

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:35528

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Defined in

main.ts:35521
