**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonSellerItemSerpElementItem

# Interface: IAmazonAmazonSellerItemSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### condition?

> **`optional`** **condition**: `string`

product condition
condition of the product offered by the seller

#### Source

main.ts:182174

***

### condition\_description?

> **`optional`** **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Source

main.ts:182177

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:182180

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Source

main.ts:182157

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Source

main.ts:182168

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Source

main.ts:182153

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:182150

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Source

main.ts:182171

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

business name of the seller

#### Source

main.ts:182161

***

### seller\_url?

> **`optional`** **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Source

main.ts:182163

***

### ships\_from?

> **`optional`** **ships\_from**: `string`

sender company name

#### Source

main.ts:182165

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:182159
