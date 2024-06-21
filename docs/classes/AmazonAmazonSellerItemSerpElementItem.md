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

main.ts:183191

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

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition)

#### Source

main.ts:183181

***

### condition\_description?

> **`optional`** **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition_description)

#### Source

main.ts:183184

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)

#### Source

main.ts:183187

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#position)

#### Source

main.ts:183164

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#price)

#### Source

main.ts:183175

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:183160

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_group)

#### Source

main.ts:183157

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rating)

#### Source

main.ts:183178

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_name)

#### Source

main.ts:183168

***

### seller\_url?

> **`optional`** **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_url)

#### Source

main.ts:183170

***

### ships\_from?

> **`optional`** **ships\_from**: `string`

sender company name

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#ships_from)

#### Source

main.ts:183172

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#xpath)

#### Source

main.ts:183166

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

main.ts:183196

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

main.ts:183225

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

main.ts:183218
