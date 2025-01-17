[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphListItemSerpElementItem

# Class: KnowledgeGraphListItemSerpElementItem

Defined in: main.ts:29827

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphListItemSerpElementItem()

> **new KnowledgeGraphListItemSerpElementItem**(`data`?): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

Defined in: main.ts:29846

#### Parameters

##### data?

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:29833

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

Defined in: main.ts:29838

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:29835

link of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:29842

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:29829

title of the link element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:29851

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:29877

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

Defined in: main.ts:29870

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
