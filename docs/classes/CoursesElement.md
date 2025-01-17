[**Documentation**](../README.md)

***

[Documentation](../README.md) / CoursesElement

# Class: CoursesElement

Defined in: main.ts:37885

## Implements

- [`ICoursesElement`](../interfaces/ICoursesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CoursesElement()

> **new CoursesElement**(`data`?): [`CoursesElement`](CoursesElement.md)

Defined in: main.ts:37910

#### Parameters

##### data?

[`ICoursesElement`](../interfaces/ICoursesElement.md)

#### Returns

[`CoursesElement`](CoursesElement.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:37900

the date when the page source of the element was published

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`date`](../interfaces/ICoursesElement.md#date)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:37898

description

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`description`](../interfaces/ICoursesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:37893

website domain

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`domain`](../interfaces/ICoursesElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:37903

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`image_url`](../interfaces/ICoursesElement.md#image_url)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:37906

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`rating`](../interfaces/ICoursesElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:37896

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`source`](../interfaces/ICoursesElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37889

title of a given link element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`title`](../interfaces/ICoursesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:37887

type of element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`type`](../interfaces/ICoursesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:37891

URL

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`url`](../interfaces/ICoursesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37919

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37944

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CoursesElement`](CoursesElement.md)

Defined in: main.ts:37937

#### Parameters

##### data

`any`

#### Returns

[`CoursesElement`](CoursesElement.md)
