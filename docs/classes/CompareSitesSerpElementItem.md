**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CompareSitesSerpElementItem

# Class: CompareSitesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CompareSitesSerpElementItem(data)

> **new CompareSitesSerpElementItem**(`data`?): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Parameters

• **data?**: [`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:37298

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19817

***

### items?

> **`optional`** **items**: [`CompareSitesElement`](CompareSitesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`items`](../interfaces/ICompareSitesSerpElementItem.md#items)

#### Source

main.ts:37290

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`position`](../interfaces/ICompareSitesSerpElementItem.md#position)

#### Source

main.ts:37283

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_absolute`](../interfaces/ICompareSitesSerpElementItem.md#rank_absolute)

#### Source

main.ts:37279

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_group`](../interfaces/ICompareSitesSerpElementItem.md#rank_group)

#### Source

main.ts:37275

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rectangle`](../interfaces/ICompareSitesSerpElementItem.md#rectangle)

#### Source

main.ts:37294

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`title`](../interfaces/ICompareSitesSerpElementItem.md#title)

#### Source

main.ts:37287

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`xpath`](../interfaces/ICompareSitesSerpElementItem.md#xpath)

#### Source

main.ts:37285

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

main.ts:37303

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

main.ts:37331

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:37324
