[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CompareSitesElement

# Class: CompareSitesElement

## Implements

- [`ICompareSitesElement`](../interfaces/ICompareSitesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CompareSitesElement()

> **new CompareSitesElement**(`data`?): [`CompareSitesElement`](CompareSitesElement.md)

#### Parameters

• **data?**: [`ICompareSitesElement`](../interfaces/ICompareSitesElement.md)

#### Returns

[`CompareSitesElement`](CompareSitesElement.md)

#### Defined in

main.ts:36262

## Properties

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`domain`](../interfaces/ICompareSitesElement.md#domain)

#### Defined in

main.ts:36252

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`image_url`](../interfaces/ICompareSitesElement.md#image_url)

#### Defined in

main.ts:36255

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`source`](../interfaces/ICompareSitesElement.md#source)

#### Defined in

main.ts:36258

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`title`](../interfaces/ICompareSitesElement.md#title)

#### Defined in

main.ts:36248

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`type`](../interfaces/ICompareSitesElement.md#type)

#### Defined in

main.ts:36246

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`url`](../interfaces/ICompareSitesElement.md#url)

#### Defined in

main.ts:36250

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:36271

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:36293

***

### fromJS()

> `static` **fromJS**(`data`): [`CompareSitesElement`](CompareSitesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CompareSitesElement`](CompareSitesElement.md)

#### Defined in

main.ts:36286
