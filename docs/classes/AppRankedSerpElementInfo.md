**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppRankedSerpElementInfo

# Class: AppRankedSerpElementInfo

## Implements

- [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppRankedSerpElementInfo(data)

> **new AppRankedSerpElementInfo**(`data`?): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

• **data?**: [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Source

main.ts:111168

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`check_url`](../interfaces/IAppRankedSerpElementInfo.md#check_url)

#### Source

main.ts:111151

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`last_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#last_updated_time)

#### Source

main.ts:111158

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`previous_updated_time`](../interfaces/IAppRankedSerpElementInfo.md#previous_updated_time)

#### Source

main.ts:111164

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_results_count`](../interfaces/IAppRankedSerpElementInfo.md#se_results_count)

#### Source

main.ts:111153

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`se_type`](../interfaces/IAppRankedSerpElementInfo.md#se_type)

#### Source

main.ts:111145

***

### serp\_item?

> **`optional`** **serp\_item**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md).[`serp_item`](../interfaces/IAppRankedSerpElementInfo.md#serp_item)

#### Source

main.ts:111148

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:111177

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:111199

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Source

main.ts:111192
