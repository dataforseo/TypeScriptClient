[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo

## Implemented by

- [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](../classes/KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_from)
- [date\_to](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#date_to)
- [include\_adult\_keywords](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#include_adult_keywords)
- [language\_code](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_code)
- [language\_name](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#language_name)
- [location\_code](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#location_name)
- [pingback\_url](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#postback_url)
- [search\_partners](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#search_partners)
- [sort\_by](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#sort_by)
- [tag](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#tag)
- [target](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target)
- [target\_type](IKeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md#target_type)

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

main.ts:116927

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

main.ts:116935

___

### include\_adult\_keywords

• `Optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Defined in

main.ts:116941

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Defined in

main.ts:116914

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Defined in

main.ts:116908

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

main.ts:116893

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

main.ts:116902

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

main.ts:116885

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

#### Defined in

main.ts:116966

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

#### Defined in

main.ts:116956

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Defined in

main.ts:116919

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

#### Defined in

main.ts:116946

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:116972

___

### target

• `Optional` **target**: `string`

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

#### Defined in

main.ts:116870

___

### target\_type

• `Optional` **target\_type**: `string`

search keywords for site or url
optional field
possible values: site, page;
default value: page
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage

#### Defined in

main.ts:116877
