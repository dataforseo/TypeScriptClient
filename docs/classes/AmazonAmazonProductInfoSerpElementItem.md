[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonProductInfoSerpElementItem

# Class: AmazonAmazonProductInfoSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonProductInfoSerpElementItem()

> **new AmazonAmazonProductInfoSerpElementItem**(`data`?): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Parameters

##### data?

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:194483

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:23218

***

### author?

> `optional` **author**: `string`

product brand name

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`author`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#author)

#### Defined in

main.ts:194434

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](ProductCategoryInfo.md)[]

contains related product categories

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`categories`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#categories)

#### Defined in

main.ts:194463

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#currency)

#### Defined in

main.ts:194452

***

### data\_asin?

> `optional` **data\_asin**: `string`

ASIN of the product received in a POST array

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#data_asin)

#### Defined in

main.ts:194436

***

### description?

> `optional` **description**: `string`

contains description of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#description)

#### Defined in

main.ts:194471

***

### details?

> `optional` **details**: `string`

product specs and other details

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`details`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#details)

#### Defined in

main.ts:194430

***

### image\_url?

> `optional` **image\_url**: `string`

the URL of the product image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#image_url)

#### Defined in

main.ts:194432

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)

#### Defined in

main.ts:194455

***

### is\_available?

> `optional` **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_available)

#### Defined in

main.ts:194474

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_newer_model_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)

#### Defined in

main.ts:194459

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`newer_model`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#newer_model)

#### Defined in

main.ts:194461

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

parent ASIN of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`parent_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#parent_asin)

#### Defined in

main.ts:194438

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#position)

#### Defined in

main.ts:194426

***

### price\_from?

> `optional` **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_from)

#### Defined in

main.ts:194444

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_to)

#### Defined in

main.ts:194448

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

ASINs of all found product modifications

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_asins`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_asins)

#### Defined in

main.ts:194440

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_images_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_images_list)

#### Defined in

main.ts:194467

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](BaseProductInformationItem.md)[]

contains related product information

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_information`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_information)

#### Defined in

main.ts:194465

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_videos_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_videos_list)

#### Defined in

main.ts:194469

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23214

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23211

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rating)

#### Defined in

main.ts:194457

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#title)

#### Defined in

main.ts:194428

***

### top\_global\_reviews?

> `optional` **top\_global\_reviews**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

array of objects with top reviews from around the world

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`top_global_reviews`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#top_global_reviews)

#### Defined in

main.ts:194479

***

### top\_local\_reviews?

> `optional` **top\_local\_reviews**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`top_local_reviews`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#top_local_reviews)

#### Defined in

main.ts:194477

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23208

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23216

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:194488

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:194556

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:194549
