[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseTaskPostRequestInfo

# Class: OnPageLighthouseTaskPostRequestInfo

Defined in: main.ts:175784

## Implements

- [`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTaskPostRequestInfo()

> **new OnPageLighthouseTaskPostRequestInfo**(`data`?): [`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)

Defined in: main.ts:175866

#### Parameters

##### data?

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md)

#### Returns

[`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)

## Properties

### audits?

> `optional` **audits**: `string`[]

Defined in: main.ts:175817

Lighthouse audits
optional field
audits are individual tests Lighthouse runs for each specific feature/optimization/metric to produce a numeric score (see official definition)  
if you ignore this field, we will return data for all audits
use this field to get data for specific audits you indicate here
note that some audits do not belong to a specific category and are stand-alone page quality measurements
in general, there can be several use cases:
1. if you ignore categories, you can use this field to get data for the specified audits only
for example, if you ignore "categories" and specify "audits": ["metrics/cumulative-layout-shift","metrics/largest-contentful-paint","metrics/total-blocking-time"], you will get data only for these audits
2. if you specify a category, you can use this field to additionally receive audits that do not belong to the category(-ies) you specified
for example, if you specify "categories": ["seo"] and "audits": ["metrics/cumulative-layout-shift","metrics/largest-contentful-paint","metrics/total-blocking-time"], you will get only these audits under “performance” and all audits under “seo”
you can get the full list of possible audits here

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`audits`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#audits)

***

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:175804

categories of Lighthouse audits
optional field
each category is a collection of audits and audit groups that applies weighting and scoring to the section (see official definition)
if you ignore this field, we will return data for all categories unless you specify audits
use this field to get data for specific categories you indicate here
possible values:
seo, pwa, performance, best_practices, accessibility

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`categories`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#categories)

***

### for\_mobile?

> `optional` **for\_mobile**: `boolean`

Defined in: main.ts:175796

applies mobile emulation
optional field
if set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environment
if set to false, the results will be provided for desktop
default value: false

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`for_mobile`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#for_mobile)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:175834

lighthouse language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
en

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`language_code`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:175828

lighthouse language name
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
English

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`language_name`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#language_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:175851

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

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:175862

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`postback_url`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#postback_url)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:175840

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`tag`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:175790

target URL
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`url`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#url)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:175822

lighthouse version
optional field
you can obtain the results specific to a certain Lighthouse version by specifying its number
the list of available versions is available through the Lighthouse Versions endpoint

#### Implementation of

[`IOnPageLighthouseTaskPostRequestInfo`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md).[`version`](../interfaces/IOnPageLighthouseTaskPostRequestInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175875

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:175909

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)

Defined in: main.ts:175902

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)
