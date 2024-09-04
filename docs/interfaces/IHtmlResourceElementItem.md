[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHtmlResourceElementItem

# Interface: IHtmlResourceElementItem

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_links?

> `optional` **broken\_links**: `boolean`

indicates whether a page contains broken links

#### Defined in

main.ts:155256

***

### broken\_resources?

> `optional` **broken\_resources**: `boolean`

indicates whether a page contains broken resources

#### Defined in

main.ts:155254

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

instructions for caching

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`cache_control`](IBaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:21561

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`checks`](IBaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:21564

***

### click\_depth?

> `optional` **click\_depth**: `number`

number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page

#### Defined in

main.ts:155265

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`content_encoding`](IBaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:21566

***

### custom\_js\_response?

> `optional` **custom\_js\_response**: `any`

the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;you can also filter the results by this value specifying filters in the following way:
["custom_js_response.url", "like", "pixel"]

#### Defined in

main.ts:155252

***

### duplicate\_content?

> `optional` **duplicate\_content**: `boolean`

indicates whether a page has duplicate content

#### Defined in

main.ts:155262

***

### duplicate\_description?

> `optional` **duplicate\_description**: `boolean`

indicates whether a page has a duplicate description

#### Defined in

main.ts:155260

***

### duplicate\_title?

> `optional` **duplicate\_title**: `boolean`

indicates whether a page has duplicate title tags

#### Defined in

main.ts:155258

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`encoded_size`](IBaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:21551

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`fetch_time`](IBaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:21559

***

### is\_resource?

> `optional` **is\_resource**: `boolean`

indicates whether a page is a single resource

#### Defined in

main.ts:155267

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`last_modified`](IBaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:21573

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`location`](IBaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:21541

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`media_type`](IBaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:21568

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

page properties
the value depends on the resource_type

#### Defined in

main.ts:155239

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:155246

***

### page\_timing?

> `optional` **page\_timing**: [`PageTiming`](../classes/PageTiming.md)

object of page load metrics

#### Defined in

main.ts:155241

***

### relative\_url\_length?

> `optional` **relative\_url\_length**: `number`

relative URL length in characters

#### Defined in

main.ts:155271

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

resource errors and warnings

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_errors`](IBaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:21545

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_type`](IBaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:21536

***

### server?

> `optional` **server**: `string`

server version

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`server`](IBaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:21570

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`size`](IBaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:21548

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`status_code`](IBaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:21538

***

### total\_dom\_size?

> `optional` **total\_dom\_size**: `number`

total DOM size of a page

#### Defined in

main.ts:155248

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](IBaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:21554

***

### url?

> `optional` **url**: `string`

page URL

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`url`](IBaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:21543

***

### url\_length?

> `optional` **url\_length**: `number`

page URL length in characters

#### Defined in

main.ts:155269
