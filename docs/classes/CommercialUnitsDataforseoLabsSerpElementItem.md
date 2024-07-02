**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CommercialUnitsDataforseoLabsSerpElementItem

# Class: CommercialUnitsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsDataforseoLabsSerpElementItem(data)

> **new CommercialUnitsDataforseoLabsSerpElementItem**(`data`?): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md)

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:100442

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:100438

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:100431

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:100427

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:100424

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:100435

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:100433

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

main.ts:100447

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

main.ts:100474

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:100467
