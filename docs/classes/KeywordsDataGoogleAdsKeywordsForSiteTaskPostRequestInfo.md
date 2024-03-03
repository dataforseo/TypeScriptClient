[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_from)
- [date\_to](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_to)
- [include\_adult\_keywords](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#include_adult_keywords)
- [language\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_code)
- [language\_name](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_name)
- [location\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_name)
- [pingback\_url](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#pingback_url)
- [postback\_url](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#postback_url)
- [search\_partners](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#sort_by)
- [tag](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#tag)
- [target](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target)
- [target\_type](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target_type)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

#### Defined in

main.ts:114567

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[date_from](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_from)

#### Defined in

main.ts:114518

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[date_to](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_to)

#### Defined in

main.ts:114526

___

### include\_adult\_keywords

• `Optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[include_adult_keywords](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#include_adult_keywords)

#### Defined in

main.ts:114532

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[language_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:114505

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[language_name](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:114499

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:114484

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:114493

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[location_name](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:114476

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[pingback_url](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:114557

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[postback_url](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:114547

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[search_partners](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#search_partners)

#### Defined in

main.ts:114510

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[sort_by](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#sort_by)

#### Defined in

main.ts:114537

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[tag](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:114563

___

### target

• `Optional` **target**: `string`

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[target](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target)

#### Defined in

main.ts:114461

___

### target\_type

• `Optional` **target\_type**: `string`

search keywords for site or url
optional field
possible values: site, page;
default value: page
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md).[target_type](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target_type)

#### Defined in

main.ts:114468

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

main.ts:114576

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

main.ts:114607

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

#### Defined in

main.ts:114600
