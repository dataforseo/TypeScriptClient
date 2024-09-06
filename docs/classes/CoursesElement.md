[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CoursesElement

# Class: CoursesElement

## Implements

- [`ICoursesElement`](../interfaces/ICoursesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CoursesElement()

> **new CoursesElement**(`data`?): [`CoursesElement`](CoursesElement.md)

#### Parameters

• **data?**: [`ICoursesElement`](../interfaces/ICoursesElement.md)

#### Returns

[`CoursesElement`](CoursesElement.md)

#### Defined in

main.ts:36425

## Properties

### date?

> `optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`date`](../interfaces/ICoursesElement.md#date)

#### Defined in

main.ts:36415

***

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`description`](../interfaces/ICoursesElement.md#description)

#### Defined in

main.ts:36413

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`domain`](../interfaces/ICoursesElement.md#domain)

#### Defined in

main.ts:36408

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`image_url`](../interfaces/ICoursesElement.md#image_url)

#### Defined in

main.ts:36418

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`rating`](../interfaces/ICoursesElement.md#rating)

#### Defined in

main.ts:36421

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`source`](../interfaces/ICoursesElement.md#source)

#### Defined in

main.ts:36411

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`title`](../interfaces/ICoursesElement.md#title)

#### Defined in

main.ts:36404

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`type`](../interfaces/ICoursesElement.md#type)

#### Defined in

main.ts:36402

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`url`](../interfaces/ICoursesElement.md#url)

#### Defined in

main.ts:36406

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:36434

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:36459

***

### fromJS()

> `static` **fromJS**(`data`): [`CoursesElement`](CoursesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CoursesElement`](CoursesElement.md)

#### Defined in

main.ts:36452
