[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo()

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Defined in

main.ts:77309

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_from`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:77292

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_to`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:77299

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`tag`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)

#### Defined in

main.ts:77305

***

### technology?

> `optional` **technology**: `string`

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`technology`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

#### Defined in

main.ts:77284

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:77318

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:77338

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Defined in

main.ts:77331
