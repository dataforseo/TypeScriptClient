**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo(data)

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Source

main.ts:78008

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_from`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)

#### Source

main.ts:77991

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`date_to`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)

#### Source

main.ts:77998

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`tag`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)

#### Source

main.ts:78004

***

### technology?

> **`optional`** **technology**: `string`

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[`technology`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

#### Source

main.ts:77983

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:78017

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:78037

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Source

main.ts:78030
