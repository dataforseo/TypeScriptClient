**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CoursesElement

# Class: CoursesElement

## Implements

- [`ICoursesElement`](../interfaces/ICoursesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CoursesElement(data)

> **new CoursesElement**(`data`?): [`CoursesElement`](CoursesElement.md)

#### Parameters

• **data?**: [`ICoursesElement`](../interfaces/ICoursesElement.md)

#### Returns

[`CoursesElement`](CoursesElement.md)

#### Source

main.ts:37777

## Properties

### date?

> **`optional`** **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`date`](../interfaces/ICoursesElement.md#date)

#### Source

main.ts:37768

***

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`description`](../interfaces/ICoursesElement.md#description)

#### Source

main.ts:37766

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`domain`](../interfaces/ICoursesElement.md#domain)

#### Source

main.ts:37761

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`image_url`](../interfaces/ICoursesElement.md#image_url)

#### Source

main.ts:37770

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`rating`](../interfaces/ICoursesElement.md#rating)

#### Source

main.ts:37773

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`source`](../interfaces/ICoursesElement.md#source)

#### Source

main.ts:37764

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`title`](../interfaces/ICoursesElement.md#title)

#### Source

main.ts:37757

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`type`](../interfaces/ICoursesElement.md#type)

#### Source

main.ts:37755

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`url`](../interfaces/ICoursesElement.md#url)

#### Source

main.ts:37759

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:37786

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:37811

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CoursesElement`](CoursesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`CoursesElement`](CoursesElement.md)

#### Source

main.ts:37804
