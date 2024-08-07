**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AmazonAmazonSellerItemSerpElementItem(data)

> **new AmazonAmazonSellerItemSerpElementItem**(`data`?): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Source

main.ts:186314

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Source

main.ts:21825

***

### condition?

> **`optional`** **condition**: `string`

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition)

#### Source

main.ts:186304

***

### condition\_description?

> **`optional`** **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition_description)

#### Source

main.ts:186307

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)

#### Source

main.ts:186310

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#position)

#### Source

main.ts:186287

***

### price?

> **`optional`** **price**: [`Price`](Price.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#price)

#### Source

main.ts:186298

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:186283

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_group)

#### Source

main.ts:186280

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rating)

#### Source

main.ts:186301

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_name)

#### Source

main.ts:186291

***

### seller\_url?

> **`optional`** **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_url)

#### Source

main.ts:186293

***

### ships\_from?

> **`optional`** **ships\_from**: `string`

sender company name

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#ships_from)

#### Source

main.ts:186295

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#xpath)

#### Source

main.ts:186289

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

main.ts:186319

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

main.ts:186348

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Source

main.ts:186341
