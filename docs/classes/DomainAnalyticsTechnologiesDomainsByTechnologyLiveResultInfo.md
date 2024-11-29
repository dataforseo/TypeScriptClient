[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo()

> **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Defined in

main.ts:87936

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items)

#### Defined in

main.ts:87932

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items_count)

#### Defined in

main.ts:87924

***

### offset?

> `optional` **offset**: `number`

specified offset value

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset)

#### Defined in

main.ts:87926

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset_token)

#### Defined in

main.ts:87930

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#total_count)

#### Defined in

main.ts:87922

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:87945

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:87970

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Defined in

main.ts:87963
