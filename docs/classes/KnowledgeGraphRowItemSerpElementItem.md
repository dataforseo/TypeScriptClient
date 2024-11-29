[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphRowItemSerpElementItem

# Class: KnowledgeGraphRowItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphRowItemSerpElementItem()

> **new KnowledgeGraphRowItemSerpElementItem**(`data`?): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

##### data?

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:29936

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:29923

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the faq_box_element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`links`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#links)

#### Defined in

main.ts:29928

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:29932

***

### text?

> `optional` **text**: `string`

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`text`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#text)

#### Defined in

main.ts:29926

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#title)

#### Defined in

main.ts:29919

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphRowItemSerpElementItem`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphRowItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:29941

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:29967

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29960
