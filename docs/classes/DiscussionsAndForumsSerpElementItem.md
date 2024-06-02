**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DiscussionsAndForumsSerpElementItem

# Class: DiscussionsAndForumsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DiscussionsAndForumsSerpElementItem(data)

> **new DiscussionsAndForumsSerpElementItem**(`data`?): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

• **data?**: [`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md)

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:36948

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### items?

> **`optional`** **items**: [`DiscussionsAndForumsElement`](DiscussionsAndForumsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`items`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#items)

#### Source

main.ts:36940

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`position`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#position)

#### Source

main.ts:36933

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rank_absolute`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_absolute)

#### Source

main.ts:36929

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rank_group`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rank_group)

#### Source

main.ts:36925

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`rectangle`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#rectangle)

#### Source

main.ts:36944

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`title`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#title)

#### Source

main.ts:36937

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IDiscussionsAndForumsSerpElementItem`](../interfaces/IDiscussionsAndForumsSerpElementItem.md).[`xpath`](../interfaces/IDiscussionsAndForumsSerpElementItem.md#xpath)

#### Source

main.ts:36935

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

main.ts:36953

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

main.ts:36981

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:36974
