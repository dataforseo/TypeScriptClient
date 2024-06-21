**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new FindResultsOnDataforseoLabsSerpElementItem(data)

> **new FindResultsOnDataforseoLabsSerpElementItem**(`data`?): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:99778

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:99774

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:99769

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:99765

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:99762

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:99771

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:99783

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:99809

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:99802
