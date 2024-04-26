**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonSellerMainItemSerpElementItem

# Interface: IAmazonAmazonSellerMainItemSerpElementItem

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

main.ts:180694

***

### condition\_description?

> **`optional`** **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Source

main.ts:180697

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:180700

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Source

main.ts:180677

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Source

main.ts:180688

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Source

main.ts:180673

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:180670

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Source

main.ts:180691

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

business name of the seller

#### Source

main.ts:180681

***

### seller\_url?

> **`optional`** **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Source

main.ts:180683

***

### ships\_from?

> **`optional`** **ships\_from**: `string`

sender company name

#### Source

main.ts:180685

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:180679
