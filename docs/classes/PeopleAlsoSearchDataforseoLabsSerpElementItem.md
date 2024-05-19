**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PeopleAlsoSearchDataforseoLabsSerpElementItem

# Class: PeopleAlsoSearchDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearchDataforseoLabsSerpElementItem(data)

> **new PeopleAlsoSearchDataforseoLabsSerpElementItem**(`data`?): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:94947

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20377

***

### items?

> **`optional`** **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:94943

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:94937

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:94933

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:94930

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#se_type)

#### Source

main.ts:94927

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:94941

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:94939

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

main.ts:94952

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

main.ts:94980

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:94973
