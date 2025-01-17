[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphShoppingItemSerpElementItem

# Class: KnowledgeGraphShoppingItemSerpElementItem

Defined in: main.ts:30475

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingItemSerpElementItem()

> **new KnowledgeGraphShoppingItemSerpElementItem**(`data`?): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

Defined in: main.ts:30492

#### Parameters

##### data?

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

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

Defined in: main.ts:30481

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

Defined in: main.ts:30484

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30488

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30477

title of the place

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30497

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

Defined in: main.ts:30522

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

Defined in: main.ts:30515

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
