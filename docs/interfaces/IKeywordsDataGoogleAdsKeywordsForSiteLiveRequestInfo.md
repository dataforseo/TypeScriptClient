[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo

Defined in: main.ts:129430

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:129492

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:129500

ending date of the time range
optional field
Note: the indicated date cannot be greater than yesterday’s date;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

***

### include\_adult\_keywords?

> `optional` **include\_adult\_keywords**: `boolean`

Defined in: main.ts:129506

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129479

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:129473

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129458

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:129467

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:129450

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:129484

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:129511

results sorting parameters
optional field
Use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in descending order
default value: relevance

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:129517

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:129435

domain or page
required field
the domain name of the target website or the url of the target page;
note: to obtain keywords for the target website, use the target_type parameter

***

### target\_type?

> `optional` **target\_type**: `string`

Defined in: main.ts:129442

search keywords for site or for url
optional field
possible values: site, page;
default value: page;
if set to site, keywords will be provided for the entire site;
if set to page, keywords will be provided for the specified webpage
