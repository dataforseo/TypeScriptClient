[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / FindResultsOnDataforseoLabsSerpElementItem

# Class: FindResultsOnDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FindResultsOnDataforseoLabsSerpElementItem()

> **new FindResultsOnDataforseoLabsSerpElementItem**(`data`?): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101759

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101755

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101750

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101746

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101743

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101752

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

main.ts:101764

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

main.ts:101790

***

### fromJS()

> `static` **fromJS**(`data`): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101783
