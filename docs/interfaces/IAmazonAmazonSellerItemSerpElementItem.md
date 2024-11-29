[**Documentation**](../README.md)

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

main.ts:196125

***

### condition\_description?

> `optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Defined in

main.ts:196128

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:196131

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Defined in

main.ts:196110

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Defined in

main.ts:196119

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

seller rating details
seller popularity rate based on customer reviews

#### Defined in

main.ts:196122

***

### seller\_name?

> `optional` **seller\_name**: `string`

business name of the seller

#### Defined in

main.ts:196112

***

### seller\_url?

> `optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Defined in

main.ts:196114

***

### ships\_from?

> `optional` **ships\_from**: `string`

sender company name

#### Defined in

main.ts:196116

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
