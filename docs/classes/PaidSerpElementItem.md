[**Documentation**](../README.md)

***

[Documentation](../README.md) / PaidSerpElementItem

# Class: PaidSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PaidSerpElementItem()

> **new PaidSerpElementItem**(`data`?): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

##### data?

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28597

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

breadcrumb in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidSerpElementItem.md#breadcrumb)

#### Defined in

main.ts:28563

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description`](../interfaces/IPaidSerpElementItem.md#description)

#### Defined in

main.ts:28577

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description_rows`](../interfaces/IPaidSerpElementItem.md#description_rows)

#### Defined in

main.ts:28580

***

### domain?

> `optional` **domain**: `string`

domain name of the reference

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`domain`](../interfaces/IPaidSerpElementItem.md#domain)

#### Defined in

main.ts:28561

***

### extra?

> `optional` **extra**: `object`

additional information about the result

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`extra`](../interfaces/IPaidSerpElementItem.md#extra)

#### Defined in

main.ts:28575

***

### highlighted?

> `optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`highlighted`](../interfaces/IPaidSerpElementItem.md#highlighted)

#### Defined in

main.ts:28573

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`images`](../interfaces/IPaidSerpElementItem.md#images)

#### Defined in

main.ts:28569

***

### is\_image?

> `optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_image`](../interfaces/IPaidSerpElementItem.md#is_image)

#### Defined in

main.ts:28565

***

### is\_video?

> `optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_video`](../interfaces/IPaidSerpElementItem.md#is_video)

#### Defined in

main.ts:28567

***

### links?

> `optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`links`](../interfaces/IPaidSerpElementItem.md#links)

#### Defined in

main.ts:28584

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`position`](../interfaces/IPaidSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`price`](../interfaces/IPaidSerpElementItem.md#price)

#### Defined in

main.ts:28587

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidSerpElementItem.md#rank_absolute)

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

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_group`](../interfaces/IPaidSerpElementItem.md#rank_group)

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

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rectangle`](../interfaces/IPaidSerpElementItem.md#rectangle)

#### Defined in

main.ts:28591

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`title`](../interfaces/IPaidSerpElementItem.md#title)

#### Defined in

main.ts:28559

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`type`](../interfaces/IPaidSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`url`](../interfaces/IPaidSerpElementItem.md#url)

#### Defined in

main.ts:28571

***

### website\_name?

> `optional` **website\_name**: `string`

website name in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`website_name`](../interfaces/IPaidSerpElementItem.md#website_name)

#### Defined in

main.ts:28593

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`xpath`](../interfaces/IPaidSerpElementItem.md#xpath)

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

main.ts:28602

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

main.ts:28656

***

### fromJS()

> `static` **fromJS**(`data`): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28649
