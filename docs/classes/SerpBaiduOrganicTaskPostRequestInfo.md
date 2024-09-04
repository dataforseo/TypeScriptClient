[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduOrganicTaskPostRequestInfo

# Class: SerpBaiduOrganicTaskPostRequestInfo

## Implements

- [`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskPostRequestInfo()

> **new SerpBaiduOrganicTaskPostRequestInfo**(`data`?): [`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md)

#### Returns

[`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)

#### Defined in

main.ts:69576

## Properties

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:69475

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values: desktop, mobile, tablet
default value: desktop

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`device`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#device)

#### Defined in

main.ts:69523

***

### get\_website\_url?

> `optional` **get\_website\_url**: `boolean`

include direct URL for each ranked result
optional field
if set to true, the returned results will contain direct URLs of the ranked websites
by default, the URLs in Baidu results are encoded by the search engine,
for example:
http://www.baidu.com/link?url=KQt6LSwU5OHnPtB8210R8flBP40grY6lTPxH_0UO7S2kgiZMTmw3ztV0hCo5c1kLdefault value: false
Note: if set to true, the charge per task will be multiplied by 10 as our system runs a separate request for each ranked website to return its direct URL

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`get_website_url`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#get_website_url)

#### Defined in

main.ts:69540

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:69458

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/baidu/languagesnote that the only language supported in Baidu search engine is Chinese (Simplified) with the zh_CN language code. However, Baidu may as well return results for queries in other languages, so specifying keyword in Chinese is not mandatory
example:
zh_CN

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:69494

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/baidu/languagesnote that the only language supported in Baidu search engine is Chinese (Simplified). However, Baidu may as well return results for queries in other languages, so specifying keyword in Chinese is not mandatory
example:
Chinese (Simplified)

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:69488

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/baidu/locations
example:
2156

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:69508

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)if you use this field, the returned results will be based on the closest city found for your coordinates. Thus, we don’t recommend using this field as the results might not be relevant to the specified coordinates
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:69518

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/baidu/locations
example:
New York,New York,United States

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:69501

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:69482

***

### os?

> `optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android
if you specify tablet in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`os`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#os)

#### Defined in

main.ts:69532

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

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

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:69572

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, html

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:69562

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:69556

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:69466

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpBaiduOrganicTaskPostRequestInfo`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:69546

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:69585

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:69617

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)

#### Defined in

main.ts:69610
