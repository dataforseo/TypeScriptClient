[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearch()

> **new PeopleAlsoSearch**(`data`?): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

##### data?

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Defined in

main.ts:210865

## Properties

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`cid`](../interfaces/IPeopleAlsoSearch.md#cid)

#### Defined in

main.ts:210852

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`feature_id`](../interfaces/IPeopleAlsoSearch.md#feature_id)

#### Defined in

main.ts:210855

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`rating`](../interfaces/IPeopleAlsoSearch.md#rating)

#### Defined in

main.ts:210861

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`title`](../interfaces/IPeopleAlsoSearch.md#title)

#### Defined in

main.ts:210858

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:210874

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:210894

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

#### Defined in

main.ts:210887
