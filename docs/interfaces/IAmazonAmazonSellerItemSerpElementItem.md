[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAmazonAmazonSellerItemSerpElementItem

# Interface: IAmazonAmazonSellerItemSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### condition?

> `optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Defined in

main.ts:188230

***

### condition\_description?

> `optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Defined in

main.ts:188233

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:188236

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Defined in

main.ts:188213

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

product pricing details
if there are no details, the value will be null

#### Defined in

main.ts:188224

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Defined in

main.ts:188209

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:188206

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Defined in

main.ts:188227

***

### seller\_name?

> `optional` **seller\_name**: `string`

business name of the seller

#### Defined in

main.ts:188217

***

### seller\_url?

> `optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Defined in

main.ts:188219

***

### ships\_from?

> `optional` **ships\_from**: `string`

sender company name

#### Defined in

main.ts:188221

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:188215
