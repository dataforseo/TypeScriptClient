[Documentation](../README.md) / [Exports](../modules.md) / IAmazonSerpElement

# Interface: IAmazonSerpElement

## Implemented by

- [`AmazonSerpElement`](../classes/AmazonSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [bought\_past\_month](IAmazonSerpElement.md#bought_past_month)
- [currency](IAmazonSerpElement.md#currency)
- [data\_asin](IAmazonSerpElement.md#data_asin)
- [delivery\_info](IAmazonSerpElement.md#delivery_info)
- [domain](IAmazonSerpElement.md#domain)
- [image\_url](IAmazonSerpElement.md#image_url)
- [is\_amazon\_choice](IAmazonSerpElement.md#is_amazon_choice)
- [is\_best\_seller](IAmazonSerpElement.md#is_best_seller)
- [price\_from](IAmazonSerpElement.md#price_from)
- [price\_to](IAmazonSerpElement.md#price_to)
- [rating](IAmazonSerpElement.md#rating)
- [special\_offers](IAmazonSerpElement.md#special_offers)
- [title](IAmazonSerpElement.md#title)
- [type](IAmazonSerpElement.md#type)
- [url](IAmazonSerpElement.md#url)
- [xpath](IAmazonSerpElement.md#xpath)

## Properties

### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Defined in

main.ts:176427

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:176439

___

### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Defined in

main.ts:176447

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:176458

___

### domain

• `Optional` **domain**: `string`

Amazon domain

#### Defined in

main.ts:176419

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Defined in

main.ts:176425

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Defined in

main.ts:176452

___

### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Defined in

main.ts:176455

___

### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Defined in

main.ts:176431

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Defined in

main.ts:176435

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating info

#### Defined in

main.ts:176449

___

### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Defined in

main.ts:176442

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:176421

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:176415

___

### url

• `Optional` **url**: `string`

the URL of the product page

#### Defined in

main.ts:176423

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:176417
