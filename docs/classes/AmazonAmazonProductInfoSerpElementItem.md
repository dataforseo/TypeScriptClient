[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonProductInfoSerpElementItem

# Class: AmazonAmazonProductInfoSerpElementItem

Defined in: main.ts:194490

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonProductInfoSerpElementItem()

> **new AmazonAmazonProductInfoSerpElementItem**(`data`?): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

Defined in: main.ts:194551

#### Parameters

##### data?

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### author?

> `optional` **author**: `string`

Defined in: main.ts:194502

product brand name

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`author`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#author)

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](ProductCategoryInfo.md)[]

Defined in: main.ts:194531

contains related product categories

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`categories`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#categories)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:194520

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#currency)

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:194504

ASIN of the product received in a POST array

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#data_asin)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:194539

contains description of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#description)

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:194498

product specs and other details

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`details`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#details)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:194500

the URL of the product image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#image_url)

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:194523

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)

***

### is\_available?

> `optional` **is\_available**: `boolean`

Defined in: main.ts:194542

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_available)

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

Defined in: main.ts:194527

indicates whether the newer model of the product is available

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_newer_model_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](AmazonProductNewerModelInfo.md)

Defined in: main.ts:194529

information about the newer model of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`newer_model`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#newer_model)

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

Defined in: main.ts:194506

parent ASIN of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`parent_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#parent_asin)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:194494

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#position)

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:194512

the lower limit of the product price range
example:
49.98

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_from)

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:194516

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_to)

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

Defined in: main.ts:194508

ASINs of all found product modifications

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_asins`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_asins)

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

Defined in: main.ts:194535

contains URLs for all images of the product displayed on the left side of the main image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_images_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_images_list)

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](BaseProductInformationItem.md)[]

Defined in: main.ts:194533

contains related product information

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_information`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_information)

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

Defined in: main.ts:194537

contains URLs for all videos of the product displayed on the right side of the main video

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_videos_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_videos_list)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:194525

product rating info

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:194496

product title

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#title)

***

### top\_global\_reviews?

> `optional` **top\_global\_reviews**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:194547

array of objects with top reviews from around the world

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`top_global_reviews`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#top_global_reviews)

***

### top\_local\_reviews?

> `optional` **top\_local\_reviews**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:194545

array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`top_local_reviews`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#top_local_reviews)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194556

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194624

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

Defined in: main.ts:194617

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
