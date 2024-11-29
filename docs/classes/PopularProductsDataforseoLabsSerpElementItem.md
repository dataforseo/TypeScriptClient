[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularProductsDataforseoLabsSerpElementItem

# Class: PopularProductsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsDataforseoLabsSerpElementItem()

> **new PopularProductsDataforseoLabsSerpElementItem**(`data`?): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:108697

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:108693

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:108702

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:108724

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:108717
