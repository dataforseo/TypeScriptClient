[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_to)
- [include\_adult\_keywords](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#include_adult_keywords)
- [language\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_code)
- [language\_name](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_name)
- [location\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_name)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#sort_by)
- [tag](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#tag)
- [target](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target)
- [target\_type](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target_type)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Defined in

main.ts:117814

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

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_from)

#### Defined in

main.ts:117785

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

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#date_to)

#### Defined in

main.ts:117793

___

### include\_adult\_keywords

• `Optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[include_adult_keywords](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#include_adult_keywords)

#### Defined in

main.ts:117799

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_code)

#### Defined in

main.ts:117772

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[language_name](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#language_name)

#### Defined in

main.ts:117766

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

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_code)

#### Defined in

main.ts:117751

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

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:117760

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

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#location_name)

#### Defined in

main.ts:117743

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#search_partners)

#### Defined in

main.ts:117777

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[sort_by](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#sort_by)

#### Defined in

main.ts:117804

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#tag)

#### Defined in

main.ts:117810

___

### target

• `Optional` **target**: `string`

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[target](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target)

#### Defined in

main.ts:117728

___

### target\_type

• `Optional` **target\_type**: `string`

search keywords for site or for url
optional field
possible values: site, page;
default value: page;
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md).[target_type](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md#target_type)

#### Defined in

main.ts:117735

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:117823

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:117852

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)

#### Defined in

main.ts:117845
