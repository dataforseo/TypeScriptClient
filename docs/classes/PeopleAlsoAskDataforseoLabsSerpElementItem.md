[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskDataforseoLabsSerpElementItem

# Class: PeopleAlsoAskDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskDataforseoLabsSerpElementItem()

> **new PeopleAlsoAskDataforseoLabsSerpElementItem**(`data`?): [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Returns

[`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:105608

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:105604

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#position)

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

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:105602

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:105613

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

main.ts:105636

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:105629
