**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonSerpElement

# Class: AmazonSerpElement

## Implements

- [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonSerpElement(data)

> **new AmazonSerpElement**(`data`?): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

• **data?**: [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Source

main.ts:179797

## Properties

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`bought_past_month`](../interfaces/IAmazonSerpElement.md#bought_past_month)

#### Source

main.ts:179762

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`currency`](../interfaces/IAmazonSerpElement.md#currency)

#### Source

main.ts:179774

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`data_asin`](../interfaces/IAmazonSerpElement.md#data_asin)

#### Source

main.ts:179782

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`delivery_info`](../interfaces/IAmazonSerpElement.md#delivery_info)

#### Source

main.ts:179793

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`domain`](../interfaces/IAmazonSerpElement.md#domain)

#### Source

main.ts:179754

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`image_url`](../interfaces/IAmazonSerpElement.md#image_url)

#### Source

main.ts:179760

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_amazon_choice`](../interfaces/IAmazonSerpElement.md#is_amazon_choice)

#### Source

main.ts:179787

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_best_seller`](../interfaces/IAmazonSerpElement.md#is_best_seller)

#### Source

main.ts:179790

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_from`](../interfaces/IAmazonSerpElement.md#price_from)

#### Source

main.ts:179766

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_to`](../interfaces/IAmazonSerpElement.md#price_to)

#### Source

main.ts:179770

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`rating`](../interfaces/IAmazonSerpElement.md#rating)

#### Source

main.ts:179784

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`special_offers`](../interfaces/IAmazonSerpElement.md#special_offers)

#### Source

main.ts:179777

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`title`](../interfaces/IAmazonSerpElement.md#title)

#### Source

main.ts:179756

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`type`](../interfaces/IAmazonSerpElement.md#type)

#### Source

main.ts:179750

***

### url?

> **`optional`** **url**: `string`

the URL of the product page

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`url`](../interfaces/IAmazonSerpElement.md#url)

#### Source

main.ts:179758

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`xpath`](../interfaces/IAmazonSerpElement.md#xpath)

#### Source

main.ts:179752

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:179806

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:179842

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Source

main.ts:179835
