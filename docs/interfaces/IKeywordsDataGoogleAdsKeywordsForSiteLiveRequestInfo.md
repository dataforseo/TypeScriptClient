[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

## Implemented by

- [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../classes/KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_from)
- [date\_to](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_to)
- [include\_adult\_keywords](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#include_adult_keywords)
- [language\_code](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_code)
- [language\_name](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_name)
- [location\_code](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_name)
- [search\_partners](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#search_partners)
- [sort\_by](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#sort_by)
- [tag](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#tag)
- [target](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target)
- [target\_type](IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target_type)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Defined in

[main.ts:115560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115560)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
Note: the indicated date cannot be greater than yesterday’s date;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Defined in

[main.ts:115568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115568)

___


### include\_adult\_keywords

• `Optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Defined in

[main.ts:115574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115574)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Defined in

[main.ts:115547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115547)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Defined in

[main.ts:115541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115541)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Defined in

[main.ts:115526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115526)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Defined in

[main.ts:115535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115535)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:115518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115518)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Defined in

[main.ts:115552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115552)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Defined in

[main.ts:115579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115579)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:115585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115585)

___


### target

• `Optional` **target**: `string`

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Defined in

[main.ts:115503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115503)

___


### target\_type

• `Optional` **target\_type**: `string`

search keywords for site or for url
optional field
possible values: site, page;
default value: page;
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Defined in

[main.ts:115510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115510)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")