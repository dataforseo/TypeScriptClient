[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PeopleAlsoSearchDataforseoLabsSerpElementItem

# Class: PeopleAlsoSearchDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearchDataforseoLabsSerpElementItem()

> **new PeopleAlsoSearchDataforseoLabsSerpElementItem**(`data`?): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97209

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### items?

> `optional` **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97205

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97203

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

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

main.ts:97214

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

main.ts:97237

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97230
