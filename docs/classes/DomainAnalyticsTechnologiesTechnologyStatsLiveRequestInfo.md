[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

Defined in: main.ts:87022

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo()

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

Defined in: main.ts:87053

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:87036

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_from`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:87043

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_to`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:87049

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`tag`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)

***

### technology?

> `optional` **technology**: `string`

Defined in: main.ts:87028

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`technology`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87062

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:87082

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

Defined in: main.ts:87075

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)
