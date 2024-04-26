**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KnowledgeGraphSerpElementItem

# Class: KnowledgeGraphSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphSerpElementItem(data)

> **new KnowledgeGraphSerpElementItem**(`data`?): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md)

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:28436

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### card\_id?

> **`optional`** **card\_id**: `string`

card id

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`card_id`](../interfaces/IKnowledgeGraphSerpElementItem.md#card_id)

#### Source

main.ts:28414

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`cid`](../interfaces/IKnowledgeGraphSerpElementItem.md#cid)

#### Source

main.ts:28425

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`description`](../interfaces/IKnowledgeGraphSerpElementItem.md#description)

#### Source

main.ts:28412

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`image_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#image_url)

#### Source

main.ts:28419

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphSerpElementItem.md#items)

#### Source

main.ts:28428

***

### logo\_url?

> **`optional`** **logo\_url**: `string`

URL of the logo from knowledge graph

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`logo_url`](../interfaces/IKnowledgeGraphSerpElementItem.md#logo_url)

#### Source

main.ts:28421

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphSerpElementItem.md#position)

#### Source

main.ts:28404

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_absolute)

#### Source

main.ts:28400

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphSerpElementItem.md#rank_group)

#### Source

main.ts:28397

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphSerpElementItem.md#rectangle)

#### Source

main.ts:28432

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the item

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`subtitle`](../interfaces/IKnowledgeGraphSerpElementItem.md#subtitle)

#### Source

main.ts:28410

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphSerpElementItem.md#title)

#### Source

main.ts:28408

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`url`](../interfaces/IKnowledgeGraphSerpElementItem.md#url)

#### Source

main.ts:28416

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphSerpElementItem`](../interfaces/IKnowledgeGraphSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphSerpElementItem.md#xpath)

#### Source

main.ts:28406

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

main.ts:28441

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

main.ts:28476

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:28469
