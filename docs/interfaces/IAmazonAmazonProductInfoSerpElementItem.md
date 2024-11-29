[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonProductInfoSerpElementItem

# Interface: IAmazonAmazonProductInfoSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

product brand name

#### Defined in

main.ts:194630

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](../classes/ProductCategoryInfo.md)[]

contains related product categories

#### Defined in

main.ts:194659

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:194648

***

### data\_asin?

> `optional` **data\_asin**: `string`

ASIN of the product received in a POST array

#### Defined in

main.ts:194632

***

### description?

> `optional` **description**: `string`

contains description of the product

#### Defined in

main.ts:194667

***

### details?

> `optional` **details**: `string`

product specs and other details

#### Defined in

main.ts:194626

***

### image\_url?

> `optional` **image\_url**: `string`

the URL of the product image

#### Defined in

main.ts:194628

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:194651

***

### is\_available?

> `optional` **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Defined in

main.ts:194670

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Defined in

main.ts:194655

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](../classes/AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Defined in

main.ts:194657

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

parent ASIN of the product

#### Defined in

main.ts:194634

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

main.ts:194622

***

### price\_from?

> `optional` **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Defined in

main.ts:194640

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:194644

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

ASINs of all found product modifications

#### Defined in

main.ts:194636

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Defined in

main.ts:194663

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](../classes/BaseProductInformationItem.md)[]

contains related product information

#### Defined in

main.ts:194661

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Defined in

main.ts:194665

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23310

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23307

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Defined in

main.ts:194653

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:194624

***

### top\_global\_reviews?

> `optional` **top\_global\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

array of objects with top reviews from around the world

#### Defined in

main.ts:194675

***

### top\_local\_reviews?

> `optional` **top\_local\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST

#### Defined in

main.ts:194673

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23304

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23312
