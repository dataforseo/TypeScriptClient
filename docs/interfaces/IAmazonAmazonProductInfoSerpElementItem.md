[Documentation](../README.md) / [Exports](../modules.md) / IAmazonAmazonProductInfoSerpElementItem

# Interface: IAmazonAmazonProductInfoSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonAmazonProductInfoSerpElementItem`**

## Implemented by

- [`AmazonAmazonProductInfoSerpElementItem`](../classes/AmazonAmazonProductInfoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author](IAmazonAmazonProductInfoSerpElementItem.md#author)
- [categories](IAmazonAmazonProductInfoSerpElementItem.md#categories)
- [currency](IAmazonAmazonProductInfoSerpElementItem.md#currency)
- [data\_asin](IAmazonAmazonProductInfoSerpElementItem.md#data_asin)
- [description](IAmazonAmazonProductInfoSerpElementItem.md#description)
- [details](IAmazonAmazonProductInfoSerpElementItem.md#details)
- [image\_url](IAmazonAmazonProductInfoSerpElementItem.md#image_url)
- [is\_amazon\_choice](IAmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)
- [is\_available](IAmazonAmazonProductInfoSerpElementItem.md#is_available)
- [is\_newer\_model\_available](IAmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)
- [newer\_model](IAmazonAmazonProductInfoSerpElementItem.md#newer_model)
- [parent\_asin](IAmazonAmazonProductInfoSerpElementItem.md#parent_asin)
- [position](IAmazonAmazonProductInfoSerpElementItem.md#position)
- [price\_from](IAmazonAmazonProductInfoSerpElementItem.md#price_from)
- [price\_to](IAmazonAmazonProductInfoSerpElementItem.md#price_to)
- [product\_asins](IAmazonAmazonProductInfoSerpElementItem.md#product_asins)
- [product\_images\_list](IAmazonAmazonProductInfoSerpElementItem.md#product_images_list)
- [product\_information](IAmazonAmazonProductInfoSerpElementItem.md#product_information)
- [product\_videos\_list](IAmazonAmazonProductInfoSerpElementItem.md#product_videos_list)
- [rank\_absolute](IAmazonAmazonProductInfoSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonProductInfoSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonProductInfoSerpElementItem.md#rating)
- [title](IAmazonAmazonProductInfoSerpElementItem.md#title)
- [xpath](IAmazonAmazonProductInfoSerpElementItem.md#xpath)

## Properties

### author

• `Optional` **author**: `string`

product brand name

#### Defined in

main.ts:173113

___

### categories

• `Optional` **categories**: [`ProductCategoryInfo`](../classes/ProductCategoryInfo.md)[]

contains related product categories

#### Defined in

main.ts:173142

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:173131

___

### data\_asin

• `Optional` **data\_asin**: `string`

ASIN of the product received in a POST array

#### Defined in

main.ts:173115

___

### description

• `Optional` **description**: `string`

contains description of the product

#### Defined in

main.ts:173150

___

### details

• `Optional` **details**: `string`

product specs and other details

#### Defined in

main.ts:173109

___

### image\_url

• `Optional` **image\_url**: `string`

the URL of the product image

#### Defined in

main.ts:173111

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:173134

___

### is\_available

• `Optional` **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Defined in

main.ts:173153

___

### is\_newer\_model\_available

• `Optional` **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Defined in

main.ts:173138

___

### newer\_model

• `Optional` **newer\_model**: [`AmazonProductNewerModelInfo`](../classes/AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Defined in

main.ts:173140

___

### parent\_asin

• `Optional` **parent\_asin**: `string`

parent ASIN of the product

#### Defined in

main.ts:173117

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

main.ts:173103

___

### price\_from

• `Optional` **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Defined in

main.ts:173123

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:173127

___

### product\_asins

• `Optional` **product\_asins**: `string`[]

ASINs of all found product modifications

#### Defined in

main.ts:173119

___

### product\_images\_list

• `Optional` **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Defined in

main.ts:173146

___

### product\_information

• `Optional` **product\_information**: [`BaseProductInformationItem`](../classes/BaseProductInformationItem.md)[]

contains related product information

#### Defined in

main.ts:173144

___

### product\_videos\_list

• `Optional` **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Defined in

main.ts:173148

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank
absolute position among all the elements in the response array

#### Defined in

main.ts:173099

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:173096

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Defined in

main.ts:173136

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:173107

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:173105
