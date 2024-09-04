[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphSerpElementItem

# Class: KnowledgeGraphSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphSerpElementItem()

> **new KnowledgeGraphSerpElementItem**(`data`?): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:29326

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### card\_id?

> `optional` **card\_id**: `string`

card id

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphSerpElementItem.md#card_id)

#### Defined in

main.ts:29304

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphSerpElementItem.md#cid)

#### Defined in

main.ts:29315

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphSerpElementItem.md#description)

#### Defined in

main.ts:29302

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#image_url)

#### Defined in

main.ts:29309

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphSerpElementItem.md#items)

#### Defined in

main.ts:29318

***

### logo\_url?

> `optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#logo_url)

#### Defined in

main.ts:29311

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphSerpElementItem.md#position)

#### Defined in

main.ts:29294

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29290

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_group)

#### Defined in

main.ts:29287

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphSerpElementItem.md#rectangle)

#### Defined in

main.ts:29322

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the item

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`subtitle`](../interfaces/IKnowledgeGraphSerpElementItem.md#subtitle)

#### Defined in

main.ts:29300

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphSerpElementItem.md#title)

#### Defined in

main.ts:29298

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphSerpElementItem.md#url)

#### Defined in

main.ts:29306

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphSerpElementItem.md#xpath)

#### Defined in

main.ts:29296

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

main.ts:29331

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

main.ts:29366

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29359
