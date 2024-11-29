[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonTopRatedFromOurBrandsSerpElementItem

# Class: AmazonTopRatedFromOurBrandsSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonTopRatedFromOurBrandsSerpElementItem()

> **new AmazonTopRatedFromOurBrandsSerpElementItem**(`data`?): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Parameters

##### data?

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:192840

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:23218

***

### items?

> `optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Amazon product items

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`items`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#items)

#### Defined in

main.ts:192836

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`position`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#position)

#### Defined in

main.ts:192834

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23214

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`rank_group`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23211

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`type`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23208

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonTopRatedFromOurBrandsSerpElementItem`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md).[`xpath`](../interfaces/IAmazonTopRatedFromOurBrandsSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23216

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:192845

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:192868

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:192861
