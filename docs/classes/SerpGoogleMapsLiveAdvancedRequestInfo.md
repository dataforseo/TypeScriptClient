[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsLiveAdvancedRequestInfo

# Class: SerpGoogleMapsLiveAdvancedRequestInfo

Defined in: main.ts:42289

## Implements

- [`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedRequestInfo()

> **new SerpGoogleMapsLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

Defined in: main.ts:42405

#### Parameters

##### data?

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:42373

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:42350

device type
optional field
can take the values:desktop, mobile
default value: desktop
note: for mobile device, only 20 results are returned for every SERP

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:42305

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’, ‘-site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:42344

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:42337

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages  of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:42319

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:42330

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,zoom” format
if “zoom” is not specified, 17z will be applied as a default value
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “zoom”: 3z
the maximum value for “zoom”: 21z
example:
52.6178549,-155.352142,20z

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:42312

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:42380

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:42357

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#os)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:42364

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#se_domain)

***

### search\_places?

> `optional` **search\_places**: `boolean`

Defined in: main.ts:42395

search places mode
optional field
the search places mode allows to obtain Google Maps results on a certain place (e.g., Apple Store in New York)
however, due to the pecularities of our data mining algorithm, this mode might interfere with some local-intent queries – and display results for a location that is different from that specified in the request;
to prevent this interference and obtain correct results for keywords with local intent you may set this parameter to false;
default value: true
Note: if the search_places mode is turned off and no results were found in the search area, the results array will be empty

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`search_places`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#search_places)

***

### search\_this\_area?

> `optional` **search\_this\_area**: `boolean`

Defined in: main.ts:42387

search this area
optional field
can take the values:true, false
default value: true
if set to false, the search_this_area mode will be turned off
Note: if the search_this_area mode is turned off, Google Maps listings might contain results beyond the displayed area

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`search_this_area`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#search_this_area)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:42401

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:42295

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://google.com/maps/search/pizza/@37.09024,-95.712891,4z

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`url`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42414

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:42445

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

Defined in: main.ts:42438

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)
