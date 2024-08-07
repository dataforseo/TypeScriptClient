**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageLighthouseTaskPostRequestInfo

# Interface: IOnPageLighthouseTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### audits?

> **`optional`** **audits**: `string`[]

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

#### Source

main.ts:166152

***

### categories?

> **`optional`** **categories**: `string`[]

categories of Lighthouse audits
optional field
each category is a collection of audits and audit groups that applies weighting and scoring to the section (see official definition)
if you ignore this field, we will return data for all categories unless you specify audits
use this field to get data for specific categories you indicate here
possible values:
seo, pwa, performance, best_practices, accessibility

#### Source

main.ts:166139

***

### for\_mobile?

> **`optional`** **for\_mobile**: `boolean`

applies mobile emulation
optional field
if set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environment
if set to false, the results will be provided for desktop
default value: false

#### Source

main.ts:166131

***

### language\_code?

> **`optional`** **language\_code**: `string`

lighthouse language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
en

#### Source

main.ts:166169

***

### language\_name?

> **`optional`** **language\_name**: `string`

lighthouse language name
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
English

#### Source

main.ts:166163

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

#### Source

main.ts:166185

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
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Source

main.ts:166195

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:166175

***

### url?

> **`optional`** **url**: `string`

target URL
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/

#### Source

main.ts:166125

***

### version?

> **`optional`** **version**: `string`

lighthouse version
optional field
you can obtain the results specific to a certain Lighthouse version by specifying its number
the list of available versions is available through the Lighthouse Versions endpoint

#### Source

main.ts:166157
