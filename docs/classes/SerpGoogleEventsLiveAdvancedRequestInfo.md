**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleEventsLiveAdvancedRequestInfo

# Class: SerpGoogleEventsLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsLiveAdvancedRequestInfo(data)

> **new SerpGoogleEventsLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Source

main.ts:45921

## Properties

### date\_range?

> **`optional`** **date\_range**: `string`

date range to get events for
optional field
if you do not use this field, we will return all events
possible values: today, tomorrow, week, weekend, next_week, month, next_month

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`date_range`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#date_range)

#### Source

main.ts:45882

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#depth)

#### Source

main.ts:45904

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#keyword)

#### Source

main.ts:45836

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:45877

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:45869

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
2840

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:45850

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

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

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_coordinate)

#### Source

main.ts:45861

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:45843

***

### max\_crawl\_pages?

> **`optional`** **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#max_crawl_pages)

#### Source

main.ts:45911

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:45888

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#se_domain)

#### Source

main.ts:45895

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:45917

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:45930

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:45958

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Source

main.ts:45951
