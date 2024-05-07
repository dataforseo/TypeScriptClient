**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageLighthouseLiveJsonRequestInfo

# Class: OnPageLighthouseLiveJsonRequestInfo

## Implements

- [`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseLiveJsonRequestInfo(data)

> **new OnPageLighthouseLiveJsonRequestInfo**(`data`?): [`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md)

#### Returns

[`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)

#### Source

main.ts:162150

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

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`audits`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#audits)

#### Source

main.ts:162123

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

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`categories`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#categories)

#### Source

main.ts:162110

***

### for\_mobile?

> **`optional`** **for\_mobile**: `boolean`

applies mobile emulation
optional field
if set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environment
if set to false, the results will be provided for desktop
default value: false

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`for_mobile`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#for_mobile)

#### Source

main.ts:162102

***

### language\_code?

> **`optional`** **language\_code**: `string`

lighthouse language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
en

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`language_code`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#language_code)

#### Source

main.ts:162140

***

### language\_name?

> **`optional`** **language\_name**: `string`

lighthouse language name
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
English

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`language_name`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#language_name)

#### Source

main.ts:162134

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`tag`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#tag)

#### Source

main.ts:162146

***

### url?

> **`optional`** **url**: `string`

target URL
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`url`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#url)

#### Source

main.ts:162096

***

### version?

> **`optional`** **version**: `string`

lighthouse version
optional field
you can obtain the results specific to a certain Lighthouse version by specifying its number
the list of available versions is available through the Lighthouse Versions endpoint

#### Implementation of

[`IOnPageLighthouseLiveJsonRequestInfo`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md).[`version`](../interfaces/IOnPageLighthouseLiveJsonRequestInfo.md#version)

#### Source

main.ts:162128

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:162159

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:162191

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)

#### Source

main.ts:162184
