**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonProductInfoSerpElementItem

# Interface: IAmazonAmazonProductInfoSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author?

> **`optional`** **author**: `string`

product brand name

#### Source

main.ts:182335

***

### categories?

> **`optional`** **categories**: [`ProductCategoryInfo`](../classes/ProductCategoryInfo.md)[]

contains related product categories

#### Source

main.ts:182364

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:182353

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

ASIN of the product received in a POST array

#### Source

main.ts:182337

***

### description?

> **`optional`** **description**: `string`

contains description of the product

#### Source

main.ts:182372

***

### details?

> **`optional`** **details**: `string`

product specs and other details

#### Source

main.ts:182331

***

### image\_url?

> **`optional`** **image\_url**: `string`

the URL of the product image

#### Source

main.ts:182333

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Source

main.ts:182356

***

### is\_available?

> **`optional`** **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Source

main.ts:182375

***

### is\_newer\_model\_available?

> **`optional`** **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Source

main.ts:182360

***

### newer\_model?

> **`optional`** **newer\_model**: [`AmazonProductNewerModelInfo`](../classes/AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Source

main.ts:182362

***

### parent\_asin?

> **`optional`** **parent\_asin**: `string`

parent ASIN of the product

#### Source

main.ts:182339

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Source

main.ts:182325

***

### price\_from?

> **`optional`** **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Source

main.ts:182345

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Source

main.ts:182349

***

### product\_asins?

> **`optional`** **product\_asins**: `string`[]

ASINs of all found product modifications

#### Source

main.ts:182341

***

### product\_images\_list?

> **`optional`** **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Source

main.ts:182368

***

### product\_information?

> **`optional`** **product\_information**: [`BaseProductInformationItem`](../classes/BaseProductInformationItem.md)[]

contains related product information

#### Source

main.ts:182366

***

### product\_videos\_list?

> **`optional`** **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Source

main.ts:182370

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank
absolute position among all the elements in the response array

#### Source

main.ts:182321

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:182318

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Source

main.ts:182358

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:182329

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:182327
