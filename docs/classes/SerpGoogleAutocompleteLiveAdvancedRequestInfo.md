**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteLiveAdvancedRequestInfo

# Class: SerpGoogleAutocompleteLiveAdvancedRequestInfo

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteLiveAdvancedRequestInfo(data)

> **new SerpGoogleAutocompleteLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Source

main.ts:51890

## Properties

### client?

> **`optional`** **client**: `string`

search client for autocomplete
optional field
autocomplete results may differ depending on the search client;
possible values:
chrome — used when google search is opened in google chrome;
chrome-omni — used in the address bar in chrome;
gws-wiz — used in google search home page;
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

#### Source

main.ts:51880

***

### cursor\_pointer?

> **`optional`** **cursor\_pointer**: `number`

search bar cursor pointer
optional field
the horizontal numerical position of the cursor pointer within the keyword in the search bar;
by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword;
minimal value: 0
default value: the number of the last symbol of the specified keyword
example:
|which query are s – "cursor_pointer": 0
which query is s| – "cursor_pointer": 16
which que|ry is s – "cursor_pointer": 9

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`cursor_pointer`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#cursor_pointer)

#### Source

main.ts:51864

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#keyword)

#### Source

main.ts:51826

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:51853

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:51846

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:51839

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/autocomplete/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:51833

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:51886

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:51899

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:51923

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)

#### Source

main.ts:51916
