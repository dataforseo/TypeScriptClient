[**Documentation**](../README.md) • **Docs**

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

• **data?**: [`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md)

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97680

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97676

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97671

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97667

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97664

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:97661

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedSearchesDataforseoLabsSerpElementItem`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97673

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:97685

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:97712

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97705
