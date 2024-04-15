**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HtmlResourceElementItem

# Class: HtmlResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HtmlResourceElementItem(data)

> **new HtmlResourceElementItem**(`data`?): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

• **data?**: [`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md)

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Source

main.ts:150542

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Source

main.ts:20635

***

### broken\_links?

> **`optional`** **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_links`](../interfaces/IHtmlResourceElementItem.md#broken_links)

#### Source

main.ts:150495

***

### broken\_resources?

> **`optional`** **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`broken_resources`](../interfaces/IHtmlResourceElementItem.md#broken_resources)

#### Source

main.ts:150493

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`cache_control`](../interfaces/IHtmlResourceElementItem.md#cache_control)

#### Source

main.ts:150520

***

### checks?

> **`optional`** **checks**: `Object`

website checks
on-page check-ups related to the page

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`checks`](../interfaces/IHtmlResourceElementItem.md#checks)

#### Source

main.ts:150523

***

### click\_depth?

> **`optional`** **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`click_depth`](../interfaces/IHtmlResourceElementItem.md#click_depth)

#### Source

main.ts:150504

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`content_encoding`](../interfaces/IHtmlResourceElementItem.md#content_encoding)

#### Source

main.ts:150525

***

### custom\_js\_response?

> **`optional`** **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`custom_js_response`](../interfaces/IHtmlResourceElementItem.md#custom_js_response)

#### Source

main.ts:150489

***

### duplicate\_content?

> **`optional`** **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_content`](../interfaces/IHtmlResourceElementItem.md#duplicate_content)

#### Source

main.ts:150501

***

### duplicate\_description?

> **`optional`** **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_description`](../interfaces/IHtmlResourceElementItem.md#duplicate_description)

#### Source

main.ts:150499

***

### duplicate\_title?

> **`optional`** **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`duplicate_title`](../interfaces/IHtmlResourceElementItem.md#duplicate_title)

#### Source

main.ts:150497

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`encoded_size`](../interfaces/IHtmlResourceElementItem.md#encoded_size)

#### Source

main.ts:150510

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`fetch_time`](../interfaces/IHtmlResourceElementItem.md#fetch_time)

#### Source

main.ts:150518

***

### is\_resource?

> **`optional`** **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`is_resource`](../interfaces/IHtmlResourceElementItem.md#is_resource)

#### Source

main.ts:150531

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`last_modified`](../interfaces/IHtmlResourceElementItem.md#last_modified)

#### Source

main.ts:150538

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`location`](../interfaces/IHtmlResourceElementItem.md#location)

#### Source

main.ts:150471

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`media_type`](../interfaces/IHtmlResourceElementItem.md#media_type)

#### Source

main.ts:150527

***

### meta?

> **`optional`** **meta**: [`PageMetaInfo`](PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`meta`](../interfaces/IHtmlResourceElementItem.md#meta)

#### Source

main.ts:150476

***

### onpage\_score?

> **`optional`** **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`onpage_score`](../interfaces/IHtmlResourceElementItem.md#onpage_score)

#### Source

main.ts:150483

***

### page\_timing?

> **`optional`** **page\_timing**: [`PageTiming`](PageTiming.md)

object of page load metrics

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`page_timing`](../interfaces/IHtmlResourceElementItem.md#page_timing)

#### Source

main.ts:150478

***

### relative\_url\_length?

> **`optional`** **relative\_url\_length**: `number`

relative URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`relative_url_length`](../interfaces/IHtmlResourceElementItem.md#relative_url_length)

#### Source

main.ts:150535

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`resource_errors`](../interfaces/IHtmlResourceElementItem.md#resource_errors)

#### Source

main.ts:150491

***

### server?

> **`optional`** **server**: `string`

server version

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`server`](../interfaces/IHtmlResourceElementItem.md#server)

#### Source

main.ts:150529

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`size`](../interfaces/IHtmlResourceElementItem.md#size)

#### Source

main.ts:150507

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`status_code`](../interfaces/IHtmlResourceElementItem.md#status_code)

#### Source

main.ts:150468

***

### total\_dom\_size?

> **`optional`** **total\_dom\_size**: `number`

total DOM size of a page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_dom_size`](../interfaces/IHtmlResourceElementItem.md#total_dom_size)

#### Source

main.ts:150485

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`total_transfer_size`](../interfaces/IHtmlResourceElementItem.md#total_transfer_size)

#### Source

main.ts:150513

***

### url?

> **`optional`** **url**: `string`

page URL

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url`](../interfaces/IHtmlResourceElementItem.md#url)

#### Source

main.ts:150473

***

### url\_length?

> **`optional`** **url\_length**: `number`

page URL length in characters

#### Implementation of

[`IHtmlResourceElementItem`](../interfaces/IHtmlResourceElementItem.md).[`url_length`](../interfaces/IHtmlResourceElementItem.md#url_length)

#### Source

main.ts:150533

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Source

main.ts:150547

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Source

main.ts:150598

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HtmlResourceElementItem`](HtmlResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Source

main.ts:150591
