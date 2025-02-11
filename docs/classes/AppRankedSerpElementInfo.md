[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppRankedSerpElementInfo

# Class: AppRankedSerpElementInfo

Defined in: main.ts:121740

## Implements

- [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppRankedSerpElementInfo()

> **new AppRankedSerpElementInfo**(`data`?): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

Defined in: main.ts:121765

#### Parameters

##### data?

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:121748

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`check_url`](../interfaces/IAppRankedSerpElementInfo.md#check_url)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:121755

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`last_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#last_updated_time)

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:121761

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`previous_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#previous_updated_time)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

Defined in: main.ts:121750

number of search results for the returned keyword

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_results_count`](../interfaces/IAppRankedSerpElementInfo.md#se_results_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121742

search engine type

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_type`](../interfaces/IAppRankedSerpElementInfo.md#se_type)

***

### serp\_item?

> `optional` **serp\_item**: [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)

Defined in: main.ts:121745

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`serp_item`](../interfaces/IAppRankedSerpElementInfo.md#serp_item)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121774

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121796

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

Defined in: main.ts:121789

#### Parameters

##### data

`any`

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)
