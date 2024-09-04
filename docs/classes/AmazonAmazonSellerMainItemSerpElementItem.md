[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonAmazonSellerMainItemSerpElementItem

# Class: AmazonAmazonSellerMainItemSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSellerMainItemSerpElementItem()

> **new AmazonAmazonSellerMainItemSerpElementItem**(`data`?): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:183600

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22315

***

### condition?

> `optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition)

#### Defined in

main.ts:183590

***

### condition\_description?

> `optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition_description)

#### Defined in

main.ts:183593

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)

#### Defined in

main.ts:183596

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#position)

#### Defined in

main.ts:183575

***

### price?

> `optional` **price**: [`Price`](Price.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#price)

#### Defined in

main.ts:183584

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22311

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:22308

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rating)

#### Defined in

main.ts:183587

***

### seller\_name?

> `optional` **seller\_name**: `string`

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_name)

#### Defined in

main.ts:183577

***

### seller\_url?

> `optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_url)

#### Defined in

main.ts:183579

***

### ships\_from?

> `optional` **ships\_from**: `string`

sender company name

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#ships_from)

#### Defined in

main.ts:183581

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:22305

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:22313

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

main.ts:183605

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

main.ts:183631

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:183624
