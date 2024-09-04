[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HtmlResourceElementItem

# Class: HtmlResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HtmlResourceElementItem()

> **new HtmlResourceElementItem**(`data`?): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

• **data?**: [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Defined in

main.ts:155175

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

main.ts:21436

***

### broken\_links?

> `optional` **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_links`](../interfaces/IHtmlResourceElementItem.md#broken_links)

#### Defined in

main.ts:155156

***

### broken\_resources?

> `optional` **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_resources`](../interfaces/IHtmlResourceElementItem.md#broken_resources)

#### Defined in

main.ts:155154

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`cache_control`](../interfaces/IHtmlResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:21422

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`checks`](../interfaces/IHtmlResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:21425

***

### click\_depth?

> `optional` **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`click_depth`](../interfaces/IHtmlResourceElementItem.md#click_depth)

#### Defined in

main.ts:155165

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`content_encoding`](../interfaces/IHtmlResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:21427

***

### custom\_js\_response?

> `optional` **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`custom_js_response`](../interfaces/IHtmlResourceElementItem.md#custom_js_response)

#### Defined in

main.ts:155152

***

### duplicate\_content?

> `optional` **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_content`](../interfaces/IHtmlResourceElementItem.md#duplicate_content)

#### Defined in

main.ts:155162

***

### duplicate\_description?

> `optional` **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_description`](../interfaces/IHtmlResourceElementItem.md#duplicate_description)

#### Defined in

main.ts:155160

***

### duplicate\_title?

> `optional` **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_title`](../interfaces/IHtmlResourceElementItem.md#duplicate_title)

#### Defined in

main.ts:155158

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`encoded_size`](../interfaces/IHtmlResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:21412

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`fetch_time`](../interfaces/IHtmlResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:21420

***

### is\_resource?

> `optional` **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`is_resource`](../interfaces/IHtmlResourceElementItem.md#is_resource)

#### Defined in

main.ts:155167

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`last_modified`](../interfaces/IHtmlResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:21434

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`location`](../interfaces/IHtmlResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:21402

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`media_type`](../interfaces/IHtmlResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:21429

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`meta`](../interfaces/IHtmlResourceElementItem.md#meta)

#### Defined in

main.ts:155139

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`onpage_score`](../interfaces/IHtmlResourceElementItem.md#onpage_score)

#### Defined in

main.ts:155146

***

### page\_timing?

> `optional` **page\_timing**: [`PageTiming`](PageTiming.md)

object of page load metrics

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`page_timing`](../interfaces/IHtmlResourceElementItem.md#page_timing)

#### Defined in

main.ts:155141

***

### relative\_url\_length?

> `optional` **relative\_url\_length**: `number`

relative URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`relative_url_length`](../interfaces/IHtmlResourceElementItem.md#relative_url_length)

#### Defined in

main.ts:155171

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`resource_errors`](../interfaces/IHtmlResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:21406

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`resource_type`](../interfaces/IHtmlResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:21397

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`server`](../interfaces/IHtmlResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:21431

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`size`](../interfaces/IHtmlResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:21409

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`status_code`](../interfaces/IHtmlResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:21399

***

### total\_dom\_size?

> `optional` **total\_dom\_size**: `number`

total DOM size of a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_dom_size`](../interfaces/IHtmlResourceElementItem.md#total_dom_size)

#### Defined in

main.ts:155148

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_transfer_size`](../interfaces/IHtmlResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:21415

***

### url?

> `optional` **url**: `string`

page URL

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url`](../interfaces/IHtmlResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:21404

***

### url\_length?

> `optional` **url\_length**: `number`

page URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url_length`](../interfaces/IHtmlResourceElementItem.md#url_length)

#### Defined in

main.ts:155169

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Defined in

main.ts:155180

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

main.ts:155211

***

### fromJS()

> `static` **fromJS**(`data`): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

main.ts:155204
