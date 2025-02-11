[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

Defined in: main.ts:211418

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearch()

> **new PeopleAlsoSearch**(`data`?): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

Defined in: main.ts:211435

#### Parameters

##### data?

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)

## Properties

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:211422

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`cid`](../interfaces/IPeopleAlsoSearch.md#cid)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:211425

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`feature_id`](../interfaces/IPeopleAlsoSearch.md#feature_id)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:211431

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`rating`](../interfaces/IPeopleAlsoSearch.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:211428

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`title`](../interfaces/IPeopleAlsoSearch.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211444

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211464

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoSearch`](PeopleAlsoSearch.md)

Defined in: main.ts:211457

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoSearch`](PeopleAlsoSearch.md)
