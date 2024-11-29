[**Documentation**](../README.md)

***

[Documentation](../README.md) / FeaturedSnippetSerpElementItem

# Class: FeaturedSnippetSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FeaturedSnippetSerpElementItem()

> **new FeaturedSnippetSerpElementItem**(`data`?): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

##### data?

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:29057

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`breadcrumb`](../interfaces/IFeaturedSnippetSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:29037

***

### description?

> `optional` **description**: `string`

description of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`description`](../interfaces/IFeaturedSnippetSerpElementItem.md#description)

#### Defined in

main.ts:29033

***

### domain?

> `optional` **domain**: `string`

domain of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`domain`](../interfaces/IFeaturedSnippetSerpElementItem.md#domain)

#### Defined in

main.ts:29029

***

### featured\_title?

> `optional` **featured\_title**: `string`

title

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`featured_title`](../interfaces/IFeaturedSnippetSerpElementItem.md#featured_title)

#### Defined in

main.ts:29039

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`images`](../interfaces/IFeaturedSnippetSerpElementItem.md#images)

#### Defined in

main.ts:29046

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`position`](../interfaces/IFeaturedSnippetSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_absolute`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_group`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rectangle`](../interfaces/IFeaturedSnippetSerpElementItem.md#rectangle)

#### Defined in

main.ts:29053

***

### table?

> `optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`table`](../interfaces/IFeaturedSnippetSerpElementItem.md#table)

#### Defined in

main.ts:29049

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`timestamp`](../interfaces/IFeaturedSnippetSerpElementItem.md#timestamp)

#### Defined in

main.ts:29044

***

### title?

> `optional` **title**: `string`

title of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`title`](../interfaces/IFeaturedSnippetSerpElementItem.md#title)

#### Defined in

main.ts:29031

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`type`](../interfaces/IFeaturedSnippetSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

relevant URL of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`url`](../interfaces/IFeaturedSnippetSerpElementItem.md#url)

#### Defined in

main.ts:29035

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`xpath`](../interfaces/IFeaturedSnippetSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:29062

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:29093

***

### fromJS()

> `static` **fromJS**(`data`): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29086
