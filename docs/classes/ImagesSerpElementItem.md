**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImagesSerpElementItem

# Class: ImagesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesSerpElementItem(data)

> **new ImagesSerpElementItem**(`data`?): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

• **data?**: [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:30049

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19817

***

### items?

> **`optional`** **items**: [`ImagesElement`](ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`items`](../interfaces/IImagesSerpElementItem.md#items)

#### Source

main.ts:30038

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`position`](../interfaces/IImagesSerpElementItem.md#position)

#### Source

main.ts:30029

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesSerpElementItem.md#rank_absolute)

#### Source

main.ts:30025

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_group`](../interfaces/IImagesSerpElementItem.md#rank_group)

#### Source

main.ts:30021

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rectangle`](../interfaces/IImagesSerpElementItem.md#rectangle)

#### Source

main.ts:30045

***

### related\_image\_searches?

> **`optional`** **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesSerpElementItem.md#related_image_searches)

#### Source

main.ts:30041

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`title`](../interfaces/IImagesSerpElementItem.md#title)

#### Source

main.ts:30033

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`url`](../interfaces/IImagesSerpElementItem.md#url)

#### Source

main.ts:30035

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`xpath`](../interfaces/IImagesSerpElementItem.md#xpath)

#### Source

main.ts:30031

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

main.ts:30054

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

main.ts:30088

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:30081
