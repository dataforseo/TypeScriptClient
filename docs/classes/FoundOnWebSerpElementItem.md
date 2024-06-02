**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FoundOnWebSerpElementItem(data)

> **new FoundOnWebSerpElementItem**(`data`?): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

• **data?**: [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:36010

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### items?

> **`optional`** **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`items`](../interfaces/IFoundOnWebSerpElementItem.md#items)

#### Source

main.ts:36002

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`position`](../interfaces/IFoundOnWebSerpElementItem.md#position)

#### Source

main.ts:35993

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_absolute`](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

#### Source

main.ts:35989

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_group`](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

#### Source

main.ts:35985

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rectangle`](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

#### Source

main.ts:36006

***

### related\_searches?

> **`optional`** **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`related_searches`](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

#### Source

main.ts:35999

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`title`](../interfaces/IFoundOnWebSerpElementItem.md#title)

#### Source

main.ts:35997

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`xpath`](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

#### Source

main.ts:35995

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

main.ts:36015

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

main.ts:36048

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:36041
