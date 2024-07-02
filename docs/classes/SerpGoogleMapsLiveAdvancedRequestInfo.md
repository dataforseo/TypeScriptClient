**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsLiveAdvancedRequestInfo

# Class: SerpGoogleMapsLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedRequestInfo(data)

> **new SerpGoogleMapsLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Source

main.ts:41413

## Properties

### depth?

> **`optional`** **depth**: `number`

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

#### Source

main.ts:41381

***

### device?

> **`optional`** **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop
note: for mobile device, only 20 results are returned for every SERP

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:41358

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#keyword)

#### Source

main.ts:41313

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:41352

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages  of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:41345

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:41327

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

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

#### Source

main.ts:41338

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:41320

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

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#max_crawl_pages)

#### Source

main.ts:41388

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:41365

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#se_domain)

#### Source

main.ts:41372

***

### search\_places?

> **`optional`** **search\_places**: `boolean`

search places mode
optional field
the search places mode allows to obtain Google Maps results on a certain place (e.g., Apple Store in New York)
however, due to the pecularities of our data mining algorithm, this mode might interfere with some local-intent queries – and display results for a location that is different from that specified in the request;
to prevent this interference and obtain correct results for keywords with local intent you may set this parameter to false;
default value: true
Note: if the search_places mode is turned off and no results were found in the search area, the results array will be empty

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`search_places`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#search_places)

#### Source

main.ts:41403

***

### search\_this\_area?

> **`optional`** **search\_this\_area**: `boolean`

search this area
optional field
can take the values:true, false
default value: true
if set to false, the search_this_area mode will be turned off
Note: if the search_this_area mode is turned off, Google Maps listings might contain results beyond the displayed area

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`search_this_area`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#search_this_area)

#### Source

main.ts:41395

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:41409

***

### url?

> **`optional`** **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://google.com/maps/search/pizza/@37.09024,-95.712891,4z

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md).[`url`](../interfaces/ISerpGoogleMapsLiveAdvancedRequestInfo.md#url)

#### Source

main.ts:41304

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:41422

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:41453

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)

#### Source

main.ts:41446
