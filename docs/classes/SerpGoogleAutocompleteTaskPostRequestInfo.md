**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTaskPostRequestInfo

# Class: SerpGoogleAutocompleteTaskPostRequestInfo

## Implements

- [`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTaskPostRequestInfo(data)

> **new SerpGoogleAutocompleteTaskPostRequestInfo**(`data`?): [`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)

#### Source

main.ts:52533

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`client`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#client)

#### Source

main.ts:52497

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`cursor_pointer`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#cursor_pointer)

#### Source

main.ts:52480

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#keyword)

#### Source

main.ts:52434

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#language_code)

#### Source

main.ts:52469

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#language_name)

#### Source

main.ts:52462

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#location_code)

#### Source

main.ts:52455

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

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#location_name)

#### Source

main.ts:52449

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:52529

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:52519

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be url-encoded;
i.e., the # symbol will be encoded into %23

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:52513

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#priority)

#### Source

main.ts:52442

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAutocompleteTaskPostRequestInfo`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTaskPostRequestInfo.md#tag)

#### Source

main.ts:52503

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:52542

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:52570

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)

#### Source

main.ts:52563
