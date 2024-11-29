[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesDataforseoLabsSerpElementItem

# Class: RelatedSearchesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesDataforseoLabsSerpElementItem()

> **new RelatedSearchesDataforseoLabsSerpElementItem**(`data`?): [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:105670

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:105666

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#position)

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

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:105664

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:105675

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

main.ts:105698

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:105691
