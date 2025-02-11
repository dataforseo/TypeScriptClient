[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonTopRatedFromOurBrandsSerpElementItem

# Class: AmazonTopRatedFromOurBrandsSerpElementItem

Defined in: main.ts:193304

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonTopRatedFromOurBrandsSerpElementItem()

> **new AmazonTopRatedFromOurBrandsSerpElementItem**(`data`?): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

Defined in: main.ts:193314

#### Parameters

##### data?

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Defined in: main.ts:193310

Amazon product items

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`items`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:193308

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`position`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`type`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`xpath`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193319

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

Defined in: main.ts:193342

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

Defined in: main.ts:193335

#### Parameters

##### data

`any`

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
