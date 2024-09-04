[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonAmazonProductInfoSerpElementItem

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

• **data?**: [`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:186719

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22007

***

### author?

> `optional` **author**: `string`

product brand name

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`author`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#author)

#### Defined in

main.ts:186675

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](ProductCategoryInfo.md)[]

contains related product categories

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`categories`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#categories)

#### Defined in

main.ts:186704

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#currency)

#### Defined in

main.ts:186693

***

### data\_asin?

> `optional` **data\_asin**: `string`

ASIN of the product received in a POST array

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#data_asin)

#### Defined in

main.ts:186677

***

### description?

> `optional` **description**: `string`

contains description of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#description)

#### Defined in

main.ts:186712

***

### details?

> `optional` **details**: `string`

product specs and other details

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`details`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#details)

#### Defined in

main.ts:186671

***

### image\_url?

> `optional` **image\_url**: `string`

the URL of the product image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#image_url)

#### Defined in

main.ts:186673

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)

#### Defined in

main.ts:186696

***

### is\_available?

> `optional` **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_available)

#### Defined in

main.ts:186715

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`is_newer_model_available`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)

#### Defined in

main.ts:186700

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`newer_model`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#newer_model)

#### Defined in

main.ts:186702

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

parent ASIN of the product

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`parent_asin`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#parent_asin)

#### Defined in

main.ts:186679

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#position)

#### Defined in

main.ts:186665

***

### price\_from?

> `optional` **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_from)

#### Defined in

main.ts:186685

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_to)

#### Defined in

main.ts:186689

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

ASINs of all found product modifications

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_asins`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_asins)

#### Defined in

main.ts:186681

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_images_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_images_list)

#### Defined in

main.ts:186708

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](BaseProductInformationItem.md)[]

contains related product information

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_information`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_information)

#### Defined in

main.ts:186706

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`product_videos_list`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_videos_list)

#### Defined in

main.ts:186710

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank
absolute position among all the elements in the response array

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:186661

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_group)

#### Defined in

main.ts:186658

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rating)

#### Defined in

main.ts:186698

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#title)

#### Defined in

main.ts:186669

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#xpath)

#### Defined in

main.ts:186667

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:186724

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:186785

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:186778
