[**Documentation**](../README.md)

***

[Documentation](../README.md) / HtmlResourceElementItem

# Class: HtmlResourceElementItem

Defined in: main.ts:167028

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HtmlResourceElementItem()

> **new HtmlResourceElementItem**(`data`?): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

Defined in: main.ts:167070

#### Parameters

##### data?

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22339

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

***

### broken\_links?

> `optional` **broken\_links**: `boolean`

Defined in: main.ts:167051

indicates whether a page contains broken links

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_links`](../interfaces/IHtmlResourceElementItem.md#broken_links)

***

### broken\_resources?

> `optional` **broken\_resources**: `boolean`

Defined in: main.ts:167049

indicates whether a page contains broken resources

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_resources`](../interfaces/IHtmlResourceElementItem.md#broken_resources)

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

Defined in: main.ts:22325

instructions for caching

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`cache_control`](../interfaces/IHtmlResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22328

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`checks`](../interfaces/IHtmlResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

***

### click\_depth?

> `optional` **click\_depth**: `number`

Defined in: main.ts:167060

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`click_depth`](../interfaces/IHtmlResourceElementItem.md#click_depth)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22330

type of encoding

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`content_encoding`](../interfaces/IHtmlResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

***

### custom\_js\_client\_exception?

> `optional` **custom\_js\_client\_exception**: `string`

Defined in: main.ts:167047

error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`custom_js_client_exception`](../interfaces/IHtmlResourceElementItem.md#custom_js_client_exception)

***

### custom\_js\_response?

> `optional` **custom\_js\_response**: `any`

Defined in: main.ts:167044

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`custom_js_response`](../interfaces/IHtmlResourceElementItem.md#custom_js_response)

***

### duplicate\_content?

> `optional` **duplicate\_content**: `boolean`

Defined in: main.ts:167057

indicates whether a page has duplicate content

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_content`](../interfaces/IHtmlResourceElementItem.md#duplicate_content)

***

### duplicate\_description?

> `optional` **duplicate\_description**: `boolean`

Defined in: main.ts:167055

indicates whether a page has a duplicate description

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_description`](../interfaces/IHtmlResourceElementItem.md#duplicate_description)

***

### duplicate\_title?

> `optional` **duplicate\_title**: `boolean`

Defined in: main.ts:167053

indicates whether a page has duplicate title tags

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_title`](../interfaces/IHtmlResourceElementItem.md#duplicate_title)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22315

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`encoded_size`](../interfaces/IHtmlResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22323

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`fetch_time`](../interfaces/IHtmlResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

***

### is\_resource?

> `optional` **is\_resource**: `boolean`

Defined in: main.ts:167062

indicates whether a page is a single resource

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`is_resource`](../interfaces/IHtmlResourceElementItem.md#is_resource)

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

Defined in: main.ts:22337

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`last_modified`](../interfaces/IHtmlResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22305

location header
indicates the URL to redirect a page to

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`location`](../interfaces/IHtmlResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22332

types of media used to display a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`media_type`](../interfaces/IHtmlResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

Defined in: main.ts:167031

page properties
the value depends on the resource_type

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`meta`](../interfaces/IHtmlResourceElementItem.md#meta)

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

Defined in: main.ts:167038

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`onpage_score`](../interfaces/IHtmlResourceElementItem.md#onpage_score)

***

### page\_timing?

> `optional` **page\_timing**: [`PageTiming`](PageTiming.md)

Defined in: main.ts:167033

object of page load metrics

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`page_timing`](../interfaces/IHtmlResourceElementItem.md#page_timing)

***

### relative\_url\_length?

> `optional` **relative\_url\_length**: `number`

Defined in: main.ts:167066

relative URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`relative_url_length`](../interfaces/IHtmlResourceElementItem.md#relative_url_length)

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:22309

resource errors and warnings

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`resource_errors`](../interfaces/IHtmlResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22300

type of the returned resource

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`resource_type`](../interfaces/IHtmlResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22334

server version

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`server`](../interfaces/IHtmlResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22312

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`size`](../interfaces/IHtmlResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22302

status code of the page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`status_code`](../interfaces/IHtmlResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

***

### total\_dom\_size?

> `optional` **total\_dom\_size**: `number`

Defined in: main.ts:167040

total DOM size of a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_dom_size`](../interfaces/IHtmlResourceElementItem.md#total_dom_size)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22318

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_transfer_size`](../interfaces/IHtmlResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22307

page URL

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url`](../interfaces/IHtmlResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

***

### url\_length?

> `optional` **url\_length**: `number`

Defined in: main.ts:167064

page URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url_length`](../interfaces/IHtmlResourceElementItem.md#url_length)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167075

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167107

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

Defined in: main.ts:167100

#### Parameters

##### data

`any`

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)
