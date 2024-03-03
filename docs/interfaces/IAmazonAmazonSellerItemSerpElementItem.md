[Documentation](../README.md) / [Exports](../modules.md) / IAmazonAmazonSellerItemSerpElementItem

# Interface: IAmazonAmazonSellerItemSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonAmazonSellerItemSerpElementItem`**

## Implemented by

- [`AmazonAmazonSellerItemSerpElementItem`](../classes/AmazonAmazonSellerItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [condition](IAmazonAmazonSellerItemSerpElementItem.md#condition)
- [condition\_description](IAmazonAmazonSellerItemSerpElementItem.md#condition_description)
- [delivery\_info](IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)
- [position](IAmazonAmazonSellerItemSerpElementItem.md#position)
- [price](IAmazonAmazonSellerItemSerpElementItem.md#price)
- [rank\_absolute](IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonSellerItemSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonSellerItemSerpElementItem.md#rating)
- [seller\_name](IAmazonAmazonSellerItemSerpElementItem.md#seller_name)
- [seller\_url](IAmazonAmazonSellerItemSerpElementItem.md#seller_url)
- [ships\_from](IAmazonAmazonSellerItemSerpElementItem.md#ships_from)
- [xpath](IAmazonAmazonSellerItemSerpElementItem.md#xpath)

## Properties

### condition

• `Optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Defined in

main.ts:174485

___

### condition\_description

• `Optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Defined in

main.ts:174488

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:174491

___

### position

• `Optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Defined in

main.ts:174468

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Defined in

main.ts:174479

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Defined in

main.ts:174464

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:174461

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Defined in

main.ts:174482

___

### seller\_name

• `Optional` **seller\_name**: `string`

business name of the seller

#### Defined in

main.ts:174472

___

### seller\_url

• `Optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Defined in

main.ts:174474

___

### ships\_from

• `Optional` **ships\_from**: `string`

sender company name

#### Defined in

main.ts:174476

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:174470
