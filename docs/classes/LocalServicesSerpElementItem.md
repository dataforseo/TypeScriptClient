**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalServicesSerpElementItem

# Class: LocalServicesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesSerpElementItem(data)

> **new LocalServicesSerpElementItem**(`data`?): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35401

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### domain?

> **`optional`** **domain**: `string`

source domain

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`domain`](../interfaces/ILocalServicesSerpElementItem.md#domain)

#### Source

main.ts:35390

***

### items?

> **`optional`** **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`items`](../interfaces/ILocalServicesSerpElementItem.md#items)

#### Source

main.ts:35393

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`position`](../interfaces/ILocalServicesSerpElementItem.md#position)

#### Source

main.ts:35382

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesSerpElementItem.md#rank_absolute)

#### Source

main.ts:35378

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesSerpElementItem.md#rank_group)

#### Source

main.ts:35374

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rectangle`](../interfaces/ILocalServicesSerpElementItem.md#rectangle)

#### Source

main.ts:35397

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`title`](../interfaces/ILocalServicesSerpElementItem.md#title)

#### Source

main.ts:35386

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`url`](../interfaces/ILocalServicesSerpElementItem.md#url)

#### Source

main.ts:35388

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesSerpElementItem.md#xpath)

#### Source

main.ts:35384

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

main.ts:35406

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

main.ts:35436

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35429
