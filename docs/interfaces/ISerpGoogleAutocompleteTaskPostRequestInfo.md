[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAutocompleteTaskPostRequestInfo

# Interface: ISerpGoogleAutocompleteTaskPostRequestInfo

Defined in: main.ts:55334

## Indexable

\[`key`: `string`\]: `any`

## Properties

### client?

> `optional` **client**: `string`

Defined in: main.ts:55405

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

***

### cursor\_pointer?

> `optional` **cursor\_pointer**: `number`

Defined in: main.ts:55388

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

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:55342

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:55377

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:55370

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:55363

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:55357

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/autocomplete/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:55439

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:55428

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:55422

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be url-encoded;
i.e., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:55350

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:55411

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
