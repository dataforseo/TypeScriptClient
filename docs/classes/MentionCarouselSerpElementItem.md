**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MentionCarouselSerpElementItem

# Class: MentionCarouselSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MentionCarouselSerpElementItem(data)

> **new MentionCarouselSerpElementItem**(`data`?): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

• **data?**: [`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md)

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:32158

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### items?

> **`optional`** **items**: [`MentionCarouselElement`](MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`items`](../interfaces/IMentionCarouselSerpElementItem.md#items)

#### Source

main.ts:32150

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`position`](../interfaces/IMentionCarouselSerpElementItem.md#position)

#### Source

main.ts:32143

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IMentionCarouselSerpElementItem.md#rank_absolute)

#### Source

main.ts:32139

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rank_group`](../interfaces/IMentionCarouselSerpElementItem.md#rank_group)

#### Source

main.ts:32135

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`rectangle`](../interfaces/IMentionCarouselSerpElementItem.md#rectangle)

#### Source

main.ts:32154

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`title`](../interfaces/IMentionCarouselSerpElementItem.md#title)

#### Source

main.ts:32147

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMentionCarouselSerpElementItem`](../interfaces/IMentionCarouselSerpElementItem.md).[`xpath`](../interfaces/IMentionCarouselSerpElementItem.md#xpath)

#### Source

main.ts:32145

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

main.ts:32163

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

main.ts:32191

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:32184
