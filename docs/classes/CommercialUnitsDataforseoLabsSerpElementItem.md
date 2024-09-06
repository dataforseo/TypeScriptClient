[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CommercialUnitsDataforseoLabsSerpElementItem

# Class: CommercialUnitsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsDataforseoLabsSerpElementItem()

> **new CommercialUnitsDataforseoLabsSerpElementItem**(`data`?): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md)

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99337

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### items?

> `optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:99333

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#position)

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

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:99331

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:99342

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

main.ts:99365

***

### fromJS()

> `static` **fromJS**(`data`): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99358
