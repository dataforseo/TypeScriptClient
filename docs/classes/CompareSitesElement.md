[**Documentation**](../README.md)

***

[Documentation](../README.md) / CompareSitesElement

# Class: CompareSitesElement

Defined in: main.ts:37745

## Implements

- [`ICompareSitesElement`](../interfaces/ICompareSitesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CompareSitesElement()

> **new CompareSitesElement**(`data`?): [`CompareSitesElement`](CompareSitesElement.md)

Defined in: main.ts:37763

#### Parameters

##### data?

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md)

#### Returns

[`CompareSitesElement`](CompareSitesElement.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37753

website domain

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`domain`](../interfaces/ICompareSitesElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:37756

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`image_url`](../interfaces/ICompareSitesElement.md#image_url)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37759

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`source`](../interfaces/ICompareSitesElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37749

title of a given link element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`title`](../interfaces/ICompareSitesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:37747

type of element

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`type`](../interfaces/ICompareSitesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37751

URL

#### Implementation of

[`ICompareSitesElement`](../interfaces/ICompareSitesElement.md).[`url`](../interfaces/ICompareSitesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37772

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37794

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CompareSitesElement`](CompareSitesElement.md)

Defined in: main.ts:37787

#### Parameters

##### data

`any`

#### Returns

[`CompareSitesElement`](CompareSitesElement.md)
