[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphPartItemSerpElementItem

# Class: KnowledgeGraphPartItemSerpElementItem

Defined in: main.ts:30279

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphPartItemSerpElementItem()

> **new KnowledgeGraphPartItemSerpElementItem**(`data`?): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

Defined in: main.ts:30300

#### Parameters

##### data?

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

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

Defined in: main.ts:30285

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:30292

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30296

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:30288

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30281

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30305

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

Defined in: main.ts:30331

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

Defined in: main.ts:30324

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
