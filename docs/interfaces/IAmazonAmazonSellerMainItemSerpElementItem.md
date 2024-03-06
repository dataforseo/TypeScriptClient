[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonAmazonSellerMainItemSerpElementItem

# Interface: IAmazonAmazonSellerMainItemSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)
  
  ↳ **`IAmazonAmazonSellerMainItemSerpElementItem`**

## Implemented by

- [`AmazonAmazonSellerMainItemSerpElementItem`](../classes/AmazonAmazonSellerMainItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [condition](IAmazonAmazonSellerMainItemSerpElementItem.md#condition)
- [condition\_description](IAmazonAmazonSellerMainItemSerpElementItem.md#condition_description)
- [delivery\_info](IAmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)
- [position](IAmazonAmazonSellerMainItemSerpElementItem.md#position)
- [price](IAmazonAmazonSellerMainItemSerpElementItem.md#price)
- [rank\_absolute](IAmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonSellerMainItemSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonSellerMainItemSerpElementItem.md#rating)
- [seller\_name](IAmazonAmazonSellerMainItemSerpElementItem.md#seller_name)
- [seller\_url](IAmazonAmazonSellerMainItemSerpElementItem.md#seller_url)
- [ships\_from](IAmazonAmazonSellerMainItemSerpElementItem.md#ships_from)
- [xpath](IAmazonAmazonSellerMainItemSerpElementItem.md#xpath)

## Properties

### condition

• `Optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Defined in

[main.ts:174233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174233)

___


### condition\_description

• `Optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Defined in

[main.ts:174236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174236)

___


### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

[main.ts:174239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174239)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Defined in

[main.ts:174216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174216)

___


### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Defined in

[main.ts:174227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174227)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Defined in

[main.ts:174212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174212)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:174209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174209)

___


### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Defined in

[main.ts:174230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174230)

___


### seller\_name

• `Optional` **seller\_name**: `string`

business name of the seller

#### Defined in

[main.ts:174220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174220)

___


### seller\_url

• `Optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Defined in

[main.ts:174222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174222)

___


### ships\_from

• `Optional` **ships\_from**: `string`

sender company name

#### Defined in

[main.ts:174224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174224)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:174218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174218)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")