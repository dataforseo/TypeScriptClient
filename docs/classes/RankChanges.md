[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RankChanges

# Class: RankChanges

## Implements

- [`IRankChanges`](../interfaces/IRankChanges.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankChanges()

> **new RankChanges**(`data`?): [`RankChanges`](RankChanges.md)

#### Parameters

• **data?**: [`IRankChanges`](../interfaces/IRankChanges.md)

#### Returns

[`RankChanges`](RankChanges.md)

#### Defined in

main.ts:91174

## Properties

### is\_down?

> `optional` **is\_down**: `boolean`

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_down`](../interfaces/IRankChanges.md#is_down)

#### Defined in

main.ts:91170

***

### is\_new?

> `optional` **is\_new**: `boolean`

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_new`](../interfaces/IRankChanges.md#is_new)

#### Defined in

main.ts:91164

***

### is\_up?

> `optional` **is\_up**: `boolean`

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_up`](../interfaces/IRankChanges.md#is_up)

#### Defined in

main.ts:91167

***

### previous\_rank\_absolute?

> `optional` **previous\_rank\_absolute**: `number`

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`previous_rank_absolute`](../interfaces/IRankChanges.md#previous_rank_absolute)

#### Defined in

main.ts:91161

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91183

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91203

***

### fromJS()

> `static` **fromJS**(`data`): [`RankChanges`](RankChanges.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankChanges`](RankChanges.md)

#### Defined in

main.ts:91196
