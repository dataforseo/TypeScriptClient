**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PeopleAlsoAskSerpElementItem

# Class: PeopleAlsoAskSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskSerpElementItem(data)

> **new PeopleAlsoAskSerpElementItem**(`data`?): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

• **data?**: [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:29641

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoAskSerpElementItem.md#items)

#### Source

main.ts:29633

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoAskSerpElementItem.md#position)

#### Source

main.ts:29628

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_absolute)

#### Source

main.ts:29624

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_group)

#### Source

main.ts:29620

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rectangle`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rectangle)

#### Source

main.ts:29637

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoAskSerpElementItem.md#xpath)

#### Source

main.ts:29630

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:29646

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:29673

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:29666
