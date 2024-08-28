[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AmazonAmazonSellerItemSerpElementItem

# Class: AmazonAmazonSellerItemSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSellerItemSerpElementItem()

> **new AmazonAmazonSellerItemSerpElementItem**(`data`?): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:188146

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22007

***

### condition?

> `optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition)

#### Defined in

main.ts:188136

***

### condition\_description?

> `optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition_description)

#### Defined in

main.ts:188139

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)

#### Defined in

main.ts:188142

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#position)

#### Defined in

main.ts:188119

***

### price?

> `optional` **price**: [`Price`](Price.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#price)

#### Defined in

main.ts:188130

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:188115

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:188112

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rating)

#### Defined in

main.ts:188133

***

### seller\_name?

> `optional` **seller\_name**: `string`

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_name)

#### Defined in

main.ts:188123

***

### seller\_url?

> `optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_url)

#### Defined in

main.ts:188125

***

### ships\_from?

> `optional` **ships\_from**: `string`

sender company name

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#ships_from)

#### Defined in

main.ts:188127

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#xpath)

#### Defined in

main.ts:188121

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:188151

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:188180

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:188173
