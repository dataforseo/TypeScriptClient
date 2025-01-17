[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphSerpElementItem

# Class: KnowledgeGraphSerpElementItem

Defined in: main.ts:31019

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphSerpElementItem()

> **new KnowledgeGraphSerpElementItem**(`data`?): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

Defined in: main.ts:31048

#### Parameters

##### data?

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### card\_id?

> `optional` **card\_id**: `string`

Defined in: main.ts:31027

card id

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphSerpElementItem.md#card_id)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:31038

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphSerpElementItem.md#cid)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:31025

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphSerpElementItem.md#description)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:31032

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#image_url)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:31040

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphSerpElementItem.md#items)

***

### logo\_url?

> `optional` **logo\_url**: `string`

Defined in: main.ts:31034

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#logo_url)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31044

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphSerpElementItem.md#rectangle)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:31023

subtitle of the item

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`subtitle`](../interfaces/IKnowledgeGraphSerpElementItem.md#subtitle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31021

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31029

relevant URL in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31053

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

Defined in: main.ts:31084

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

Defined in: main.ts:31077

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
