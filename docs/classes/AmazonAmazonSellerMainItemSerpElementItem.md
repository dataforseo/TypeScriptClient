**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonAmazonSellerMainItemSerpElementItem

# Class: AmazonAmazonSellerMainItemSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSellerMainItemSerpElementItem(data)

> **new AmazonAmazonSellerMainItemSerpElementItem**(`data`?): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Source

main.ts:183489

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Source

main.ts:21498

***

### condition?

> **`optional`** **condition**: `string`

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition)

#### Source

main.ts:183479

***

### condition\_description?

> **`optional`** **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition_description)

#### Source

main.ts:183482

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)

#### Source

main.ts:183485

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#position)

#### Source

main.ts:183462

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#price)

#### Source

main.ts:183473

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:183458

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_group)

#### Source

main.ts:183455

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rating)

#### Source

main.ts:183476

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_name)

#### Source

main.ts:183466

***

### seller\_url?

> **`optional`** **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_url)

#### Source

main.ts:183468

***

### ships\_from?

> **`optional`** **ships\_from**: `string`

sender company name

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#ships_from)

#### Source

main.ts:183470

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#xpath)

#### Source

main.ts:183464

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Source

main.ts:183494

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Source

main.ts:183523

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Source

main.ts:183516
