[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteLiveAdvancedRequestInfo

# Class: SerpGoogleAutocompleteLiveAdvancedRequestInfo

Defined in: main.ts:56384

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteLiveAdvancedRequestInfo()

> **new SerpGoogleAutocompleteLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

Defined in: main.ts:56457

#### Parameters

##### data?

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

## Properties

### client?

> `optional` **client**: `string`

Defined in: main.ts:56447

search client for autocomplete
optional field
autocomplete results may differ depending on the search client;
possible values:
chrome — used when google search is opened in google chrome;
chrome-omni — used in the address bar in chrome;
gws-wiz — used in google search home page;
gws-wiz-serp — used in google search engine results page;
safari — used when google search is opened in safari browser;
firefox — used when google search is opened in firefox browser;
psy-ab — may be used when google search is opened in google chrome browser;
toolbar — returns XML;
youtube — returns JSONP;
gws-wiz-local — used in google local;
img — used in google’s image search;
products-cc — used in google shopping search

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`client`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#client)

***

### cursor\_pointer?

> `optional` **cursor\_pointer**: `number`

Defined in: main.ts:56430

search bar cursor pointer
optional field
the horizontal numerical position of the cursor pointer within the keyword in the search bar;
by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword;
minimal value: 0
default value: the number of the last character of the specified keyword
example:
|which query are s – "cursor_pointer": 0
which query is s| – "cursor_pointer": 16
which que|ry is s – "cursor_pointer": 9

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`cursor_pointer`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#cursor_pointer)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:56392

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:56419

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:56412

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:56405

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:56399

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/autocomplete/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:56453

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:56466

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:56490

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

Defined in: main.ts:56483

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)
