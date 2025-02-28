[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskPostRequestInfo

# Class: SerpSeznamOrganicTaskPostRequestInfo

Defined in: main.ts:82746

## Implements

- [`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskPostRequestInfo()

> **new SerpSeznamOrganicTaskPostRequestInfo**(`data`?): [`SerpSeznamOrganicTaskPostRequestInfo`](SerpSeznamOrganicTaskPostRequestInfo.md)

Defined in: main.ts:82879

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md)

#### Returns

[`SerpSeznamOrganicTaskPostRequestInfo`](SerpSeznamOrganicTaskPostRequestInfo.md)

## Properties

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

Defined in: main.ts:82841

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#calculate_rectangles)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:82805

parsing depth
optional field
number of results in SERP
default value: 10;
maximum value: 500;
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:82817

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`device`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:82754

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:82782

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/seznam/languages
example:
cs

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:82775

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/seznam/languages
example:
Czech

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:82768

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/seznam/locations
example:
2840

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:82761

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/seznam/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:82812

page crawl limit
optional field
number of search results pages to crawl
max value: 10
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:82824

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`os`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:82875

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

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:82864

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:82858

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:82796

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:82831

search engine domain
optional field
we choose the relevant search engine domain automatically
however, you can set a custom search engine domain in this field
example:
search.seznam.cz

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:82834

additional parameters of the search query
optional field

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:82847

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:82788

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields;
note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL;
in most cases, we wouldn’t recommend using this method.

#### Implementation of

[`ISerpSeznamOrganicTaskPostRequestInfo`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md).[`url`](../interfaces/ISerpSeznamOrganicTaskPostRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82888

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:82922

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskPostRequestInfo`](SerpSeznamOrganicTaskPostRequestInfo.md)

Defined in: main.ts:82915

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskPostRequestInfo`](SerpSeznamOrganicTaskPostRequestInfo.md)
