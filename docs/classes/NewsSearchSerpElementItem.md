**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / NewsSearchSerpElementItem

# Class: NewsSearchSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new NewsSearchSerpElementItem(data)

> **new NewsSearchSerpElementItem**(`data`?): [`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md)

#### Returns

[`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:43420

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### domain?

> **`optional`** **domain**: `string`

domain name of the result in SERP

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`domain`](../interfaces/INewsSearchSerpElementItem.md#domain)

#### Source

main.ts:43396

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`image_url`](../interfaces/INewsSearchSerpElementItem.md#image_url)

#### Source

main.ts:43403

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/INewsSearchSerpElementItem.md#rank_absolute)

#### Source

main.ts:43392

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`rank_group`](../interfaces/INewsSearchSerpElementItem.md#rank_group)

#### Source

main.ts:43389

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`rectangle`](../interfaces/INewsSearchSerpElementItem.md#rectangle)

#### Source

main.ts:43416

***

### snippet?

> **`optional`** **snippet**: `string`

snippet of the result in SERP

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`snippet`](../interfaces/INewsSearchSerpElementItem.md#snippet)

#### Source

main.ts:43405

***

### time\_published?

> **`optional`** **time\_published**: `string`

indicates the time the result was published

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`time_published`](../interfaces/INewsSearchSerpElementItem.md#time_published)

#### Source

main.ts:43407

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`timestamp`](../interfaces/INewsSearchSerpElementItem.md#timestamp)

#### Source

main.ts:43412

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`title`](../interfaces/INewsSearchSerpElementItem.md#title)

#### Source

main.ts:43398

***

### url?

> **`optional`** **url**: `string`

URL of the result in SERP

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`url`](../interfaces/INewsSearchSerpElementItem.md#url)

#### Source

main.ts:43400

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md).[`xpath`](../interfaces/INewsSearchSerpElementItem.md#xpath)

#### Source

main.ts:43394

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:43425

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:43453

***

### fromJS()

> **`static`** **fromJS**(`data`): [`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:43446
