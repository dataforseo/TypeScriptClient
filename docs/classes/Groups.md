**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Groups

# Class: Groups

## Implements

- [`IGroups`](../interfaces/IGroups.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Groups(data)

> **new Groups**(`data`?): [`Groups`](Groups.md)

#### Parameters

• **data?**: [`IGroups`](../interfaces/IGroups.md)

#### Returns

[`Groups`](Groups.md)

#### Source

main.ts:76669

## Properties

### categories?

> **`optional`** **categories**: [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)[]

technology categories in this group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`categories`](../interfaces/IGroups.md#categories)

#### Source

main.ts:76665

***

### id?

> **`optional`** **id**: `string`

id of the technology group
example:
marketing, sales

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`id`](../interfaces/IGroups.md#id)

#### Source

main.ts:76661

***

### title?

> **`optional`** **title**: `string`

title of the technology group

#### Implementation of

[`IGroups`](../interfaces/IGroups.md).[`title`](../interfaces/IGroups.md#title)

#### Source

main.ts:76663

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:76678

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:76701

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Groups`](Groups.md)

#### Parameters

• **data**: `any`

#### Returns

[`Groups`](Groups.md)

#### Source

main.ts:76694
