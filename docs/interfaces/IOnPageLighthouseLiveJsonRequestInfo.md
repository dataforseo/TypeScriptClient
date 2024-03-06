[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageLighthouseLiveJsonRequestInfo

# Interface: IOnPageLighthouseLiveJsonRequestInfo

## Implemented by

- [`OnPageLighthouseLiveJsonRequestInfo`](../classes/OnPageLighthouseLiveJsonRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [audits](IOnPageLighthouseLiveJsonRequestInfo.md#audits)
- [categories](IOnPageLighthouseLiveJsonRequestInfo.md#categories)
- [for\_mobile](IOnPageLighthouseLiveJsonRequestInfo.md#for_mobile)
- [language\_code](IOnPageLighthouseLiveJsonRequestInfo.md#language_code)
- [language\_name](IOnPageLighthouseLiveJsonRequestInfo.md#language_name)
- [tag](IOnPageLighthouseLiveJsonRequestInfo.md#tag)
- [url](IOnPageLighthouseLiveJsonRequestInfo.md#url)
- [version](IOnPageLighthouseLiveJsonRequestInfo.md#version)

## Properties

### audits

• `Optional` **audits**: `string`[]

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

#### Defined in

[main.ts:154863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154863)

___


### categories

• `Optional` **categories**: `string`[]

categories of Lighthouse audits
optional field
each category is a collection of audits and audit groups that applies weighting and scoring to the section (see official definition)
if you ignore this field, we will return data for all categories unless you specify audits
use this field to get data for specific categories you indicate here
possible values:
seo, pwa, performance, best_practices, accessibility

#### Defined in

[main.ts:154850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154850)

___


### for\_mobile

• `Optional` **for\_mobile**: `boolean`

applies mobile emulation
optional field
if set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environment
if set to false, the results will be provided for desktop
default value: false

#### Defined in

[main.ts:154842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154842)

___


### language\_code

• `Optional` **language\_code**: `string`

lighthouse language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
en

#### Defined in

[main.ts:154880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154880)

___


### language\_name

• `Optional` **language\_name**: `string`

lighthouse language name
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/on_page/lighthouse/languages
default value:
English

#### Defined in

[main.ts:154874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154874)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:154886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154886)

___


### url

• `Optional` **url**: `string`

target URL
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/

#### Defined in

[main.ts:154836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154836)

___


### version

• `Optional` **version**: `string`

lighthouse version
optional field
you can obtain the results specific to a certain Lighthouse version by specifying its number
the list of available versions is available through the Lighthouse Versions endpoint

#### Defined in

[main.ts:154868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154868)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")