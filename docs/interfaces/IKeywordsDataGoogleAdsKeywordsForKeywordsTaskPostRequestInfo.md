**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo

## Extends

- [`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`date_from`](IKeywordsDataTaskRequestInfo.md#date_from)

#### Source

main.ts:74009

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
Note: the indicated date cannot be greater than the past month, Google Ads does not return data on the current month;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`date_to`](IKeywordsDataTaskRequestInfo.md#date_to)

#### Source

main.ts:74017

***

### include\_adult\_keywords?

> **`optional`** **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`include_adult_keywords`](IKeywordsDataTaskRequestInfo.md#include_adult_keywords)

#### Source

main.ts:74023

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the keywords you specify will be converted to a lowercase format
Note #1: Google Ads may return no data for certain groups of keywords;
Note #2: Google Ads provides combined search volume values for groups of similar keywords
to obtain search volume for similar keywords, we recommend submitting such keywords in separate requests;
Note #3: Google Ads doesn’t allow using certain symbols and characters (e.g., UTF symbols, emojis), so you can’t use them when setting a task;
to learn more about which symbols can be used, please refer to this article

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`keywords`](IKeywordsDataTaskRequestInfo.md#keywords)

#### Source

main.ts:73959

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`language_code`](IKeywordsDataTaskRequestInfo.md#language_code)

#### Source

main.ts:73996

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`language_name`](IKeywordsDataTaskRequestInfo.md#language_name)

#### Source

main.ts:73990

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`location_code`](IKeywordsDataTaskRequestInfo.md#location_code)

#### Source

main.ts:73975

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`location_coordinate`](IKeywordsDataTaskRequestInfo.md#location_coordinate)

#### Source

main.ts:73984

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`location_name`](IKeywordsDataTaskRequestInfo.md#location_name)

#### Source

main.ts:73967

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`pingback_url`](IKeywordsDataTaskRequestInfo.md#pingback_url)

#### Source

main.ts:74048

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`postback_url`](IKeywordsDataTaskRequestInfo.md#postback_url)

#### Source

main.ts:74038

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`search_partners`](IKeywordsDataTaskRequestInfo.md#search_partners)

#### Source

main.ts:74001

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

results sorting parameters
optional field
use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in the descending order
default value: relevance

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`sort_by`](IKeywordsDataTaskRequestInfo.md#sort_by)

#### Source

main.ts:74028

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Inherited from

[`IKeywordsDataTaskRequestInfo`](IKeywordsDataTaskRequestInfo.md).[`tag`](IKeywordsDataTaskRequestInfo.md#tag)

#### Source

main.ts:74054

***

### target?

> **`optional`** **target**: `string`

target website
optional field
specify a website or URL to get a list of keywords relevant to it;
Note: if a website url is specified, you will still get keywords relevant for the entire website

#### Source

main.ts:122211
