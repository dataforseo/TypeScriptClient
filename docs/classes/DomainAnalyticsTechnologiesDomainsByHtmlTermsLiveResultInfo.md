[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo()

> **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Defined in

main.ts:78666

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items)

#### Defined in

main.ts:78662

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items_count)

#### Defined in

main.ts:78654

***

### offset?

> `optional` **offset**: `number`

specified offset value

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset)

#### Defined in

main.ts:78656

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset_token)

#### Defined in

main.ts:78660

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#total_count)

#### Defined in

main.ts:78652

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:78675

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:78700

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Defined in

main.ts:78693
