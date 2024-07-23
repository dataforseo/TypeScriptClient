**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppSerpElementItem

# Class: AppSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppSerpElementItem(data)

> **new AppSerpElementItem**(`data`?): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

• **data?**: [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31265

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### items?

> **`optional`** **items**: [`AppElement`](AppElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`items`](../interfaces/IAppSerpElementItem.md#items)

#### Source

main.ts:31257

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`position`](../interfaces/IAppSerpElementItem.md#position)

#### Source

main.ts:31252

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_absolute`](../interfaces/IAppSerpElementItem.md#rank_absolute)

#### Source

main.ts:31248

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_group`](../interfaces/IAppSerpElementItem.md#rank_group)

#### Source

main.ts:31244

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rectangle`](../interfaces/IAppSerpElementItem.md#rectangle)

#### Source

main.ts:31261

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`xpath`](../interfaces/IAppSerpElementItem.md#xpath)

#### Source

main.ts:31254

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

main.ts:31270

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

main.ts:31297

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31290
