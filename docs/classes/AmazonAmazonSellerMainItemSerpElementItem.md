[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonSellerMainItemSerpElementItem

# Class: AmazonAmazonSellerMainItemSerpElementItem

Defined in: main.ts:196486

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSellerMainItemSerpElementItem()

> **new AmazonAmazonSellerMainItemSerpElementItem**(`data`?): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

Defined in: main.ts:196515

#### Parameters

##### data?

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### condition?

> `optional` **condition**: `string`

Defined in: main.ts:196505

product condition
condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition)

***

### condition\_description?

> `optional` **condition\_description**: `string`

Defined in: main.ts:196508

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`condition_description`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition_description)

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:196511

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:196490

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:196499

product pricing details
if there are no details, the value will be null

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`price`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:196502

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rating)

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:196492

business name of the seller

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_name`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_name)

***

### seller\_url?

> `optional` **seller\_url**: `string`

Defined in: main.ts:196494

url forwarding to the seller’s page on Amazon

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`seller_url`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_url)

***

### ships\_from?

> `optional` **ships\_from**: `string`

Defined in: main.ts:196496

sender company name

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`ships_from`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#ships_from)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:196520

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:196546

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

Defined in: main.ts:196539

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
