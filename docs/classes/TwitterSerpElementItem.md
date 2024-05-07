**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TwitterSerpElementItem

# Class: TwitterSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterSerpElementItem(data)

> **new TwitterSerpElementItem**(`data`?): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

• **data?**: [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:30153

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: [`TwitterElement`](TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`items`](../interfaces/ITwitterSerpElementItem.md#items)

#### Source

main.ts:30145

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`position`](../interfaces/ITwitterSerpElementItem.md#position)

#### Source

main.ts:30136

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterSerpElementItem.md#rank_absolute)

#### Source

main.ts:30132

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_group`](../interfaces/ITwitterSerpElementItem.md#rank_group)

#### Source

main.ts:30128

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rectangle`](../interfaces/ITwitterSerpElementItem.md#rectangle)

#### Source

main.ts:30149

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`title`](../interfaces/ITwitterSerpElementItem.md#title)

#### Source

main.ts:30140

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`url`](../interfaces/ITwitterSerpElementItem.md#url)

#### Source

main.ts:30142

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`xpath`](../interfaces/ITwitterSerpElementItem.md#xpath)

#### Source

main.ts:30138

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

main.ts:30158

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

main.ts:30187

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:30180
