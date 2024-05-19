**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearch(data)

> **new PeopleAlsoSearch**(`data`?): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

• **data?**: [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Source

main.ts:196506

## Properties

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`cid`](../interfaces/IPeopleAlsoSearch.md#cid)

#### Source

main.ts:196493

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`feature_id`](../interfaces/IPeopleAlsoSearch.md#feature_id)

#### Source

main.ts:196496

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`rating`](../interfaces/IPeopleAlsoSearch.md#rating)

#### Source

main.ts:196502

***

### title?

> **`optional`** **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`title`](../interfaces/IPeopleAlsoSearch.md#title)

#### Source

main.ts:196499

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:196515

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:196535

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Source

main.ts:196528
