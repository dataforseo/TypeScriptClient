[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleEventsLiveAdvancedRequestInfo

# Interface: ISerpGoogleEventsLiveAdvancedRequestInfo

## Implemented by

- [`SerpGoogleEventsLiveAdvancedRequestInfo`](../classes/SerpGoogleEventsLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_range](ISerpGoogleEventsLiveAdvancedRequestInfo.md#date_range)
- [depth](ISerpGoogleEventsLiveAdvancedRequestInfo.md#depth)
- [keyword](ISerpGoogleEventsLiveAdvancedRequestInfo.md#keyword)
- [language\_code](ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_name)
- [location\_code](ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_code)
- [location\_coordinate](ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_coordinate)
- [location\_name](ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_name)
- [max\_crawl\_pages](ISerpGoogleEventsLiveAdvancedRequestInfo.md#max_crawl_pages)
- [os](ISerpGoogleEventsLiveAdvancedRequestInfo.md#os)
- [se\_domain](ISerpGoogleEventsLiveAdvancedRequestInfo.md#se_domain)
- [tag](ISerpGoogleEventsLiveAdvancedRequestInfo.md#tag)

## Properties

### date\_range

• `Optional` **date\_range**: `string`

date range to get events for
optional field
if you do not use this field, we will return all events
possible values: today, tomorrow, week, weekend, next_week, month, next_month

#### Defined in

main.ts:45406

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

main.ts:45428

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Defined in

main.ts:45360

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Defined in

main.ts:45401

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Defined in

main.ts:45393

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
2840

#### Defined in

main.ts:45374

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
data will be provided for the country the specified coordinates belong to
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Defined in

main.ts:45385

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:45367

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Defined in

main.ts:45435

___

### os

• `Optional` **os**: `string`

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Defined in

main.ts:45412

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Defined in

main.ts:45419

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:45441
