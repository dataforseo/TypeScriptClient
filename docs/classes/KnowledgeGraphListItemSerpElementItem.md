[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphListItemSerpElementItem

# Class: KnowledgeGraphListItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListItemSerpElementItem()

> **new KnowledgeGraphListItemSerpElementItem**(`data`?): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28187

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:28174

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#items)

#### Defined in

main.ts:28179

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#link)

#### Defined in

main.ts:28176

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#position)

#### Defined in

main.ts:28166

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:28162

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:28159

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28183

***

### title?

> `optional` **title**: `string`

title of the link element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#title)

#### Defined in

main.ts:28170

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#xpath)

#### Defined in

main.ts:28168

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:28192

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:28222

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28215
