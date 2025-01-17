[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphAiOverviewItemSerpElementItem

# Class: KnowledgeGraphAiOverviewItemSerpElementItem

Defined in: main.ts:30925

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphAiOverviewItemSerpElementItem()

> **new KnowledgeGraphAiOverviewItemSerpElementItem**(`data`?): [`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)

Defined in: main.ts:30943

#### Parameters

##### data?

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### asynchronous\_ai\_overview?

> `optional` **asynchronous\_ai\_overview**: `boolean`

Defined in: main.ts:30929

indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache;

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`asynchronous_ai_overview`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#asynchronous_ai_overview)

***

### items?

> `optional` **items**: [`AiOverviewElement`](AiOverviewElement.md)[]

Defined in: main.ts:30932

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30939

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#rectangle)

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

Defined in: main.ts:30935

additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`references`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#references)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphAiOverviewItemSerpElementItem`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphAiOverviewItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30948

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

Defined in: main.ts:30977

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)

Defined in: main.ts:30970

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
