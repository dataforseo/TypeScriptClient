[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonProductInfoSerpElementItem

# Interface: IAmazonAmazonProductInfoSerpElementItem

Defined in: main.ts:195400

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### applicable\_vouchers?

> `optional` **applicable\_vouchers**: [`AmazonApplicableVouchersItem`](../classes/AmazonApplicableVouchersItem.md)[]

Defined in: main.ts:195439

array of objects containing information about applicable vouchers

***

### author?

> `optional` **author**: `string`

Defined in: main.ts:195412

product brand name

***

### categories?

> `optional` **categories**: [`ProductCategoryInfo`](../classes/ProductCategoryInfo.md)[]

Defined in: main.ts:195443

contains related product categories

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:195430

currency in the ISO format
example:
USD

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:195414

ASIN of the product received in a POST array

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:195451

contains description of the product

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:195408

product specs and other details

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:195410

the URL of the product image

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:195433

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

***

### is\_available?

> `optional` **is\_available**: `boolean`

Defined in: main.ts:195454

indicates whether the product is available for ordering
if the value is true, the product can be ordered

***

### is\_newer\_model\_available?

> `optional` **is\_newer\_model\_available**: `boolean`

Defined in: main.ts:195437

indicates whether the newer model of the product is available

***

### newer\_model?

> `optional` **newer\_model**: [`AmazonProductNewerModelInfo`](../classes/AmazonProductNewerModelInfo.md)

Defined in: main.ts:195441

information about the newer model of the product

***

### parent\_asin?

> `optional` **parent\_asin**: `string`

Defined in: main.ts:195416

parent ASIN of the product

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:195404

the alignment of the element in Amazon SERP
possible values:
left, right

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:195422

the lower limit of the product price range
example:
49.98

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:195426

the upper limit of the product price range
example:
384.99

***

### product\_asins?

> `optional` **product\_asins**: `string`[]

Defined in: main.ts:195418

ASINs of all found product modifications

***

### product\_images\_list?

> `optional` **product\_images\_list**: `string`[]

Defined in: main.ts:195447

contains URLs for all images of the product displayed on the left side of the main image

***

### product\_information?

> `optional` **product\_information**: [`BaseProductInformationItem`](../classes/BaseProductInformationItem.md)[]

Defined in: main.ts:195445

contains related product information

***

### product\_videos\_list?

> `optional` **product\_videos\_list**: `string`[]

Defined in: main.ts:195449

contains URLs for all videos of the product displayed on the right side of the main video

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23310

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23307

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:195435

product rating info

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:195406

product title

***

### top\_global\_reviews?

> `optional` **top\_global\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:195459

array of objects with top reviews from around the world

***

### top\_local\_reviews?

> `optional` **top\_local\_reviews**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:195457

array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23304

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23312

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
