[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppRankedSerpElementInfo

# Interface: IAppRankedSerpElementInfo

## Implemented by

- [`AppRankedSerpElementInfo`](../classes/AppRankedSerpElementInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAppRankedSerpElementInfo.md#check_url)
- [last\_updated\_time](IAppRankedSerpElementInfo.md#last_updated_time)
- [previous\_updated\_time](IAppRankedSerpElementInfo.md#previous_updated_time)
- [se\_results\_count](IAppRankedSerpElementInfo.md#se_results_count)
- [se\_type](IAppRankedSerpElementInfo.md#se_type)
- [serp\_item](IAppRankedSerpElementInfo.md#serp_item)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:108688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108688)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:108695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108695)

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Defined in

[main.ts:108701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108701)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Defined in

[main.ts:108690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108690)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:108682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108682)

___

### serp\_item

• `Optional` **serp\_item**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Defined in

[main.ts:108685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L108685)
