**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AnswerBoxSerpElementItem

# Class: AnswerBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnswerBoxSerpElementItem(data)

> **new AnswerBoxSerpElementItem**(`data`?): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

• **data?**: [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31245

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`links`](../interfaces/IAnswerBoxSerpElementItem.md#links)

#### Source

main.ts:31237

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`position`](../interfaces/IAnswerBoxSerpElementItem.md#position)

#### Source

main.ts:31230

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxSerpElementItem.md#rank_absolute)

#### Source

main.ts:31226

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxSerpElementItem.md#rank_group)

#### Source

main.ts:31222

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rectangle`](../interfaces/IAnswerBoxSerpElementItem.md#rectangle)

#### Source

main.ts:31241

***

### text?

> **`optional`** **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`text`](../interfaces/IAnswerBoxSerpElementItem.md#text)

#### Source

main.ts:31235

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxSerpElementItem.md#xpath)

#### Source

main.ts:31232

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

main.ts:31250

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

main.ts:31282

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31275
