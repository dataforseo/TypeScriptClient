[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppRankedSerpElementInfo

# Class: AppRankedSerpElementInfo

## Implements

- [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppRankedSerpElementInfo()

> **new AppRankedSerpElementInfo**(`data`?): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

• **data?**: [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Defined in

main.ts:112249

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`check_url`](../interfaces/IAppRankedSerpElementInfo.md#check_url)

#### Defined in

main.ts:112232

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`last_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#last_updated_time)

#### Defined in

main.ts:112239

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`previous_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#previous_updated_time)

#### Defined in

main.ts:112245

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_results_count`](../interfaces/IAppRankedSerpElementInfo.md#se_results_count)

#### Defined in

main.ts:112234

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_type`](../interfaces/IAppRankedSerpElementInfo.md#se_type)

#### Defined in

main.ts:112226

***

### serp\_item?

> `optional` **serp\_item**: [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`serp_item`](../interfaces/IAppRankedSerpElementInfo.md#serp_item)

#### Defined in

main.ts:112229

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:112258

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:112280

***

### fromJS()

> `static` **fromJS**(`data`): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Defined in

main.ts:112273
