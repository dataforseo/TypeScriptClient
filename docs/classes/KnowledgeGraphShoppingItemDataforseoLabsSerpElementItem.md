[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

Defined in: main.ts:107871

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107883

#### Parameters

##### data?

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:107877

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

Defined in: main.ts:107879

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107873

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:107888

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:107912

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107905

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
